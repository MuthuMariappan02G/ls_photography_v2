"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MapPin, Calendar, X } from "lucide-react";

import heroWedding from "@/public/hero-wedding.jpg";
import heroTraditional from "@/public/hero-traditional.jpg";
import heroPrewedding from "@/public/hero-prewedding.jpg";

const categories = [
  "All",
  "Wedding",
  "Traditional",
  "Pre-Wedding",
  "Birthday",
  "Corporate",
];

const galleryItems = [
  {
    id: 1,
    image: heroWedding,
    title: "Sunset Wedding",
    category: "Wedding",
    location: "Udaipur, Rajasthan",
    date: "December 2024",
    description:
      "A magical sunset wedding at the Lake Palace, where two souls united under the golden sky. The ceremony was a perfect blend of traditional rituals and modern elegance.",
  },
  {
    id: 2,
    image: heroTraditional,
    title: "Grand Traditional Ceremony",
    category: "Traditional",
    location: "Mumbai, Maharashtra",
    date: "November 2024",
    description:
      "A beautiful traditional Indian wedding ceremony filled with vibrant colors, sacred rituals, and joyous celebrations that lasted three days.",
  },
  {
    id: 3,
    image: heroPrewedding,
    title: "Romantic Pre-Wedding",
    category: "Pre-Wedding",
    location: "Goa",
    date: "October 2024",
    description:
      "A dreamy pre-wedding shoot capturing the couple's love story against the backdrop of golden beaches and sunset skies.",
  }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] =
    useState<(typeof galleryItems)[0] | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-primary uppercase tracking-widest text-sm mb-4 font-medium animate-fade-up">
            Our Portfolio
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-up">
            Gallery
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up">
            Explore our collection of captured moments. Each photograph tells a
            unique story of love, celebration, and cherished memories.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="sticky top-20 z-30 bg-background/95 backdrop-blur-md border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "hero" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="min-w-[100px]"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-sm aspect-[4/3] cursor-pointer image-reveal"
                onClick={() => setSelectedItem(item)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={(item.image as any).src ?? (item.image as any)}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-xs uppercase tracking-wider text-primary-foreground/80 font-medium">
                    {item.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-primary-foreground mt-1">
                    {item.title}
                  </h3>
                  <Button
                    variant="link"
                    className="p-0 h-auto mt-2 text-primary-foreground/90"
                  >
                    View Details →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card border-border">
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          {selectedItem && (
            <div className="grid md:grid-cols-2">
              <div className="aspect-square md:aspect-auto">
                <img
                  src={(selectedItem.image as any).src ?? (selectedItem.image as any)}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                  {selectedItem.category}
                </span>
                <DialogHeader>
                  <DialogTitle className="font-display text-3xl font-bold text-foreground mt-2">
                    {selectedItem.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {selectedItem.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {selectedItem.date}
                  </span>
                </div>
                <p className="text-foreground/80 mt-6 leading-relaxed">
                  {selectedItem.description}
                </p>
                <Button variant="hero" className="mt-8 w-fit">
                  Book Similar Session
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
