"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroWedding from "@/public/hero-wedding.jpg";
import heroTraditional from "@/public/hero-traditional.jpg";
import heroPrewedding from "@/public/hero-prewedding.jpg";

const slides = [
  {
    image: heroWedding,
    title: "Timeless Wedding Moments",
    subtitle: "Capturing love stories that last forever",
  },
  {
    image: heroTraditional,
    title: "Traditional Celebrations",
    subtitle: "Preserving the beauty of cultural ceremonies",
  },
  {
    image: heroPrewedding,
    title: "Pre-Wedding Magic",
    subtitle: "Romantic stories before the big day",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={(slide.image as any).src ?? (slide.image as any)}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up">
            <span className="text-primary-foreground drop-shadow-lg">LS</span>{" "}
            <span className="text-primary-foreground drop-shadow-lg">
              Photography
            </span>
          </h1>

          <div className="h-20 overflow-hidden mb-8 relative">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0 absolute inset-0"
                }`}
              >
                <p className="text-xl md:text-2xl text-primary-foreground/90 font-light mb-2 font-display italic drop-shadow-md">
                  {slide.title}
                </p>
                <p className="text-primary-foreground/70 drop-shadow-sm">
                  {slide.subtitle}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
            <Link href="/gallery">
              <Button variant="hero" size="xl" className="group">
                View Gallery
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="hero-outline"
                size="xl"
                className="bg-background/20 backdrop-blur-sm text-primary-foreground border border-primary-foreground/30 hover:bg-background/40"
              >
                Book Now
              </Button>
            </Link>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-1 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-primary-foreground"
                  : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
