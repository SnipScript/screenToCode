import CommonContainer from "../../common/CommonContainer";
import { GoDotFill } from "react-icons/go";
import FooterList from "./FooterList";

const Terms = () => {
  const list = {
    Services: [
      "SnipScript.ai provides tools that convert website screenshots into HTML and CSS code.",
      "Free users are limited to five (5) conversions per month, with basic output and watermarked results.",
      "Paid users receive access to additional features such as unlimited conversions and AI-assisted editing.",
      "You may not use SnipScript.ai to create or distribute illegal, offensive, or harmful content.",
    ],
    Accounts: [
      "You must provide accurate, complete information when creating an account.",
      "We reserve the right to suspend or terminate accounts that violate these terms.",
      "You are responsible for maintaining the confidentiality of your login credentials.",
    ],
    Subscriptions: [
      "SnipScript.ai offers free and paid subscription plans, as well as one-time payment options.",
      "Subscription fees are billed on a recurring basis unless canceled prior to the renewal date.",
      "One-time payments provide access to specific features without recurring charges.",
      "Refunds are not guaranteed and are subject to our [Refund & Dispute Policy].",
      "You are responsible for managing and canceling your subscription to avoid future charges.",
    ],
    Property: [
      "All content and technology used in SnipScript.ai are the property of SnipScript, Inc.",
      "You retain ownership of any code you generate using the service and may use it for personal or commercial projects.",
    ],
    Responsibilities: [
      " You may not use automated tools to scrape, abuse, or disrupt SnipScript.ai’s services.",
      "You may not resell, repackage, or present SnipScript.ai as your own service.",
      "You agree to comply with all applicable local, national, and international laws.",
    ],
    Availability: [
      "We aim to provide consistent and reliable service but do not guarantee uninterrupted access.",
      "Scheduled maintenance, updates, or unexpected technical issues may result in temporary downtime.",
      "We are not responsible for any data loss caused by outages or technical failures.",
    ],
    Termination: [
      "We reserve the right to suspend or terminate your account at any time for violations of these terms.",
      "Accounts found to be engaged in fraud or abuse may be permanently banned without notice.",
      "We may restrict access to services if required by law or legal process.",
    ],
    Limitation: [
      "SnipScript.ai is provided “as is” without warranties of any kind, express or implied.",
      "We are not liable for damages, data loss, or issues arising from third-party integrations.",
      "You are solely responsible for how you use any code or content generated through our platform.",
    ],
    Modifications: [
      "We may update these Terms of Service at any time.",
      "You will be notified of material changes, and continued use of the service after updates indicates your acceptance.",
    ],
    Governing: [
      "These Terms shall be governed by and interpreted in accordance with the laws of the State of Colorado, United States, without regard to its conflict of law provisions.",
      "Any disputes arising from or relating to these Terms shall be resolved exclusively in the state or federal courts located in Denver County, Colorado, and you consent to the jurisdiction of those courts.",
    ],
  };

  return (
    <CommonContainer>
      <div className="flex flex-col max-w-5xl gap-4 pt-4 pb-10">
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">
            SnipScript.ai – Terms of Service
          </h2>
          <span className="flex gap-1">
            <p className="font-semibold">Effective Date: </p>
            <p>March 16, 2025</p>
          </span>
          <p>
            Welcome to SnipScript.ai! By accessing or using our website and
            services, you agree to comply with and be bound by the following
            Terms of Service. If you do not agree with these terms, please do
            not use SnipScript.ai.
          </p>
        </div>
        <FooterList title={"1. Use of Services"} list={list.Services} />
        <FooterList title={"2. User Accounts"} list={list.Accounts} />
        <FooterList
          title={"3. Payments and Subscriptions"}
          list={list.Subscriptions}
        />
        <FooterList title={"4. Intellectual Property"} list={list.Property} />
        <FooterList
          title={"5. User Responsibilities"}
          list={list.Responsibilities}
        />
        <FooterList
          title={"6. Service Availability"}
          list={list.Availability}
        />
        <FooterList
          title={"8. Limitation of Liability"}
          list={list.Limitation}
        />
        <FooterList
          title={"9. Modifications to Terms"}
          list={list.Modifications}
        />
        <FooterList title={"10. Governing Law"} list={list.Governing} />

        <div>
          <h4 className="text-lg font-medium"> 11. Contact Us</h4>
          <p>
            Contact Us If you have questions or concerns about these Terms,
            please contact us at: <br />
            <span>
              📧
              <a
                className="px-1 text-blue-500 underline"
                href="mailto:support@snipscript.ai"
              >
                support@snipscript.ai
              </a>
            </span>
          </p>
        </div>
      </div>
    </CommonContainer>
  );
};

export default Terms;
