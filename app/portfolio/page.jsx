import SectionButton from "../_ui/SectionButton";
import PortfolioBox from "./_ui/PortfolioBox";

export default function Portfolio() {
  return (
    <>
      <SectionButton text="PORTFOLIO" id="portfolio" />
      <div className="mx-20 mb-10 flex justify-between">
        <PortfolioBox image="moa-branding-logo" text="Our Brand" link="#" />
        <PortfolioBox image="logo-redesign" text="Logo Redesign" link="#" />
      </div>
      <div className="mx-20 mb-10 flex justify-between">
        <PortfolioBox image="logo-redesign" text="Logo Redesign" link="#" />
        <PortfolioBox image="logo-redesign" text="Logo Redesign" link="#" />
      </div>
    </>
  );
}
