import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";

export default function HTMLCodeRunner({ code }) {
  return (
    <Sandpack
      template="vanilla" // Use the "vanilla" template for plain HTML/JS
      files={{
        "/index.html": `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML Preview</title>
    <!-- You can add other external CSS/CDN links here -->
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  </head>
  <body class="bg-gray-100">
    ${code} <!-- Inject your HTML code here -->
  </body>
</html>`,
      }}
      options={{
        showLineNumbers: true, // Optional: Show line numbers in editor
        editorHeight: 400, // Optional: Set editor height
        showConsole: false, // Optional: Hide the console if not needed
      }}
    />
  );
}
