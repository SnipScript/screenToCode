
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import pricingPlans from "../price/pricingPlans"
const Priceing = () => {
  return (
    <section className="px-6 py-16">
      <h2 className="text-3xl font-bold text-center">Pricing Plans</h2>
      <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto mt-10 md:grid-cols-3">
        pricingPlans.map((item, index) => (
        <Card key={index} className="p-6 text-center">
          <h3 className="text-2xl font-bold">{item.plan}</h3>
          <p className="mt-2 text-xl text-gray-600">{item.price}</p>
          <ul className="mt-4 text-gray-600">
            {item.features.map((feature, i) => (
              <li key={i} className="mt-1">
                ✔ {feature}
              </li>
            ))}
          </ul>
          <Button className="mt-6">Get Started</Button>
        </Card>
        ))}
      </div>
    </section>
  );
}

export default Priceing