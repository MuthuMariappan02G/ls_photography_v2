import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Camera,
  Award,
  Heart,
  Users,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  ArrowRight,
} from "lucide-react";

import heroWedding from "@/public/hero-wedding.jpg";

const stats = [
  { icon: Camera, value: "500+", label: "Events Captured" },
  { icon: Heart, value: "300+", label: "Happy Couples" },
  { icon: Award, value: "8+", label: "Years Experience" },
  { icon: Users, value: "50K+", label: "Photos Delivered" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-primary uppercase tracking-widest text-sm mb-4 font-medium animate-fade-up">
            Our Story
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-up">
            About LS Photography
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up">
            Capturing life&apos;s most precious moments with passion,
            creativity, and an eye for the extraordinary.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-sm overflow-hidden">
                <img
                  src={(heroWedding as any).src ?? (heroWedding as any)}
                  alt="LS Photography"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary rounded-sm -z-10" />
              <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-border rounded-sm -z-10" />
            </div>

            <div>
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                A Passion for <span className="italic">Storytelling</span>
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Founded in 2016, LS Photography began with a simple mission:
                  to capture the authentic emotions and fleeting moments that
                  make life&apos;s celebrations truly special.
                </p>
                <p>
                  Our journey started with wedding photography, and over the
                  years, we&apos;ve had the privilege of being part of hundreds
                  of beautiful love stories across India. Each event has taught
                  us something new about the art of visual storytelling.
                </p>
                <p>
                  Today, our team of skilled photographers and videographers
                  brings together technical expertise, creative vision, and a
                  genuine love for what we do. We don&apos;t just take photos –
                  we create timeless memories that you&apos;ll treasure forever.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/contact">
                  <Button variant="hero" size="lg" className="group">
                    Work With Us
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 rounded-sm bg-secondary flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-foreground" />
                </div>
                <p className="font-display text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground">
              Ready to discuss your event? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-sm bg-card border border-border">
              <div className="w-12 h-12 rounded-sm bg-secondary flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Phone</h3>
              <a
                href="tel:+919876543210"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +91 98765 43210
              </a>
            </div>

            <div className="text-center p-6 rounded-sm bg-card border border-border">
              <div className="w-12 h-12 rounded-sm bg-secondary flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <a
                href="mailto:hello@lsphotography.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                hello@lsphotography.com
              </a>
            </div>

            <div className="text-center p-6 rounded-sm bg-card border border-border">
              <div className="w-12 h-12 rounded-sm bg-secondary flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground">Mumbai, Maharashtra</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-12">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
