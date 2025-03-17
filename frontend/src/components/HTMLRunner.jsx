import React from "react";

const HTMLRunner = ({ htmlContent, title = "HTML Preview" }) => {
  return (
    <div className="max-w-4xl w-full mx-auto p-4 bg-white shadow-lg rounded-lg overflow-hidden">
      <h3 className="text-3xl text-center font-semibold text-gray-800 mb-4 border-b-2">
        {title}
      </h3>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default HTMLRunner;
