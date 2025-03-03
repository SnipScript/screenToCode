import React from "react";
import  Button  from "../components/ui/Button";
import { motion } from "framer-motion";
import Card from "../components/ui/Card";
import CardContent from "../components/ui/CardContent";
/*
 This project is based on the open-source "Screenshot-to-Code" repository:
 https://github.com/abi/screenshot-to-code

 Original work by abi, licensed under MIT License.
 Modifications and extensions made by [Your Company/Name].
*/

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-20 bg-white shadow-md">
        <h1 className="text-4xl font-bold">Convert Screenshots & Live Websites to Clean Code Instantly</h1>
        <p className="mt-4 text-lg text-gray-600">
          Upload a UI screenshot or enter a website URL, and let AI generate HTML, Tailwind, React, Vue, and more—ready to use.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button className="px-6 py-3 text-lg">Upload Screenshot</Button>
          <Button variant="outline" className="px-6 py-3 text-lg">Enter Website URL</Button>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 text-center bg-white">
        <h2 className="text-lg font-medium text-gray-600">
          The #1 tool trusted by developers, designers, and industry leaders to transform UI into clean, production-ready code.
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-8">
          {[
            "microsoft", "amazon", "google", "meta", "openai",
            "github", "nvidia", "huggingface", "adobe", "figma",
            "mit", "stanford"
          ].map((company, index) => (
            <img
              key={index}
              src={`/logos/${company}.svg`}
              alt={company}
              className="h-10 opacity-70"
            />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center">How It Works</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: "Upload a Screenshot or Enter a Website URL", desc: "Drag and drop an image or input a live website link." },
            { step: "AI Generates Code", desc: "Choose from HTML, Tailwind, React, etc." },
            { step: "Edit & Export", desc: "Fine-tune the code and download it." },
          ].map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{item.step}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 bg-gray-200 px-6">
        <h2 className="text-3xl font-bold text-center">Why Choose Us?</h2>
        <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Supports multiple frameworks",
            "AI-powered live code editor",
            "Text prompt-to-code",
            "Live website to code conversion"
          ].map((feature, index) => (
            <Card key={index} className="p-6">
              <CardContent>{feature}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center">Pricing Plans</h2>
        <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { plan: "Free", price: "$0/mo", features: ["5 conversions/month", "Basic HTML & CSS only", "No AI Editor", "Watermarked output"] },
            { plan: "Basic", price: "$10/mo", features: ["50 conversions", "Full framework support", "AI-powered editor (limited)", "No watermark"] },
            { plan: "Pro", price: "$20/mo", features: ["150 conversions", "AI-powered editor", "Priority processing", "No watermark"] },
            { plan: "Business", price: "$40/mo", features: ["500 conversions", "AI-powered editor", "Priority processing", "No watermark"] },
            { plan: "Pay-As-You-Go", price: "$15 for 100 conversions", features: ["One-time purchase", "AI-powered editor", "Priority processing", "No watermark"] },
          ].map((item, index) => (
            <Card key={index} className="p-6 text-center">
              <h3 className="text-2xl font-bold">{item.plan}</h3>
              <p className="text-xl text-gray-600 mt-2">{item.price}</p>
              <ul className="mt-4 text-gray-600">
                {item.features.map((feature, i) => (
                  <li key={i} className="mt-1">✔ {feature}</li>
                ))}
              </ul>
              <Button className="mt-6">Get Started</Button>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
    <section className="text-center py-20 bg-gray-800 text-white">
  <h2 className="text-3xl font-bold">Start Converting Screenshots & Websites to Code Today!</h2>
  <p className="mt-4">Try it free or upgrade for full access.</p>
  <Button className="mt-6 px-6 py-3 text-lg bg-green-700 hover:bg-green-800 text-white">
    Try for Free
  </Button>
</section>


      {/* Footer */}
      <footer className="py-6 text-center text-gray-800 bg-gray-800 text-white">
        <p>&copy; 2025 SnipScript.ai - All rights reserved.</p>
      </footer>
    </div>
  );
}
