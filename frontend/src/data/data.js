export const codeOptions = [
  {
    name: "HTML + CSS",
    value: "html",
    icon: "🌐",
    desc: "Basic HTML & CSS output",
    template: "<div>Hello World</div>",
    framework: "vanilla",
    hasPreview: false,
  },
  {
    name: "Tailwind CSS",
    value: "tailwind",
    icon: "🎨",
    // desc: "Utility-first CSS framework",
    desc: "Basic HTML and design with tailwind",
    template: `<div class="text-xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
  Hello Tailwind
</div>`,
    framework: "html",
    hasPreview: false,
  },
  {
    name: "React + Tailwind",
    value: "react",
    icon: "⚛️",
    desc: "React components styled with Tailwind",
    template: `
    const Hello = () => (
      <div className="flex items-center justify-center h-screen bg-blue-100">
        <div className="text-4xl font-semibold text-gray-800">
          Hello, React with Tailwind!
        </div>
      </div>
    );
    export default Hello;
  `,
    framework: "react",
    hasPreview: true,
  },
  {
    name: "Vue + Tailwind",
    value: "vue",
    icon: "🟢",
    desc: "Vue.js components styled with Tailwind",
    template: `
    <template>
      <div class="flex items-center justify-center h-screen bg-green-100">
        <div class="text-4xl font-semibold text-gray-800">
          Hello, Vue with Tailwind!
        </div>
      </div>
    </template>

    <script>
    export default {
      name: 'HelloVue'
    }
    </script>

    <style scoped>
    /* Optional: Scoped styles can be added here */
    </style>
  `,
    framework: "vue",
    hasPreview: true,
  },
  {
    name: "Bootstrap",
    value: "bootstrap",
    icon: "📦",
    desc: "Bootstrap-based component output",
    template:
      '<div class="container"><h1 class="display-4">Hello Bootstrap</h1></div>',
    framework: "react",
    hasPreview: false,
  },
  {
    name: "Flutter",
    value: "flutter",
    icon: "💙",
    desc: "Flutter UI components",
    template:
      'Widget build(BuildContext context) { return Text("Hello Flutter"); }',
    hasPreview: false,
  },
  {
    name: "Svelte",
    value: "svelte",
    icon: "🔥",
    desc: "Svelte framework output",
    template: `
    <script>
      let message = "Hello Svelte";
    </script>
    
    <style>
      h1 {
        color: #42b883;
        font-size: 2rem;
      }
    </style>

    <h1>{message}</h1>
  `,
    framework: "svelte",
    hasPreview: true,
  },
  {
    name: "Angular",
    value: "angular",
    icon: "🟥",
    desc: "Angular component structure",
    template: "<h1>Hello Angular</h1>",
    framework: "angular",
    hasPreview: false,
  },
  {
    name: "Next.js",
    value: "nextjs",
    icon: "⬛",
    desc: "Next.js components",
    template:
      "export default function Home() { return <h1>Hello Next.js</h1>; }",
    framework: "react",
    hasPreview: false,
  },
  {
    name: "Nuxt.js",
    value: "nuxtjs",
    icon: "🟩",
    desc: "Nuxt.js components for Vue",
    template: "<template><h1>Hello Nuxt.js</h1></template>",
    framework: "react",
    hasPreview: false,
  },
  {
    name: "Qwik",
    value: "qwik",
    icon: "⚡",
    desc: "Qwik framework optimized for speed",
    template: "<div>Hello Qwik</div>",
    framework: "react",
    hasPreview: false,
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
    hasPreview: false,
  },
];
