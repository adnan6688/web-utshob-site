import React, { useState } from "react";



export default function SendMsg() {
    const [apiKey, setApiKey] = useState("77b529f8a4bdbe0e52d6051adeb822b40962f222");
    const [senderId, setSenderId] = useState("8809617613330");
    const [receiver, setReceiver] = useState("01816243987");
    const [message, setMessage] = useState("Test SMS from Muthobarta & Muthofun.");
    const [loading, setLoading] = useState(false);
    const [responseText, setResponseText] = useState(null);
    const [error, setError] = useState(null);

    async function handleSendClick() {

        if (!apiKey) {
            setError("Please provide the API Key (Authorization header value).\nYou can set REACT_APP_MUTHOBARTA_API_KEY or paste it above.");
            setResponseText(null);
            return;
        }
        if (!receiver || !message) {
            setError("Receiver and message cannot be empty.");
            setResponseText(null);
            return;
        }

        setLoading(true);
        setError(null);
        setResponseText(null);

        try {
            const res = await fetch("https://sysadmin.muthobarta.com/api/v1/send-sms", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                    Authorization: `Token ${apiKey}`,
                },
                body: JSON.stringify({
                    "sender_id": senderId,
                    "receiver": receiver,
                    "message": "Test SMS from Muthobarta & Muthofun.",
                    "remove_duplicate": true

                }),
            });

            const data = await res.json();

            console.log("send data", data)

            if (!res.ok) {

                const errMsg = data && data.message ? `${data.message} (status ${res.status})` : `Request failed with status ${res.status}`;
                setError(errMsg);
            } else {
                setResponseText(JSON.stringify(data, null, 2));
            }
        } catch (err) {
            setError(err.message || "Network error");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Send SMS — Muthobarta</h2>

            <label className="block text-sm mb-1">API Key (Authorization header)</label>
            <input
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Paste API key here or set REACT_APP_MUTHOBARTA_API_KEY"
                className="w-full mb-3 p-2 border rounded-md"
            />

            <label className="block text-sm mb-1">Sender ID</label>
            <input
                value={senderId}
                onChange={(e) => setSenderId(e.target.value)}
                className="w-full mb-3 p-2 border rounded-md"
            />

            <label className="block text-sm mb-1">Receiver (comma-separated)</label>
            <input
                value={receiver}
                onChange={(e) => setReceiver(e.target.value)}
                className="w-full mb-3 p-2 border rounded-md"
            />

            <label className="block text-sm mb-1">Message</label>
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full mb-3 p-2 border rounded-md h-28"
            />

            <div className="flex gap-3 items-center">
                <button
                    onClick={handleSendClick}
                    disabled={loading}
                    className={`px-4 py-2 rounded-lg text-white ${loading ? "bg-gray-400" : "bg-black"}`}
                >
                    {loading ? "Sending..." : "Send SMS"}
                </button>

                <button
                    onClick={() => {

                        setReceiver("01934115336,01730586226");
                        setMessage("Hello from Muthobarta example message!");
                        setError(null);
                        setResponseText(null);
                    }}
                    className="px-3 py-2 rounded-lg border"
                >
                    Fill Example
                </button>
            </div>

            {error && (
                <pre className="mt-4 p-3 bg-red-50 text-red-700 rounded">{error}</pre>
            )}

            {responseText && (
                <div className="mt-4">
                    <h3 className="font-medium mb-2">Response</h3>
                    <pre className="p-3 bg-green-50 text-green-800 rounded max-h-60 overflow-auto">{responseText}</pre>
                </div>
            )}

            <p className="mt-4 text-xs text-gray-500">Note: API expects the Authorization header value to be the API key directly (no "Bearer " prefix).</p>
        </div>
    );
}
