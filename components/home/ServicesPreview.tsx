"use client";

import Link from "next/link";
import {
  Camera,
  Heart,
  Users,
  Video,
  Album,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Heart,
    title: "Wedding Photography",
    description:
      "Capture every magical moment of your special day with artistic precision.",
  },
  {
    icon: Users,
    title: "Pre-Wedding Shoots",
    description:
      "Romantic sessions that tell your love story before the wedding.",
  },
  {
    icon: Camera,
    title: "Traditional Events",
    description:
      "Preserving the beauty and emotions of cultural ceremonies.",
  },
  {
    icon: Video,
    title: "Cinematic Videos",
    description:
      "Film-style wedding videos that bring your memories to life.",
  },
  {
    icon: Album,
    title: "Premium Albums",
    description:
      "Handcrafted photo albums with exquisite design and printing.",
  },
  {
    icon: Sparkles,
    title: "Birthday & Events",
    description:
      "Making every celebration memorable with stunning photography.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-widest text-sm mb-4 font-medium">
            What We Offer
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From intimate ceremonies to grand celebrations, we offer
            comprehensive photography services tailored to capture your unique
            story.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover-lift bg-card/50 border-border/50 hover:border-primary/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-sm bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="w-7 h-7 text-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/services">
            <Button variant="hero-outline" size="lg">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
