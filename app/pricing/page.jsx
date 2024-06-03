import SectionButton from "../_ui/SectionButton";
import PricingBox from "./_ui/PricingBox";

export default function Pricing() {
  const pricingBoxes = [
    {
      name: "Logo Redesign",
      price: "25.00",
    },
    {
      name: "Logo Redesign",
      price: "25.00",
    },
    {
      name: "Logo Redesign",
      price: "25.00",
    },
    {
      name: "Logo Redesign",
      price: "25.00",
    },
    {
      name: "Logo Redesign",
      price: "25.00",
    },
    {
      name: "Logo Redesign",
      price: "25.00",
    },
  ];

  return (
    <>
      <SectionButton text="PRICING" id="pricing" />
      <div className="mx-20 mb-10 flex flex-col justify-around">
        <div className="grid grid-cols-3 gap-10">
          {pricingBoxes.map((item, index) => (
            <PricingBox
              name={pricingBoxes[index].name}
              price={pricingBoxes[index].price}
              key={pricingBoxes[index].name}
            />
          ))}
        </div>
      </div>
    </>
  );
}
