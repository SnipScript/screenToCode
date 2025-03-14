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
import toast from "react-hot-toast";
import { generateCode } from "../frontendApp";
import CodeRunner from "../components/CodeRunner";
import HTMLCodeRunner from "../components/HTMLRunner";
const codeOptions = [
  {
    name: "HTML + CSS",
    value: "html",
    icon: "🌐",
    desc: "Basic HTML & CSS output",
    template: "<div>Hello World</div>",
    framework: "vanilla",
  },
  {
    name: "Tailwind CSS",
    value: "tailwind",
    icon: "🎨",
    desc: "Utility-first CSS framework",
    template: '<div class="text-xl font-bold">Hello Tailwind</div>',
    framework: "react",
  },
  {
    name: "React + Tailwind",
    value: "react",
    icon: "⚛️",
    desc: "React components with Tailwind",
    template:
      'const Hello = () => (<div className="text-xl font-bold">Hello React</div>);',
    framework: "react",
  },
  {
    name: "Vue + Tailwind",
    value: "vue",
    icon: "🟢",
    desc: "Vue.js components styled with Tailwind",
    template:
      '<template><div class="text-xl font-bold">Hello Vue</div></template>',
    framework: "vue",
  },
  {
    name: "Bootstrap",
    value: "bootstrap",
    icon: "📦",
    desc: "Bootstrap-based component output",
    template:
      '<div class="container"><h1 class="display-4">Hello Bootstrap</h1></div>',
    // framework: "bootstrap",
    framework: "react",
  },
  {
    name: "Flutter",
    value: "flutter",
    icon: "💙",
    desc: "Flutter UI components",
    template:
      'Widget build(BuildContext context) { return Text("Hello Flutter"); }',
    framework: "react",
  },
  {
    name: "Svelte",
    value: "svelte",
    icon: "🔥",
    desc: "Svelte framework output",
    template:
      '<script> let message = "Hello Svelte"; </script><h1>{message}</h1>',
    framework: "svelte",
  },
  {
    name: "Angular",
    value: "angular",
    icon: "🟥",
    desc: "Angular component structure",
    template: "<h1>Hello Angular</h1>",
    framework: "angular",
  },
  {
    name: "Next.js",
    value: "nextjs",
    icon: "⬛",
    desc: "Next.js components",
    template:
      "export default function Home() { return <h1>Hello Next.js</h1>; }",
    framework: "react",
  },
  {
    name: "Nuxt.js",
    value: "nuxtjs",
    icon: "🟩",
    desc: "Nuxt.js components for Vue",
    template: "<template><h1>Hello Nuxt.js</h1></template>",
    framework: "react",
  },
  {
    name: "Qwik",
    value: "qwik",
    icon: "⚡",
    desc: "Qwik framework optimized for speed",
    template: "<div>Hello Qwik</div>",
    framework: "react",
  },
  {
    name: "Solid.js",
    value: "solidjs",
    icon: "🔷",
    desc: "Solid.js UI components",
    template: "const App = () => <h1>Hello Solid.js</h1>;",
    framework: "solid",
  },
  {
    name: "Web Components",
    value: "web_components",
    icon: "🖥️",
    desc: "Standardized Web Components",
    template:
      'class HelloComponent extends HTMLElement { connectedCallback() { this.innerHTML = "<h1>Hello Web Components</h1>"; } } customElements.define("hello-component", HelloComponent);',
    framework: "react",
  },
];

export default function CodeSelectionPage() {
  const [modal, setModal] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState(codeOptions[0]);
  const [code, setCode] = useState(selectedFormat.template);
  const [textPrompt, setTextPrompt] = useState("");
  const [droppedFile, setDroppedFile] = useState(null);
  const [isCreatingCode, setIsCreatingCode] = useState(false);

  console.log(code);

  // Function to reset code to its original template
  const handleResetCode = () => {
    setCode(selectedFormat.template);
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
    alert("Code copied to clipboard!");
  };

  // Simulate AI-generated code from text prompt
  const handleGenerateFromText = () => {
    if (!textPrompt.trim()) return;
    setCode(
      `/* AI-generated code for: ${textPrompt} */\n<div>Generated Code Here</div>`
    );
  };

  //==========================================================
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setDroppedFile(file);
    } else {
      alert("Please drop an image file");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setDroppedFile(file);
    } else {
      alert("Please select an image file");
    }
  };

  const handleGenerateImageToCode = async () => {
    if (!selectedFormat.value) {
      return toast.error("Please select desired format");
    }
    if (!droppedFile) {
      return toast.error("Please choose image");
    }
    const formData = new FormData();
    formData.append("prompt", `please give me ${selectedFormat.value} code`);
    formData.append("image", droppedFile);
    try {
      setIsCreatingCode(true);
      const response = await generateCode(formData);
      setCode(response?.data?.flutter_code);
      console.log(response);
    } catch (error) {
      toast.error("Something went wrong");
      console.log("error from code", error);
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
                {/* <div className="flex items-center justify-center h-40 p-6 border-2 border-gray-300 border-dashed rounded-lg bg-gray-50">
                  <p className="text-gray-500">
                    Drag & drop a screenshot here, or click to upload
                  </p>
                </div> */}

                <div className="w-full">
                  <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    className="w-full flex items-center justify-center min-h-40 p-6 border-2 border-gray-300 border-dashed rounded-lg bg-gray-50 cursor-pointer"
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
                    <label
                      htmlFor="file-input"
                      className="text-gray-500 text-center"
                    >
                      Drag & drop a screenshot here, or click to upload
                    </label>
                  </div>
                  <div
                    className={`flex ${
                      isCreatingCode ? "justify-between" : "justify-end "
                    } my-2`}
                  >
                    {isCreatingCode && <Spinner />}
                    <Button
                      className="px-6 py-3 text-white bg-blue-500 rounded-lg"
                      onClick={handleGenerateImageToCode}
                    >
                      Generate Code
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    {droppedFile && (
                      <div className="mt-1">
                        <h4 className="font-semibold text-center">Preview:</h4>
                        <img
                          src={URL.createObjectURL(droppedFile)}
                          alt="Preview"
                          className="max-w-full max-h-40"
                        />
                      </div>
                    )}
                  </div>
                </div>
                {/* <div className="flex items-center gap-4 ">
                  <Input
                    className="flex-1 w-40"
                    placeholder="Enter URL to capture"
                  />
                  <Button className="px-6 py-3 text-white bg-gray-700 rounded-lg ">
                    Capture
                  </Button>
                </div> */}

                {/* AI Text-to-Code Feature */}
                {/* <div className="">
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
                      onClick={handleGenerateFromText}
                    >
                      Generate
                    </Button>
                  </div>
                </div> */}

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

                {/* live preview */}
                <CodeRunner
                  code={`${code}`}
                  framework={selectedFormat.framework}
                />
              </div>
            </div>
          </div>
        </div>
      </CommonSpace>
    </CommonContainer>
  );
}
