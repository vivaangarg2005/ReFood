import React, { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setDark((d) => !d)}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "1.3rem",
        marginLeft: "1rem",
        color: "inherit",
      }}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
