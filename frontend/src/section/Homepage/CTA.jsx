import Button from '../../components/ui/Button';

const CTA = () => {
  return (
    <section className="py-20 text-center text-white bg-gray-800">
      <h2 className="text-3xl font-bold">
        Start Converting Screenshots & Websites to Code Today!
      </h2>
      <p className="mt-4">Try it free or upgrade for full access.</p>
      <Button className="px-6 py-3 mt-6 text-lg text-white bg-green-700 hover:bg-green-800">
        Try for Free
      </Button>
    </section>
  );
}

export default CTA