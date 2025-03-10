import React from "react";
import CommonContainer from "../../common/CommonContainer";
import Paragraph from "./Paragraph";
import FooterList from "./FooterList";
import { LuBadgeCheck } from "react-icons/lu";
const list = {
  services: [
    "SnipScript.ai provides a tool to convert website screenshots into HTML & CSS code",
    "Free users are limited to 5 conversions per month with basic HTML & CSS output and watermarked results.",
    "Paid users receive additional features, such as unlimited conversions and AI-assisted editing.",
    "Users must not use SnipScript.ai to generate or distribute illegal, offensive, or harmful content.",
  ],
  accounts: [
    "Users must provide accurate information when creating an account.",
    "SnipScript.ai reserves the right to suspend or terminate accounts for violations of these terms.",
    "Users are responsible for maintaining the security of their login credentials.",
  ],

  subscriptions: [
    "SnipScript.ai offers free and paid subscription plans, as well as one-time payment options. ",
    "Subscription fees are charged on a recurring basis unless canceled by the user. One-time payments grant access to specific features or services without a recurring charge.",
    " Refunds are generally not provided (see our Refund & Dispute Policy for details).",
    "Users are responsible for canceling their subscription before renewal to avoid additional charges.",
  ],

  responsibilities: [
    "Users must not use automated tools to excessively access or abuse SnipScript.ai’s resources.",
    "Users must not redistribute SnipScript.ai as a standalone service or claim it as their own product.",
    "Users agree to comply with all applicable laws when using SnipScript.ai.",
  ],
  availability: [
    " SnipScript.ai strives for high availability but does not guarantee uninterrupted service.",
    "Downtime may occur due to maintenance, updates, or unexpected technical issues.",
    "SnipScript.ai is not responsible for data loss due to service disruptions.",
  ],
  termination: [
    "SnipScript.ai reserves the right to suspend or terminate accounts that violate these terms.",
    "Accounts involved in fraudulent activity may be permanently banned without notice.",
    "If required by law or regulatory action, SnipScript.ai may restrict access to its services.",
  ],
  limitation: [
    "SnipScript.ai is provided 'as is' without warranties of any kind.",
    "SnipScript.ai is not responsible for any errors, loss of data, or third-party service disruptions.",
    "Users assume full responsibility for how they use the generated code.",
  ],
  changes: [
    "SnipScript.ai may update these terms at any time. Users will be notified of significant changes.",
    "Continued use of SnipScript.ai after changes take effect constitutes acceptance of the revised terms.",
  ],
  governing: [
    "These Terms of Service shall be governed by the laws of [Your State/Country], without regard to conflict of law principles.",
    "Any disputes shall be resolved in the courts of [Your State/Country].",
  ],
};

const Terms = () => {
  return (
    <CommonContainer>
      <div className="flex flex-col max-w-5xl gap-4 pt-4 pb-10">
        <Paragraph
          title={"SnipScript.ai Terms of Service"}
          subtitle={"Effective Date: March 16, 2025"}
          des={
            " Welcome to SnipScript.ai! By accessing or using our website and services, you agree to comply with and be bound by the following Terms of Service. If you do not agree with these terms, please do not use SnipScript.ai."
          }
        />
        <FooterList title={"Use of Services"} list={list.services} />
        <FooterList title={"User Accounts"} list={list.accounts} />
        <FooterList
          title={"Payment and Subscriptions"}
          list={list.subscriptions}
        />

        <div>
          <h4 className="text-lg font-medium">Intellectual Property</h4>
          <div className="flex items-center gap-1">
            <span className="">
              <LuBadgeCheck />
            </span>
            <p>
              SnipScript.ai and its underlying technology are owned by [Your
              Company]
            </p>
          </div>
          <div className="flex items-center gap-1">
            <span className="">
              <LuBadgeCheck />
            </span>
            <p>
              Users retain ownership of any code generated through SnipScript.ai
              and may use it for personal or commercial projects.
            </p>
          </div>
          <div className="flex items-center gap-1">
            <span className="">
              <LuBadgeCheck />
            </span>
            <p>
              SnipScript.ai integrates open-source projects, including
              <a
                className="px-1 text-blue-500 underline"
                href="https://github.com/abi/screenshot-to-code"
                target="_blank"
                title="https://github.com/abi/screenshot-to-code"
              >
                screenshot-to-code
              </a>
              , which remains under its respective MIT License.
            </p>
          </div>
        </div>

        <FooterList
          title={"User Responsibilities"}
          list={list.responsibilities}
        />
        <FooterList title={"Service Availability"} list={list.availability} />
        <FooterList title={"Termination of Service"} list={list.termination} />
        <FooterList title={"Limitation of Liability"} list={list.limitation} />
        <FooterList title={"Changes to Terms"} list={list.changes} />
        <FooterList title={"Governing Law"} list={list.governing} />
        <Paragraph
          title={"Contact Us"}
          des={
            "If you have any questions regarding these Terms of Service, please contact us at "
          }
          bold={"support@snipscript.ai"}
        />
      </div>
    </CommonContainer>
  );
};

export default Terms;
