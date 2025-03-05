
import { motion } from "framer-motion";
const Work = () => {
  return (
    <section className="max-w-4xl px-6 py-16 mx-auto">
      <h2 className="text-3xl font-bold text-center">How It Works</h2>
      <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-3">
        {[
          {
            step: "Upload a Screenshot or Enter a Website URL",
            desc: "Drag and drop an image or input a live website link.",
          },
          {
            step: "AI Generates Code",
            desc: "Choose from HTML, Tailwind, React, etc.",
          },
          {
            step: "Edit & Export",
            desc: "Fine-tune the code and download it.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold">{item.step}</h3>
            <p className="mt-2 text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Work