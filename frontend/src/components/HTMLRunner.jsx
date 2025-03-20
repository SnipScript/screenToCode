// import React from "react";

// const HTMLRunner = ({ htmlContent, title = "HTML Preview" }) => {
//   return (
//     <div className="w-full max-w-4xl p-4 mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
//       <h3 className="mb-4 font-semibold text-center text-gray-600 border-b-2 text-md">
//         {title}
//       </h3>
//       <div
//         className="overflow-x-auto prose max-w-none" // Add overflow-x-auto to handle horizontal overflow
//         dangerouslySetInnerHTML={{ __html: htmlContent }}
//       />
//     </div>
//   );
// };

// export default HTMLRunner;

import React from "react";

const HTMLPreview = ({ htmlContent, title = "HTML Preview" }) => {
  return (
    <div className="flex flex-col w-full min-h-[400px] shadow-[0_0_1px_1px_rgba(0,0,0,.05)] overflow-hidden bg-white rounded-lg ">
      <h3 className="py-4 text-lg font-semibold text-center text-gray-600">
        {title}
      </h3>
      <div className="flex-1 w-full h-full ">
        <iframe
          width="100%"
          height="400"
          title="HTML Preview"
          srcDoc={htmlContent}
        />
      </div>
    </div>
  );
};

export default HTMLPreview;
