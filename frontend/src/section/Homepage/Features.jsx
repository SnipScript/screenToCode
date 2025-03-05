import React from 'react'
import Card from '../../components/ui/Card';
import CardContent from '../../components/ui/CardContent';

const Features = () => {
  return (
    <section className="px-6 py-16 bg-gray-200">
      <h2 className="text-3xl font-bold text-center">Why Choose Us?</h2>
      <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto mt-10 md:grid-cols-2">
        {[
          "Supports multiple frameworks",
          "AI-powered live code editor",
          "Text prompt-to-code",
          "Live website to code conversion",
        ].map((feature, index) => (
          <Card key={index} className="p-6">
            <CardContent>{feature}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Features