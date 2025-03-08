
import Button from "../../components/ui/Button";

const PricingButton = ({ billingCycle, setBillingCycle }) => {
  return (
    <div className="flex items-center gap-4 ">
      <Button
        className={`px-6 py-2 ${
          billingCycle === "monthly"
            ? "bg-grayColor text-white"
            : "bg-gray-200 text-grayColor"
        }`}
        onClick={() => setBillingCycle("monthly")}
      >
        Monthly
      </Button>
      <Button
        className={`px-6 py-2 ${
          billingCycle === "yearly"
            ? "bg-grayColor text-white"
            : "bg-gray-200 text-grayColor"
        }`}
        onClick={() => setBillingCycle("yearly")}
      >
        Yearly (50% Off)
      </Button>
    </div>
  );
};

export default PricingButton