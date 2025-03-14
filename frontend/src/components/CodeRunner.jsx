import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";

export default function CodeRunner({ code, framework }) {
  return (
    <Sandpack
      template={framework} // React, Vue, Vanilla JS, Svelte, etc.
      files={{ "/App.js": code }} // Injects the code into App.js
      options={{
        showLineNumbers: true, // Enable line numbers
        editorHeight: 400, // Adjust editor height
        editorWidthPercentage: 60, // Control editor size
        showConsole: true, // Show console for debugging
        showInlineErrors: true, // Show errors inside editor
      }}
    />
  );
}
