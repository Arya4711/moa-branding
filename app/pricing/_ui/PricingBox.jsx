export default function PricingBox({ name, price }) {
  return (
    <>
      <div className="row-span-3 h-32 overflow-hidden rounded-md bg-sky-800 text-2xl text-white outline outline-1 outline-neutral-300 transition-all hover:h-48">
        <div className="px-5 py-2">
          {name} <span className="block font-bold">${price}</span>
        </div>
        <div className="h-16 bg-white"></div>
      </div>
    </>
  );
}
