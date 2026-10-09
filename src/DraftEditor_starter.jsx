
import { useState, useEffect, useRef } from "react";

function DraftEditor() {
  const [text, setText] = useState("");

  // Reference for the input field
  const inputRef = useRef(null);

  // Reference for counting renders
  const renderCount = useRef(0);

  // TODO 1: Automatically focus the input when the component mounts
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // TODO 2: Log the draft whenever the text changes
  useEffect(() => {
    console.log("Draft saved: " + text);
  }, [text]);

  // TODO 3: Increment render count
  renderCount.current += 1;

  return (
    <div style={{
      maxWidth: "500px",
      margin: "50px auto",
      padding: "25px",
      fontFamily: "Arial, sans-serif",
      border: "1px solid #ddd",
      borderRadius: "12px"
    }}>
      <h2>Draft Editor</h2>

      <label htmlFor="draft">Your Draft:</label>

      <input
        id="draft"
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your draft here..."
        style={{
          display: "block",
          width: "100%",
          boxSizing: "border-box",
          padding: "12px",
          marginTop: "10px",
          marginBottom: "20px"
        }}
      />

      <p>
        <strong>Character Count:</strong> {text.length}
      </p>

      <p>
        <strong>Render Count:</strong> {renderCount.current}
      </p>

      <p>
        <strong>Draft Preview:</strong> {text || "No draft yet"}
      </p>

      {/* TODO 4: Display renderCount.current above */}

      {/*
        Explanation:
        useRef stores a value between renders without triggering a
        re-render when its current property changes. The renderCount
        value increases whenever the component renders, but changing
        the ref alone does not update the screen. In this activity,
        typing changes the text state and causes a re-render, so the
        displayed count may increase as well. The ref itself does
        not cause that re-render.
      */}
    </div>
  );
}

export default DraftEditor;
