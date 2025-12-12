import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import solGiversLogo from "@/assets/solgivers-logo.jpg";

const SolNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "회사소개", href: "#about" },
    { label: "서비스", href: "#services" },
    { label: "사업분야", href: "#business" },
    { label: "프로젝트", href: "#projects" },
    { label: "오시는 길", href: "#location" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <img
              src={solGiversLogo}
              alt="SolGivers"
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">SolGivers</span>
              <span className="text-xs text-muted-foreground">
                솔루션을 주는 사람들
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
            >
              문의하기
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-foreground/80 hover:text-primary font-medium transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-lg font-medium text-center transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              문의하기
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default SolNavbar;
