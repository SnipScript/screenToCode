import CommonContainer from "../../common/CommonContainer";
import FooterList from "./FooterList";
import Paragraph from "./Paragraph";

const list = {
  policy: [
    "All purchases, including subscriptions and one-time payments, are non-refundable once the service has been used.",
    "Refunds will not be provided for unused portions of a subscription period.",
    "By completing a purchase, you acknowledge and agree to this policy.",
  ],
  exceptions: [
    "If a user experiences a technical issue that prevents access to SnipScript.ai services, and our support team is unable to resolve the issue, a refund may be considered.",
    " If an accidental duplicate charge occurs, a refund will be issued upon verification.",
    "Refund requests must be submitted within 7 days of the purchase date and will be reviewed on a case-by-case basis.",
  ],
  dispute: [
    "If you believe you are entitled to a refund, you must first contact SnipScript.ai support at support@snipscript.ai before initiating a dispute with your payment provider.",
    "Chargebacks without prior communication may result in suspension of your account.",
    "SnipScript.ai reserves the right to dispute chargebacks that violate this policy.",
  ],
  cancellations: [
    "Users can cancel their subscription at any time through their account settings.",
    "Cancellations take effect at the end of the current billing cycle. Users will retain access until the period expires.",
    "SnipScript.ai does not offer partial refunds for mid-cycle cancellations.",
  ],
  changes: [
    "SnipScript.ai may update this policy at any time. Users will be notified of significant changes.",
    "Continued use of SnipScript.ai after changes take effect constitutes acceptance of the revised policy.",
  ],
};

const Refund = () => {
  return (
    <CommonContainer>
      <div className="flex flex-col max-w-5xl gap-4 pt-4 pb-[67px]">
        <Paragraph
          title={"SnipScript.ai Refund & Dispute Policy"}
          subtitle={"Effective Date: March 16, 2025"}
          des={
            "At SnipScript.ai, we aim to provide high-quality services for all users. Due to the nature of digital products, we generally do not offer refunds. However, we will review disputes on a case-by-case basis to ensure fairness."
          }
        />

        <FooterList title={"No Refund Policy"} list={list.policy} />
        <FooterList title={"Exceptions for Refunds"} list={list.exceptions} />
        <FooterList title={"Filing a Dispute"} list={list.dispute} />
        <FooterList
          title={"Subscription Cancellations"}
          list={list.cancellations}
        />
        <FooterList title={"Changes to This Policy"} list={list.changes} />
        <Paragraph
          title={"Contact Us"}
          des={
            "For any questions regarding this Refund & Dispute Policy, contact us at "
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

export default Refund;
