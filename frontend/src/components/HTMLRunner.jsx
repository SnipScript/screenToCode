// import React from "react";

// const HTMLRunner = ({ htmlContent, title = "HTML Preview" }) => {
//   return (
//     <div className="max-w-4xl w-full mx-auto p-4 bg-white shadow-lg rounded-lg overflow-hidden">
//       <h3 className="text-md text-center font-semibold text-gray-600 mb-4 border-b-2">
//         {title}
//       </h3>
//       <div
//         className="prose max-w-none overflow-x-auto" // Add overflow-x-auto to handle horizontal overflow
//         dangerouslySetInnerHTML={{ __html: htmlContent }}
//       />
//     </div>
//   );
// };

// export default HTMLRunner;

import React from "react";

const HTMLPreview = ({ htmlContent, title = "HTML Preview" }) => {
  return (
    <div className="flex flex-col w-full h-full bg-white shadow-lg rounded-lg overflow-hidden">
      <h3 className="text-lg text-center font-semibold text-gray-600 mb-4 border-b-2">
        {title}
      </h3>
      <div className="flex-1 w-full overflow-hidden">
        <iframe
          title="HTML Preview"
          srcDoc={htmlContent}
          className="w-full h-full border-none"
        />
      </div>
    </div>
  );
};

export default HTMLPreview;
