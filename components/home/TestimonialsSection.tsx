"use client";

import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Priya & Rahul Sharma",
    event: "Wedding",
    rating: 5,
    text: "LS Photography made our wedding day unforgettable. Every photo captured the emotion and beauty of our special moments. Truly exceptional work!",
  },
  {
    name: "Ananya Desai",
    event: "Pre-Wedding",
    rating: 5,
    text: "The pre-wedding shoot was magical! The team knew exactly how to make us comfortable and the photos turned out absolutely stunning.",
  },
  {
    name: "Vikram & Meera Patel",
    event: "Traditional Ceremony",
    rating: 5,
    text: "They captured the essence of our traditional ceremony beautifully. The attention to detail and respect for our customs was remarkable.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-widest text-sm mb-4 font-medium">
            Client Stories
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We&apos;re honored to be part of so many beautiful celebrations.
            Here&apos;s what our clients have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-foreground text-foreground"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground/90 leading-relaxed mb-6 italic">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Author */}
                <div>
                  <p className="font-display font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.event}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
