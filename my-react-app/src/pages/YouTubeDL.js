import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

// TODO : move this to .env
const RENDER_BASE_URL = "https://yt-helper-dl.onrender.com";

export function YouTubeDLContent() {
    const logBoxRef = useRef(null);

    const [url, setUrl] = useState("");
    const [jobId, setJobId] = useState(null);
    const [status, setStatus] = useState(null);
    const [logs, setLogs] = useState([]);
    const [downloadReady, setDownloadReady] = useState(false);
    const [polling, setPolling] = useState(false);

    useEffect(() => {
        if (logBoxRef.current) {
            logBoxRef.current.scrollTop = logBoxRef.current.scrollHeight;
        }
    }, [logs]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLogs([]);
        setStatus("starting");
        setDownloadReady(false);
        setPolling(true);

        try {
            const cleanedUrl = url.split('&list=')[0];
            const res = await axios.post(`${RENDER_BASE_URL}/download`, null, {
                params: { url: cleanedUrl },
            });
            console.log("Response data:", res.data);
            const { job_id } = res.data;
            setJobId(job_id);
            pollStatus(job_id);
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    };

    const pollStatus = async (job_id) => {
        const interval = setInterval(async () => {
            try {
                const statusRes = await axios.get(`${RENDER_BASE_URL}/status/${job_id}`);
                const logRes = await axios.get(`${RENDER_BASE_URL}/logs/${job_id}`);

                setStatus(statusRes.data.status);
                setLogs(logRes.data.logs);

                if (statusRes.data.status === "success" || statusRes.data.status === "failed") {
                    clearInterval(interval);
                    setPolling(false);
                    if (statusRes.data.status === "success") {
                        setDownloadReady(true);
                    }
                }
            } catch (err) {
                console.error("Polling failed", err);
                clearInterval(interval);
                setPolling(false);
                setStatus("error");
            }
        }, 2000);
    };

    return (
        <div style={{ padding: "2rem" }}>
            <h2>YouTube Video Downloader</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter YouTube URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    style={{ width: "60%", marginRight: "1rem" }}
                />
                <button type="submit">Download</button>
            </form>

            {status && <p>Status: {status}</p>}

            {logs.length > 0 &&
                <div
                    ref={logBoxRef}
                    style={{
                        marginTop: "1rem",
                        maxHeight: "200px",
                        overflowY: "auto",
                        background: "black",
                        padding: "1rem",
                        fontFamily: "monospace",
                    }}
                >
                    <pre>{logs.join("\n")}</pre>
                </div>
            }

            {downloadReady && (
                <a href={`${RENDER_BASE_URL}/file`} download>
                    <button style={{ marginTop: "1rem" }}>Download Video</button>
                </a>
            )}
        </div>
    );
}


export function YouTubeDLTop() {
    return <h1>YouTube Downloader</h1>;
}