import Button from '../../components/ui/Button';
const Hero = () => {
  return (
    <section className="py-20 text-center bg-white shadow-md">
      <h1 className="text-4xl font-bold">
        Convert Screenshots & Live Websites to Clean Code Instantly
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Upload a UI screenshot or enter a website URL, and let AI generate HTML,
        Tailwind, React, Vue, and more—ready to use.
      </p>
      <div className="flex justify-center gap-4 mt-6">
        <Button className="px-6 py-3 text-lg">Upload Screenshot</Button>
        <Button variant="outline" className="px-6 py-3 text-lg">
          Enter Website URL
        </Button>
      </div>
    </section>
  );
}

export default Hero