import Car from "./Car.jsx";
import Trail from "./Trail.jsx";
import ValueText from "./ValueText";
import StatsBoxes from "./StatsBoxes";
import useHeroAnimation from "./useHeroAnimation";

function Hero() {
  useHeroAnimation();

  return (
    <div
      id="hero-section"
      className="h-[200vh] bg-[#E9EEF3] text-[#0D1117]"
    >
      <div
        id="hero-track"
        className="h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="w-full px-8">
          <div className="mt-12 mb-12">
            <div className="w-full h-[220px] bg-[#0F172A] relative overflow-hidden rounded-xl shadow-[0_20px_60px_rgba(2,6,23,0.18)]">
              <Trail />
              <Car />
              <ValueText />
            </div>
          </div>
          <StatsBoxes />
        </div>
      </div>
    </div>
  );
}

export default Hero;