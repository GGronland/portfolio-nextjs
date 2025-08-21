import CSS3Logo from "@/assets/css3-logo.svg";
import HTML5Logo from "@/assets/html5-logo.svg";
import JavascriptLogo from "@/assets/javascript-logo.svg";
import NextJSLogo from "@/assets/nextjs-logo.svg";
import ReactLogo from "@/assets/react-logo.svg";
import ReduxLogo from "@/assets/redux-logo.svg";
import SCSSLogo from "@/assets/scss-logo.svg";
import TailwindCSSLogo from "@/assets/tailwindcss-logo.svg";
import TypescriptLogo from "@/assets/typescript-logo.svg";

const SkillIconList = ({}: {}) => {
  const iconBoxStylings =
    "group overflow-hidden w-25 h-25 flex justify-center items-center border-1 rounded-xl border-sky-900 bg-sky-900 drop-shadow-lg hover:scale-105 hover:border-sky-800 hover:bg-sky-800 transition-all duration-500";
  const iconLogoStylings =
    "fill-white stroke-transparent group-hover:-translate-y-[100px] transition-all duration-500";
  const iconTextStylings =
    "absolute translate-y-[100px] font-semibold group-hover:-translate-y-[0px] transition-all duration-500";

  return (
    <div className="flex flex-wrap gap-4">
      <div className={iconBoxStylings}>
        <HTML5Logo width={50} height={50} className={iconLogoStylings} />
        <span className={iconTextStylings}>HTML5</span>
      </div>

      <div className={iconBoxStylings}>
        <CSS3Logo width={50} height={50} className={iconLogoStylings} />
        <span className={iconTextStylings}>CSS3</span>
      </div>

      <div className={iconBoxStylings}>
        <SCSSLogo width={50} height={50} className={iconLogoStylings} />
        <span className={iconTextStylings}>SCSS</span>
      </div>

      <div className={iconBoxStylings}>
        <TailwindCSSLogo width={50} height={50} className={iconLogoStylings} />
        <span className={iconTextStylings}>Tailwind</span>
      </div>

      <div className={iconBoxStylings}>
        <JavascriptLogo width={50} height={50} className={iconLogoStylings} />
        <span className={iconTextStylings}>JavaScript</span>
      </div>

      <div className={iconBoxStylings}>
        <ReactLogo width={50} height={50} className={iconLogoStylings} />
        <span className={iconTextStylings}>React</span>
      </div>

      <div className={iconBoxStylings}>
        <NextJSLogo width={50} height={50} className={iconLogoStylings} />
        <span className={iconTextStylings}>Next.js</span>
      </div>

      <div className={iconBoxStylings}>
        <TypescriptLogo width={50} height={50} className={iconLogoStylings} />
        <span className={iconTextStylings}>TypeScript</span>
      </div>

      <div className={iconBoxStylings}>
        <ReduxLogo width={50} height={50} className={iconLogoStylings} />
        <span className={iconTextStylings}>Redux</span>
      </div>
    </div>
  );
};

export default SkillIconList;
