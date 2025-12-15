import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Camera,
  Heart,
  Users,
  Video,
  Album,
  Sparkles,
  Star,
  Check,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Wedding Photography",
    description:
      "Complete wedding day coverage with artistic storytelling. We capture every emotion, every smile, and every tear of joy.",
    features: [
      "Full day coverage",
      "Multiple photographers",
      "Same-day edits",
      "Online gallery",
    ],
    price: "Starting ₹75,000",
    popular: true,
  },
  {
    icon: Users,
    title: "Pre-Wedding Shoots",
    description:
      "Romantic photo sessions that tell your love story. Choose from scenic outdoor locations or elegant studio setups.",
    features: [
      "4-6 hour session",
      "Location scouting",
      "Outfit changes",
      "100+ edited photos",
    ],
    price: "Starting ₹35,000",
    popular: false,
  },
  {
    icon: Camera,
    title: "Traditional Ceremonies",
    description:
      "Specialized coverage for traditional and religious ceremonies with respect for customs and rituals.",
    features: [
      "Ceremony coverage",
      "Family portraits",
      "Ritual documentation",
      "Quick turnaround",
    ],
    price: "Starting ₹45,000",
    popular: false,
  },
  {
    icon: Video,
    title: "Cinematic Videos",
    description:
      "Film-style wedding videos with professional editing, music, and storytelling that brings your day to life.",
    features: [
      "4K recording",
      "Drone shots",
      "Highlight reel",
      "Full ceremony film",
    ],
    price: "Starting ₹1,00,000",
    popular: true,
  },
  {
    icon: Album,
    title: "Premium Albums",
    description:
      "Handcrafted photo albums with premium materials, custom layouts, and archival-quality printing.",
    features: [
      "Custom design",
      "Premium paper",
      "Leather cover options",
      "Multiple sizes",
    ],
    price: "Starting ₹15,000",
    popular: false,
  },
  {
    icon: Sparkles,
    title: "Birthday & Events",
    description:
      "Capture celebrations of all kinds - birthdays, anniversaries, corporate events, and family gatherings.",
    features: [
      "Flexible hours",
      "Candid & posed shots",
      "Quick delivery",
      "Print packages",
    ],
    price: "Starting ₹20,000",
    popular: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-primary uppercase tracking-widest text-sm mb-4 font-medium animate-fade-up">
            What We Offer
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-up">
            Our Services
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up">
            From intimate ceremonies to grand celebrations, we offer
            comprehensive photography and videography services tailored to your
            unique vision.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className={`relative hover-lift bg-card border-border ${
                  service.popular ? "ring-2 ring-primary" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" /> Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-sm bg-secondary flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-foreground" />
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-foreground/80"
                      >
                        <Check className="w-4 h-4 text-foreground shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-border">
                    <p className="text-2xl font-display font-bold text-foreground mb-4">
                      {service.price}
                    </p>
                    <Link href="/contact">
                      <Button
                        variant={service.popular ? "hero" : "outline"}
                        className="w-full group"
                      >
                        Book Now
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="section-padding bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Need a Custom Package?
          </h2>
          <p className="text-muted-foreground mb-8">
            Every event is unique. Let&apos;s create a personalized package that
            perfectly matches your requirements and budget.
          </p>
          <Link href="/contact">
            <Button variant="hero" size="xl" className="group">
              Get Custom Quote
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
