import Car from "./car";
import Trail from "./trail";
import ValueText from "./ValueText";
import { TopStatsRow, BottomStatsRow } from "./StatsBoxes";
import useHeroAnimation from "./useHeroAnimation";

function Hero() {
  useHeroAnimation();

  return (
    <div id="hero-section" className="h-[200vh] bg-[#d6d6d6] text-black">
      <div className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="w-full  px-6">
          <TopStatsRow />

          <div className="mt-10 mb-10">
            <div className="w-full h-[200px] bg-[#1e1e1e] relative overflow-hidden">
              <Trail />
              <Car />
              <ValueText />
            </div>
          </div>

          <BottomStatsRow />
        </div>
      </div>
    </div>
  );
}

export default Hero;