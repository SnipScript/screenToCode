import React from "react";
import CommonContainer from "../../common/CommonContainer";
import Paragraph from "./Paragraph";
import FooterList from "./FooterList";
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
  property: [
    "SnipScript.ai and its underlying technology are owned by [Your Company]",
    "Users retain ownership of any code generated through SnipScript.ai and may use it for personal or commercial projects.",
    "SnipScript.ai integrates open-source projects, including screenshot-to-code, which remains under its respective MIT License.",
  ],
};

const Terms = () => {
  return (
    <CommonContainer>
      <div className="flex flex-col max-w-5xl gap-4 pt-4 pb-10">
        <Paragraph
          title={"SnipScript.ai Terms of Service"}
          des={
            "Effective Date: March 16, 2025  Welcome to SnipScript.ai! By accessing or using our website and services, you agree to comply with and be bound by the following Terms of Service. If you do not agree with these terms, please do not use SnipScript.ai."
          }
        />
        <FooterList title={"Use of Services"} list={list.services} />
        <FooterList title={"User Accounts"} list={list.accounts} />
        <FooterList
          title={"Payment and Subscriptions"}
          list={list.subscriptions}
        />
        <FooterList title={"Intellectual Property"} list={list.property} />
      </div>
    </CommonContainer>
  );
};

export default Terms;
