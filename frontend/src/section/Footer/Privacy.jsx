import CommonContainer from "../../common/CommonContainer";
import FooterList from "./FooterList";
import Paragraph from "./Paragraph";

const list = {
  information: [
    "Personal Information: When you register for an account, we may collect your name, email address, payment information, and other details necessary for account management.",
    "Usage Data: We may collect data on how you interact with SnipScript.ai, including page visits, feature usage, and system logs.",
    "Cookies and Tracking: We use cookies to improve user experience and analyze website traffic. You can disable cookies through your browser settings.",
  ],
  use: [
    "To provide and maintain SnipScript.ai services.",
    "To improve user experience, analyze usage trends, and enhance platform functionality.",
    "To process payments and manage subscriptions.",
    "To communicate important service updates, promotions, and security notices.",
  ],

  protect: [
    "We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or loss.",
    " Payment transactions are processed through third-party providers and are encrypted for security.",
    " Despite our efforts, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
  ],
  sharing: [
    "We do not sell or rent your personal information.",
    "We may share data with service providers to help us operate our platform (e.g., payment processors, analytics providers).",
    "We may disclose information if required by law or to protect the rights, safety, or integrity of SnipScript.ai.",
  ],
  rights: [
    "You have the right to access, update, or delete your account information at any time.",
    "You can opt out of marketing emails by following the unsubscribe link in any email communication.",
    "If you wish to delete your data permanently, contact us at support@snipscript.ai.",
  ],
  services: [
    "SnipScript.ai may contain links to third-party websites. We are not responsible for their privacy policies or practices.",
    " Payments and transactions are handled by third-party payment processors subject to their own terms and policies.",
  ],
  policy: [
    "We may update this policy periodically. Users will be notified of significant changes.",
    "Continued use of SnipScript.ai after changes take effect constitutes acceptance of the revised policy.",
  ],
};

const Privacy = () => {
  return (
    <CommonContainer>
      <div className="flex flex-col max-w-5xl gap-4 pt-4 pb-10">
        <Paragraph
          title={"SnipScript.ai Privacy Policy"}
          subtitle={"Effective Date: March 16, 2025"}
          des={
            "SnipScript.ai values your privacy. This Privacy Policy outlines how we collect, use, and protect your information when you use our services."
          }
        />
        <FooterList title={"Information We Collect"} list={list.information} />
        <FooterList title={"How We Use Your Information"} list={list.use} />
        <FooterList
          title={"How We Protect Your Information"}
          list={list.protect}
        />
        <FooterList title={"Sharing and Disclosure"} list={list.sharing} />
        <FooterList title={"User Rights and Choices"} list={list.rights} />
        <FooterList title={"Third-Party Services"} list={list.services} />
        <FooterList
          title={"Changes to This Privacy Policy"}
          list={list.policy}
        />
        <Paragraph
          title={"Contact Us"}
          des={
            "If you have any questions about this Privacy Policy, contact us at "
          }
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

export default Privacy;
