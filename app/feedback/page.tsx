"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const feedbacks = [
  {
    id: 1,
    name: "Priya & Rahul Sharma",
    event: "Wedding",
    rating: 5,
    text: "LS Photography made our wedding day unforgettable. Every photo captured the emotion and beauty of our special moments. The team was professional, punctual, and incredibly creative. We couldn't be happier with the results!",
    date: "December 2024",
  },
  {
    id: 2,
    name: "Ananya Desai",
    event: "Pre-Wedding",
    rating: 5,
    text: "The pre-wedding shoot was magical! The team knew exactly how to make us comfortable and the photos turned out absolutely stunning. They found the perfect locations and captured our love beautifully.",
    date: "November 2024",
  },
  {
    id: 3,
    name: "Vikram & Meera Patel",
    event: "Traditional Ceremony",
    rating: 5,
    text: "They captured the essence of our traditional ceremony beautifully. The attention to detail and respect for our customs was remarkable. Every ritual, every emotion was preserved perfectly.",
    date: "October 2024",
  },
  {
    id: 4,
    name: "Aditya Kumar",
    event: "Birthday",
    rating: 5,
    text: "Hired LS Photography for my daughter's first birthday and they exceeded all expectations. The candid shots were amazing and they were so patient with all the kids. Highly recommended!",
    date: "September 2024",
  },
  {
    id: 5,
    name: "Sneha & Arjun Mehta",
    event: "Wedding",
    rating: 5,
    text: "From the initial consultation to the final album delivery, the experience was flawless. The photos are absolutely breathtaking and tell our story perfectly. Worth every penny!",
    date: "August 2024",
  },
  {
    id: 6,
    name: "Riya Kapoor",
    event: "Corporate Event",
    rating: 4,
    text: "Professional and efficient! They covered our company's annual event and delivered high-quality photos within a week. The team was unobtrusive yet captured all the key moments.",
    date: "July 2024",
  },
];

const eventTypes = [
  "Wedding",
  "Pre-Wedding",
  "Birthday",
  "Traditional Ceremony",
  "Corporate Event",
  "Other",
];

export default function FeedbackPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    event: "",
    rating: 5,
    text: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Thank you for your feedback!",
      description:
        "Your review has been submitted and will appear after approval.",
    });

    setFormData({ name: "", event: "", rating: 5, text: "" });
    setIsSubmitting(false);
  };

  const handleRatingClick = (rating: number) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-card/50 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-primary uppercase tracking-widest text-sm mb-4 font-medium animate-fade-up">
            Client Reviews
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-up">
            Feedback
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up">
            Read what our clients say about their experience, and share your
            own story with us.
          </p>
        </div>
      </section>

      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Feedback List */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Client Reviews
              </h2>
              {feedbacks.map((feedback) => (
                <Card key={feedback.id} className="bg-card border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-display font-semibold text-foreground">
                          {feedback.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {feedback.event}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < feedback.rating
                                ? "fill-foreground text-foreground"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-foreground/80 leading-relaxed italic">
                      &quot;{feedback.text}&quot;
                    </p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {feedback.date}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Submit Feedback Form */}
            <div>
              <Card className="bg-card border-border sticky top-28">
                <CardContent className="p-6">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Share Your Experience
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Your Name
                      </label>
                      <Input
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        required
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Event Type
                      </label>
                      <select
                        className="flex h-11 w-full rounded-md border border-border bg-secondary/50 px-4 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        value={formData.event}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            event: e.target.value,
                          }))
                        }
                        required
                      >
                        <option value="">Select event type</option>
                        {eventTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Rating
                      </label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <button
                            key={rating}
                            type="button"
                            onClick={() => handleRatingClick(rating)}
                            className="p-1 transition-transform hover:scale-110"
                          >
                            <Star
                              className={`w-8 h-8 transition-colors ${
                                rating <= formData.rating
                                  ? "fill-foreground text-foreground"
                                  : "text-muted-foreground hover:text-foreground/50"
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Your Feedback
                      </label>
                      <Textarea
                        placeholder="Share your experience with us..."
                        value={formData.text}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            text: e.target.value,
                          }))
                        }
                        required
                        rows={4}
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          Submit Feedback
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
