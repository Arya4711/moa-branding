import SectionButton from "../_ui/SectionButton";
import PortfolioBox from "./_ui/PortfolioBox";

export default function Portfolio() {
  const portfolioBoxData = [
    {
      image: "moa-branding-logo",
      labelText: "Our Brand",
      contentText:
        "We used vector graphics and wireframing on Figma and Illustrator to construct our website and design our logo. We also chose our color palettes and created our slogan in-house. Our website is made with modern frameworks including Next.js, React.js, Tailwind CSS, and more. Full source code can be found on our GitHub repository linked at the bottom of this page, in the footer.",
    },
    {
      image: "website-design-with-template",
      labelText: "F1NATICS",
      contentText:
        "F1NATICS is a mockup brand which demonstrates our branding skills as well as our wireframing skills. This hypothetical brand sells custom Formula 1 merch to a wide audience. As seen in the image, we created the branding for F1NATICS and constructed a mockup of the brand's website.",
    },
    {
      image: "happy-habits-logo",
      labelText: "Happy Habits",
      contentText:
        "Happy Habits is a habit tracking website co-developed by our front-end developer, Arya Malekjahani. Although his skills in making our website involves only front-end development, he had to use skills related to full-stack development to develop Happy Habits. Similar to our website, Happy Habits uses Next.js, React.js, and Tailwind CSS for its front-end, but also includes an extensive backend written in TypeScript and documented on its GitHub repository. The full source code can be found on Arya's GitHub profile.",
    },
  ];
  return (
    <>
      <SectionButton text="PORTFOLIO" id="portfolio" />
      <div className="mx-20 mb-10 grid grid-cols-2 gap-10">
        {portfolioBoxData.map((item) => (
          <PortfolioBox {...item} />
        ))}
      </div>
    </>
  );
}
