import React, { useState } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Card from "../components/ui/Card";
import CardContent from "../components/ui/CardContent";
import Editor from "@monaco-editor/react"; // Monaco Editor for live code preview
import CommonContainer from "../common/CommonContainer";
import CommonSpace from "../common/CommonSpace";
import { BsCodeSquare } from "react-icons/bs";
import Spinner from "../components/ui/Spinner";
import toast, { Toaster } from "react-hot-toast";
import { generateCode } from "../frontendApp";
import CodeRunner from "../components/CodeRunner";
import HTMLRunner from "../components/HTMLRunner";
import { codeOptions } from "../data/data";

export default function CodeSelectionPage() {
  const [modal, setModal] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState(codeOptions[0]);
  const [code, setCode] = useState(selectedFormat.template);
  const [textPrompt, setTextPrompt] = useState("");
  const [url, setUrl] = useState("");
  const [droppedFile, setDroppedFile] = useState(null);
  const [isCreatingCode, setIsCreatingCode] = useState(false);

  // Function to reset code to its original template
  const handleResetCode = () => {
    // setCode(selectedFormat.template);
    setCode("");
  };

  // Function to download generated code
  const handleDownload = (format) => {
    const blob = new Blob([code], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `generated_code.${format}`;
    link.click();
  };

  // Function to copy code to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    // alert("Code copied to clipboard!");
    toast.success("Code copied to clipboard!");
  };

  // Simulate AI-generated code from text prompt
  const handleGenerateFromText = () => {
    if (!textPrompt.trim()) return;
    setCode(
      `/* AI-generated code for: ${textPrompt} */\n<div>Generated Code Here</div>`
    );
  };

  const handleDrop = (event) => {
    event.preventDefault();

    // Extract the dropped files
    const files = event.dataTransfer.files;

    if (files.length > 0) {
      const file = files[0];

      // Check if the file is an image
      if (file.type.startsWith("image/")) {
        setDroppedFile(file); // Update state with the dropped file

        // Create a FileReader to read the image file
        const reader = new FileReader();

        reader.onload = (e) => {
          console.log("Image uploaded:", e.target.result);
          // Handle the uploaded image data (e.g., set state, display preview, etc.)
        };

        reader.readAsDataURL(file);
      } else {
        alert("Please upload a valid image file.");
      }
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
      setDroppedFile(file); // Update state with the selected file

      const reader = new FileReader();
      reader.onload = (e) => {
        // Handle the uploaded image data (e.g., set state, display preview, etc.)
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select a valid image file.");
    }
  };

  const handleGenerateCodeWithImage = async () => {
    const formData = new FormData();
    formData.append("image", droppedFile);
    formData.append(
      "prompt",
      `please give me ${selectedFormat.value} code. I want to implement within single file`
    );
    try {
      setIsCreatingCode(true);
      const response = await generateCode(formData);
      console.log(response.data);
      setCode(response.data.responsed_code);
      console.log(response);
    } catch (error) {
      toast.error("Something went wrong! Please try later.");
      console.log(error);
    } finally {
      setIsCreatingCode(false);
    }
  };

  const handleGenerateTextToCode = async () => {
    const formData = new FormData();
    // formData.append("image", droppedFile);
    formData.append("prompt", `${textPrompt}`);
    try {
      setIsCreatingCode(true);
      const response = await generateCode(formData);
      console.log(response);
      setCode(response.data.responsed_code);
      console.log(response);
    } catch (error) {
      toast.error("Something went wrong! Please try later.");
      console.log(error);
    } finally {
      setIsCreatingCode(false);
    }
  };
  const handleUrlToCode = async () => {
    if (!url) {
      return toast.error("Please provide a URL");
    }
    const formData = new FormData();
    // formData.append("image", droppedFile);
    formData.append("prompt", `${url}`);
    try {
      setIsCreatingCode(true);
      const response = await generateCode(formData);
      console.log(response);
      setCode(response.data.responsed_code);
      console.log(response);
    } catch (error) {
      toast.error("Something went wrong! Please try later.");
      console.log(error);
    } finally {
      setIsCreatingCode(false);
    }
  };

  return (
    <CommonContainer>
      <CommonSpace>
        <div className="w-full text-grayColor">
          <div className="flex flex-col items-stretch w-full gap-10 md:flex-row lg:gap-20 ">
            <div className="hidden w-1/3 md:block">
              <div>
                <h2 className="pb-2 text-xl font-bold">Select Code Output</h2>
              </div>
              <div className="overflow-hidden h-[700px]">
                <div className="flex flex-col h-full gap-6 overflow-y-auto ">
                  {codeOptions.map((option) => (
                    <Card
                      key={option.value}
                      className={`p-4 cursor-pointer rounded-lg border  ${
                        selectedFormat.value === option.value
                          ? "border-2 border-green-500 bg-gray-200"
                          : "border-gray-300"
                      }`}
                      onClick={() => {
                        setSelectedFormat(option);
                        setCode(option.template);
                      }}
                    >
                      <CardContent className="flex items-center gap-3">
                        <span className="text-2xl">{option.icon}</span>
                        <div>
                          <h3 className="text-lg font-semibold">
                            {option.name}
                          </h3>
                          <p className="text-sm text-gray-600">{option.desc}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3 ">
              <div className="flex items-center justify-between w-full pb-2 ">
                <h2 className="text-lg font-bold sm:text-xl">
                  {/* Upload Screenshot or Enter URL */}
                  Upload Screenshot
                </h2>
                <div className="relative min-w-40 md:hidden">
                  <div
                    onClick={() => {
                      setModal((pre) => !pre);
                    }}
                    className="flex justify-end text-3xl cursor-pointer "
                  >
                    <BsCodeSquare />
                  </div>
                  {modal && (
                    <div className="overflow-hidden h-[700px] absolute top-10  z-10 w-full bg-gray-100 p-4 rounded-xl">
                      <div className="flex flex-col h-full gap-6 overflow-y-auto ">
                        {codeOptions.map((option) => (
                          <Card
                            key={option.value}
                            className={`p-0 cursor-pointer rounded-lg border  ${
                              selectedFormat.value === option.value
                                ? "border-2 border-green-500 bg-gray-200"
                                : "border-gray-300"
                            }`}
                            onClick={() => {
                              setSelectedFormat(option);
                              // setCode(option.template);
                            }}
                          >
                            <CardContent className="flex items-center gap-3 p-1">
                              <div>
                                <p className="text-sm text-gray-600">
                                  {option.desc}
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col w-full gap-6">
                <div className="w-full">
                  <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onClick={() =>
                      document.getElementById("file-input").click()
                    } // Click handler to trigger file input
                    className="flex items-center justify-center w-full p-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer min-h-40 bg-gray-50"
                    style={{
                      margin: "0 auto",
                    }}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-input"
                    />
                    <span className="text-center text-gray-500">
                      Drag & drop a screenshot here, or click to upload
                    </span>
                  </div>

                  <div
                    className={`flex ${
                      isCreatingCode ? "justify-between" : "justify-end "
                    } my-2`}
                  >
                    {isCreatingCode && <Spinner />}
                    <Button
                      className="px-6 py-3 text-white bg-blue-500 rounded-lg"
                      onClick={handleGenerateCodeWithImage}
                    >
                      Generate Code
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    {droppedFile && (
                      <div className="flex items-center gap-3 mt-1">
                        <div>
                          <h4 className="font-semibold text-center">
                            Preview:
                          </h4>
                          <img
                            src={URL.createObjectURL(droppedFile)}
                            alt="Preview"
                            className="max-w-full max-h-40"
                          />
                        </div>
                        <div>
                          <button
                            className="px-4 py-2 text-white bg-red-400 rounded hover:bg-red-500"
                            onClick={() => setDroppedFile(null)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-4 ">
                  <Input
                    className="flex-1 w-40"
                    placeholder="Enter URL to capture"
                    onChange={(e) => setUrl(e.target.value)}
                  />
                  <Button
                    className="px-6 py-3 text-white bg-gray-700 rounded-lg "
                    onClick={handleUrlToCode}
                  >
                    Capture
                  </Button>
                </div>

                {/* AI Text-to-Code Feature */}
                <div className="">
                  <h3 className="text-lg font-bold">Generate Code from Text</h3>
                  <div className="flex items-center gap-4">
                    <Input
                      value={textPrompt}
                      onChange={(e) => setTextPrompt(e.target.value)}
                      placeholder="Describe what you want..."
                      className="flex-1 w-40 "
                    />
                    <Button
                      className="px-6 py-3 text-white bg-blue-500 rounded-lg"
                      onClick={handleGenerateTextToCode}
                    >
                      Generate
                    </Button>
                  </div>
                </div>

                {/* Live Code Editor & Export Options */}
                <div className="text-white rounded-lg shadow-lg bg-grayColor ">
                  <h3 className="p-2 text-lg font-semibold ">
                    Generated Code ({selectedFormat.name})
                  </h3>
                  <Editor
                    height="250px"
                    defaultLanguage="javascript"
                    theme="vs-dark"
                    value={code}
                    onChange={(newValue) => setCode(newValue)}
                  />
                  <div className="flex flex-col items-center justify-between gap-4 p-4 sm:flex-row">
                    <button
                      className="p-2 text-white bg-gray-500 rounded-lg lg:px-6 lg:py-3 w-fit"
                      onClick={handleCopy}
                    >
                      Copy to Clipboard
                    </button>
                    <button
                      className="p-2 text-white bg-red-500 rounded-lg lg:px-6 lg:py-3 "
                      onClick={handleResetCode}
                    >
                      Reset Code
                    </button>
                    <button
                      className="p-2 text-white bg-green-500 rounded-lg lg:px-6 lg:py-3 "
                      onClick={() => handleDownload("zip")}
                    >
                      Download Full Template
                    </button>
                  </div>
                </div>

                {/* ===============live preview======================== */}
                {selectedFormat.hasPreview ? (
                  <CodeRunner
                    code={`${code}`}
                    framework={selectedFormat.framework}
                  />
                ) : selectedFormat.value == "html" ||
                  selectedFormat.value == "tailwind" ? (
                  ""
                ) : (
                  <div className="p-4 text-blue-700 bg-blue-100 rounded-lg shadow-md">
                    <h4 className="text-xl font-medium">
                      Preview is not available
                    </h4>
                  </div>
                )}
                {/* for html and html with tailwind preview */}
                {selectedFormat.value == "html" ? (
                  <HTMLRunner htmlContent={code} />
                ) : selectedFormat.value == "tailwind" ? (
                  <HTMLRunner htmlContent={code} title="HTML with Tailwind" />
                ) : null}
              </div>
            </div>
          </div>
          <Toaster position="top-right" />
        </div>
      </CommonSpace>
    </CommonContainer>
  );
}
