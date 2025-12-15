"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Feedback", path: "/feedback" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Camera className="w-8 h-8 text-primary" />
            <span className="font-display text-2xl font-semibold tracking-wide">
              <span className="text-primary">LS</span>{" "}
              <span className="text-foreground">Photography</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "relative text-sm font-medium tracking-wide uppercase transition-colors",
                  pathname === link.path
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground",
                  pathname === link.path &&
                    "after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-current"
                )}
              >
                {link.name}
              </Link>
            ))}

            <Link href="/login">
              <Button>Login</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all overflow-hidden",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="block py-3 text-lg font-medium border-b border-border/40"
            >
              {link.name}
            </Link>
          ))}

          <Link href="/login">
            <Button className="w-full">Login</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
