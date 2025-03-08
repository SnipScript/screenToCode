import { motion } from "framer-motion";
import CommonSpace from "../../common/CommonSpace";
import CommonContainer from "../../common/CommonContainer";
import CommonHeader from "../../common/CommonHeader";

const work = [
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
];
const Work = () => {
  return (
    <CommonContainer>
      <div className="max-w-6xl mx-auto text-grayColor">
        <CommonSpace>
          <CommonHeader className="pb-10 "> How It Works</CommonHeader>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {work.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold">{item.step}</h3>
                <p className="mt-2 text-lg font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </CommonSpace>
      </div>
    </CommonContainer>
  );
};

export default Work;
