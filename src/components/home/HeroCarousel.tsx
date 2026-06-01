"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const heroSlides = [
  {
    src: "/images/hero-slide-1c.png",
    alt: "Cultivo de caucho natural en Colombia",
  },
  {
    src: "/images/hero-slide-2.png",
    alt: "Latex y proceso productivo del caucho",
  },
  {
    src: "/images/hero-slide-3.png",
    alt: "Industria y transformacion del caucho natural",
  },
];

export function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      {heroSlides.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          width={1920}
          height={1080}
          priority={index === 0}
          loading={index === 0 ? "eager" : "lazy"}
          sizes="100vw"
          className={`absolute inset-0 -z-30 h-full w-full object-cover transition-opacity duration-1000 ${
            activeSlide === index ? "opacity-95" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2 sm:bottom-8">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Ver imagen ${index + 1}`}
            onClick={() => setActiveSlide(index)}
            className={`h-2.5 rounded-full transition-all ${
              activeSlide === index
                ? "w-10 bg-[var(--color-warning)]"
                : "w-2.5 bg-white/60"
            }`}
          />
        ))}
      </div>
    </>
  );
}
