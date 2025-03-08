const pricingPlans = [
  {
    name: "Free Plan",
    price: "$0",
    period: "month",
     features: [
      "5 conversions/month",
      "Basic HTML & CSS only",
      "No AI Editor",
      "Watermarked output",
      "Cannot download or save generated files",
      "Can generate unlimited previews before conversion",
    ],
  },

  
  {
    name: "Basic Plan",
    price: { monthly: "$10", yearly: "$5" },
    period: "month",
    features: ["50 conversions", "Full framework support", "AI-powered editor (limited)", "No watermark"],
  },
  {
    name: "Pro Plan",
    price: { monthly: "$20", yearly: "$10" },
    period: "month",
    features: ["150 conversions", "AI-powered editor", "Priority processing", "No watermark"],
  },
  {
    name: "Business Plan",
    price: { monthly: "$40", yearly: "$20" },
    period: "month",
    features: ["500 conversions", "AI-powered editor", "Priority processing", "No watermark"],
  },
  {
    name: "Pay-As-You-Go",
    price: "$15",
    period: "one-time",
    features: ["100 conversions", "AI-powered editor", "Priority processing", "No watermark"],
  },
];

export default pricingPlans