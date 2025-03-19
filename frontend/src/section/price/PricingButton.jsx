import Button from "../../components/ui/Button";

const PricingButton = ({
  billingCycle,
  setBillingCycle,
  applyFilter,
  setFilterData,
  data,
}) => {
  return (
    <div className="flex items-center gap-4 ">
      <Button
        className={`px-6 py-3 ${
          billingCycle === "monthly"
            ? "bg-red-500 text-white rounded-xl"
            : "bg-gray-200 text-grayColor rounded-xl"
        }`}
        onClick={() => {
          setBillingCycle("monthly");
          setFilterData(data);
        }}
      >
        Monthly
      </Button>
      <Button
        className={`px-6 py-3 ${
          billingCycle === "yearly"
            ? "bg-red-500 text-white rounded-xl"
            : "bg-gray-200 text-grayColor rounded-xl"
        }`}
        onClick={() => {
          setBillingCycle("yearly");
          applyFilter();
        }}
      >
        Yearly (50% Off)
      </Button>
    </div>
  );
};

export default PricingButton;
