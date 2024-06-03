import SectionButton from "../_ui/SectionButton";
import PortfolioBox from "./_ui/PortfolioBox";

export default function Portfolio() {
  return (
    <>
      <SectionButton text="PORTFOLIO" id="portfolio" />
      <div className="mx-20 mb-10 flex justify-between">
        <PortfolioBox
          image="moa-branding-logo"
          labelText="Our Brand"
          contentText="We used vector graphics and wireframing on Figma and Illustrator to construct our website and design our logo. We also chose our color palettes and created our slogan in-house."
          link="#"
        />
        <PortfolioBox
          image="logo-redesign"
          labelText="Logo Redesign"
          link="#"
        />
      </div>
      <div className="mx-20 mb-10 flex justify-between">
        <PortfolioBox
          image="logo-redesign"
          labelText="Logo Redesign"
          link="#"
        />
        <PortfolioBox
          image="logo-redesign"
          labelText="Logo Redesign"
          link="#"
        />
      </div>
    </>
  );
}
