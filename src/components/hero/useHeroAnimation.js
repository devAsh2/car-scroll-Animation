import { useEffect } from "react";

export default function useHeroAnimation() {
  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize" });

    const car = document.getElementById("car");
    const trail = document.getElementById("trail");
    const letters = gsap.utils.toArray(".value-letter");
    const valueAdd = document.querySelector(".value-add");

    if (!car || !trail || !letters.length || !valueAdd) return;

    const road = car.parentElement;
    let roadWidth = 0;
    let roadLeft = 0;
    let carWidth = 150;
    let endX = 0;
    let valueLeftInRoad = 0;
    let letterOffsets = [];

    const measure = () => {
      if (!road) return;
      const roadRect = road.getBoundingClientRect();
      const carRect = car.getBoundingClientRect();
      const valueRect = valueAdd.getBoundingClientRect();

      roadWidth = roadRect.width || window.innerWidth;
      roadLeft = roadRect.left || 0;
      carWidth = carRect.width || 150;
      endX = Math.max(0, roadWidth - carWidth / 2);
      valueLeftInRoad = Math.max(valueRect.left - roadLeft, 0);
      letterOffsets = letters.map((letter) => letter.offsetLeft);
    };

    measure();

    const carTween = gsap.to(car, {
      x: () => endX,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: "#hero-track",
        onRefresh: () => {
          measure();
          ScrollTrigger.update();
        },
        onUpdate: () => {
          const carX = gsap.getProperty(car, "x") + carWidth / 2;
          const trailWidth = Math.min(Math.max(carX, 0), roadWidth);
          gsap.set(trail, { width: trailWidth });

          letters.forEach((letter, i) => {
            const letterX = valueLeftInRoad + (letterOffsets[i] || 0);
            letter.style.opacity = carX >= letterX ? 1 : 0;
          });
        },
      },
    });

    const box1Tween = gsap.to("#box1", {
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top+=100 top",
        end: "top+=300 top",
        toggleActions: "play none none reverse",
      },
      duration: 0.7,
      ease: "power2.out",
      opacity: 1,
    });

    const box2Tween = gsap.to("#box2", {
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top+=400 top",
        end: "top+=600 top",
        toggleActions: "play none none reverse",
      },
      duration: 0.7,
      ease: "power2.out",
      opacity: 1,
    });

    const box3Tween = gsap.to("#box3", {
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top+=700 top",
        end: "top+=900 top",
        toggleActions: "play none none reverse",
      },
      duration: 0.7,
      ease: "power2.out",
      opacity: 1,
    });

    const box4Tween = gsap.to("#box4", {
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top+=1100 top",
        end: "top+=1300 top",
        toggleActions: "play none none reverse",
      },
      duration: 0.7,
      ease: "power2.out",
      opacity: 1,
    });

    const syncScrollPosition = () => {
      if (!carTween.scrollTrigger) return;
      ScrollTrigger.refresh(true);
    };

    requestAnimationFrame(syncScrollPosition);
    const onPageShow = () => setTimeout(syncScrollPosition, 0);
    const onLoad = () => setTimeout(syncScrollPosition, 0);
    window.addEventListener("pageshow", onPageShow);
    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("pageshow", onPageShow);
      window.removeEventListener("load", onLoad);
      if (carTween.scrollTrigger) {
        carTween.scrollTrigger.kill();
      }
      carTween.kill();
      [box1Tween, box2Tween, box3Tween, box4Tween].forEach((tween) => {
        if (tween.scrollTrigger) {
          tween.scrollTrigger.kill();
        }
        tween.kill();
      });
    };
  }, []);
}