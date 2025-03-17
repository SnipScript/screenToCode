
import Button from "../../components/ui/Button";

const PricingButton = ({ billingCycle, setBillingCycle }) => {
  return (
    <div className="flex items-center gap-4 ">
      <Button
        className={`px-6 py-3 ${
          billingCycle === "monthly"
            ? "bg-grayColor text-white rounded-xl"
            : "bg-gray-200 text-grayColor rounded-xl"
        }`}
        onClick={() => setBillingCycle("monthly")}
      >
        Monthly
      </Button>
      <Button
        className={`px-6 py-3 ${
          billingCycle === "yearly"
            ? "bg-red-500 text-white rounded-xl"
            : "bg-gray-200 text-grayColor rounded-xl"
        }`}
        onClick={() => setBillingCycle("yearly")}
      >
        Yearly (50% Off)
      </Button>
    </div>
  );
};

export default PricingButton