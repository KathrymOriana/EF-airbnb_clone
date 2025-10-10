import { useState, useEffect } from "react";

export function useScrollPosition(threshold: number = 50, minWidth: number = 768) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastKnownScrollY = 0;
    let ticking = false;

    const update = () => {
      const shouldCompact =
        window.innerWidth >= minWidth && lastKnownScrollY > threshold;
      setIsScrolled(shouldCompact);
      ticking = false;
    };

    const handleScroll = () => {
      lastKnownScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    const handleResize = () => update();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [threshold, minWidth]);

  return isScrolled;
}
