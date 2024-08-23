import React, { useState } from "react";
import "./styles/app.scss";
import Navbar from "./components/navbar/navbar";

const App = () => {
  const [context, setContext] = useState("");
  const [question, setQuestion] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch("https://awais009-sqlgpt.hf.space/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ context, question }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setQuery(data.response); // Assume the response contains the query as 'response'
    } catch (error) {
      setError("Failed to fetch query: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(query)
      .then(() => alert("Query copied to clipboard!"))
      .catch((error) => alert("Failed to copy query: " + error.message));
  };

  return (
    <div className="main">
      <Navbar />
      <div className="text">
        <h3 className="main-title">SQLGPT</h3>
        <p className="desc">Turn your words into SQL Queries</p>
        <p className="instruction">
          You should pass the table information and then you can query
        </p>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="context">Context</label>
          <textarea
            id="context"
            name="context"
            className="input"
            value={context}
            onChange={(e) => setContext(e.target.value)}
          />
          <label htmlFor="question">Question</label>
          <textarea
            id="question"
            name="question"
            className="input"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
        {error && <p className="error">{error}</p>}
        {query && (
          <div className="result">
            <h4>Generated Query:</h4>
            <pre>
              <code>{query}</code>
            </pre>
            <button onClick={handleCopy}>Copy to Clipboard</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
