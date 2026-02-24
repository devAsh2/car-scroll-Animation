import { useEffect } from "react";

export default function useHeroAnimation() {
  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    gsap.registerPlugin(ScrollTrigger);

    const car = document.getElementById("car");
    const trail = document.getElementById("trail");
    const letters = gsap.utils.toArray(".value-letter");

    if (!car || !trail || !letters.length) return;

    const road = car.parentElement;
    const roadRect = road ? road.getBoundingClientRect() : null;
    const initialCarRect = car.getBoundingClientRect();

    const roadWidth = roadRect?.width || window.innerWidth;
    const carWidth = initialCarRect.width || 150;
    const endX = Math.max(0, roadWidth - carWidth);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinSpacing: false,
        onUpdate: () => {
          const currentRoadRect = road ? road.getBoundingClientRect() : null;
          const carRect = car.getBoundingClientRect();

          const roadLeft = currentRoadRect?.left || 0;
          const roadWidthNow = currentRoadRect?.width || roadWidth;
          const carCenterX = carRect.left + carRect.width / 2;

          const trailWidth = Math.min(
            Math.max(carCenterX - roadLeft, 0),
            roadWidthNow
          );
          gsap.set(trail, { width: trailWidth });

          letters.forEach((letter) => {
            const rect = letter.getBoundingClientRect();
            letter.style.opacity = carCenterX >= rect.left ? 1 : 0;
          });
        },
      },
    });

    tl.to(
      car,
      {
        x: endX,
        ease: "none",
      },
      0
    );

    tl.to(
      "#box1",
      {
        opacity: 1,
      },
      0.05
    );
    tl.to(
      "#box2",
      {
        opacity: 1,
      },
      0.15
    );
    tl.to(
      "#box3",
      {
        opacity: 1,
      },
      0.2
    );
    tl.to(
      "#box4",
      {
        opacity: 1,
      },
      1
    );

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, []);
}