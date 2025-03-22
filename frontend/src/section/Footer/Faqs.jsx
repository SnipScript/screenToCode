import CommonContainer from "../../common/CommonContainer";
import FooterList from "./FooterList";
import Paragraph from "./Paragraph";

const list = {
  service: [
    "conversions per month",
    "Basic HTML & CSS only",
    "No AI Editor",
    "Watermarked output",
  ],
  icon: [
    "🌐 HTML + CSS (Basic HTML & CSS output)",
    "🎨 Tailwind CSS (Utility-first CSS framework)",
    "⚛️ React + Tailwind (React components with Tailwind)",
    "🟢 Vue + Tailwind (Vue.js components styled with Tailwind)",
    "📦 Bootstrap (Bootstrap-based component output)",
    "💙 Flutter (Flutter UI components)",
    "🔥 Svelte (Svelte framework output)",
    "🟥 Angular (Angular component structure)",
    "⬛ Next.js (Next.js components)",
    "🟩 Nuxt.js (Nuxt.js components for Vue)",
    "⚡ Qwik (Qwik framework optimized for speed)",
    "🔷 Solid.js (Solid.js UI components)",
    "🖥️ Web Components (Standardized Web Components)",
  ],
};

const Faqs = () => {
  return (
    <CommonContainer>
      <div className="flex flex-col max-w-5xl gap-4 pt-4 pb-[67px]">
        <Paragraph title={"SnipScript.ai FAQs"} />
        <Paragraph
          title={"What is SnipScript.ai?"}
          des={
            "SnipScript.ai is an AI-powered tool that converts website screenshots into structured, editable HTML & CSS code."
          }
        />
        <Paragraph
          title={"How does SnipScript.ai work?"}
          des={
            "Users upload a screenshot of a website, and our AI analyzes the design to generate the closest possible HTML & CSS representation of the layout."
          }
        />

        <FooterList
          title={"What do free users get?"}
          subtile={"Free users have access to:"}
          list={list.service}
        />
        <Paragraph
          title={"How can I upgrade to a paid plan?"}
          des={
            "Users can upgrade through their account settings on SnipScript.ai. Paid plans offer additional features like unlimited conversions and AI-assisted editing."
          }
        />
        <Paragraph
          title={"Do I own the generated code?"}
          des={
            "Yes! You can use the generated code for personal and commercial projects. However, SnipScript.ai does not guarantee that the code will be production-ready without manual adjustments."
          }
        />
        <Paragraph
          title={"Can I use SnipScript.ai for commercial projects?"}
          des={
            "Yes! The generated code can be used for both personal and commercial projects. However, SnipScript.ai does not guarantee compliance with specific web standards or accessibility guidelines. Yes! You can use the generated code for personal and commercial projects. However, SnipScript.ai does not guarantee that the code will be production-ready without manual adjustments."
          }
        />
        <Paragraph
          title={"Can I request specific improvements to my generated code?"}
          des={
            "At this time, SnipScript.ai generates code based on AI analysis and does not offer custom modifications. However, future updates may include an AI Editor for adjustments."
          }
        />
        <Paragraph
          title={"What file formats are supported for uploads?"}
          des={
            "Currently, SnipScript.ai supports PNG and JPG images for screenshot uploads. Additional formats may be added in the future."
          }
        />

        <FooterList
          title={"What code output formats are supported?"}
          subtile={
            "SnipScript.ai supports multiple code output formats, including:"
          }
          list={list.icon}
        />
        <Paragraph
          des={
            "Future updates may expand this list based on user feedback. Currently, SnipScript.ai supports PNG and JPG images for screenshot uploads. Additional formats may be added in the future."
          }
        />

        <Paragraph
          title={"How long does it take to generate code?"}
          des={
            "Most conversions complete in seconds, but complex layouts may take slightly longer to process."
          }
        />

        <div>
          <h4 className="text-lg font-semibold">
            What if I have a technical issue?
          </h4>
          {/* <p>
            If you experience a problem, contact
            <b className="px-1">support@snipscript.ai</b> with details, and our
            support team will assist you.
          </p> */}
          <p>
            If you experience a problem, contact
            <b className="px-1">
              <a
                className="text-blue-500 underline"
                href="mailto:support@snipscript.ai"
              >
                support@snipscript.ai
              </a>
            </b>
            with details, and our support team will assist you.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Do you offer refunds</h4>
          <h5>
            Due to the nature of digital services, refunds are generally not
            provided. See our <b>Refund & Dispute</b> Policy for more details.
          </h5>
        </div>
        <Paragraph
          title={"Can I cancel my subscription?"}
          des={
            "Yes! You can cancel your subscription anytime in your account settings. Your access will continue until the end of the billing cycle."
          }
        />

        <div>
          <h4 className="text-lg font-semibold">
            What if I have a technical issue?
          </h4>
          <h5>
            Yes, we use industry-standard security measures to protect your
            information. See our <b>Privacy Policy</b> for details on how we
            handle your data.
          </h5>
        </div>
        <Paragraph
          title={"How do I contact customer support?"}
          des={"For any questions or technical issues, reach out to "}
          // bold={"support@snipscript.ai."}
          bold={
            <a
              className="text-blue-500 underline"
              href="mailto:support@snipscript.ai"
            >
              support@snipscript.ai
            </a>
          }
        />
      </div>
    </CommonContainer>
  );
};

export default Faqs;
