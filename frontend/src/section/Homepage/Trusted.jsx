import React from 'react'

const Trusted = () => {
  return (
    <section className="py-16 text-center bg-white ">
      <h2 className="text-lg font-medium text-gray-600">
        The #1 tool trusted by developers, designers, and industry leaders to
        transform UI into clean, production-ready code.
      </h2>
      <div className="flex flex-wrap justify-center gap-8 mt-6">
        {[
          "microsoft",
          "amazon",
          "google",
          "meta",
          "openai",
          "github",
          "nvidia",
          "huggingface",
          "adobe",
          "figma",
          "mit",
          "stanford",
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
  );
}

export default Trusted