import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const runQuery = async () => {
    if (!query.trim()) {
      setError("Please enter a SQL query.");
      return;
    }

    setError("");
    setMessage("");
    setResult([]);

    try {
      const res = await axios.post("http://localhost:5001/api/query", { query });
      const { success, type, result: data } = res.data;

      if (!success) {
        setError(res.data.error || "Query failed.");
        return;
      }

      if (type === "select" && Array.isArray(data)) {
        setResult(data);
      } else {
        setMessage("✅ Query executed successfully!");
      }
    } catch (err) {
      console.error(err);
      setError("❌ Cannot connect to backend. Make sure the server is running.");
    }
  };

  return (
    <div className="container">
      <h1>🧩 SQL Query Runner</h1>
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={`Try:\nCREATE TABLE users(id INTEGER PRIMARY KEY, name TEXT);\nINSERT INTO users(name) VALUES('Aditya');\nSELECT * FROM users;`}
      ></textarea>
      <button onClick={runQuery}>Run Query</button>

      {error && <p className="error">{error}</p>}
      {message && <p className="success">{message}</p>}

      {Array.isArray(result) && result.length > 0 && (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                {Object.keys(result[0]).map((col) => (
                  <th key={col}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {result.map((row, i) => (
                <tr key={i}>
                  {Object.values(row).map((val, j) => (
                    <td key={j}>{String(val)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
