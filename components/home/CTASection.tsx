"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-primary mt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 20px, hsl(0 0% 100% / 0.03) 20px, hsl(0 0% 100% / 0.03) 40px)",
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent" />

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
          Ready to Capture Your <span className="italic">Special Moments</span>?
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto font-light">
          Let&apos;s create timeless memories together. Book your session today
          and let us tell your story through our lens.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button
              size="xl"
              className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/gallery">
            <Button
              variant="hero-outline"
              size="xl"
              className="border-primary/40 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Explore Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
