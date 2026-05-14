"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

const links = [
  { label: "Features", href: "#features" },
  { label: "System", href: "#system" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(5,5,5,0.88)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-[#10B981] flex items-center justify-center shadow-[0_0_16px_rgba(16,185,129,0.4)]">
              <span className="text-black font-bold text-xs tracking-tighter">B</span>
            </div>
            <span className="font-semibold text-[#F5F5F5] tracking-[-0.02em] text-sm">
              BULK<span className="text-[#10B981]">SYSTEM</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-sm text-[#A1A1AA] hover:text-[#F5F5F5] transition-colors duration-150 rounded-lg hover:bg-[rgba(255,255,255,0.04)] cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm text-[#A1A1AA] hover:text-[#F5F5F5] transition-colors px-4 py-2 cursor-pointer">
              Log in
            </button>
            <Button size="sm" onClick={() => scrollTo("#pricing")}>
              Start Building
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-[#F5F5F5] origin-center transition-all"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-0.5 bg-[#F5F5F5]"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-[#F5F5F5] origin-center transition-all"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-[rgba(5,5,5,0.96)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)] md:hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {links.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left px-4 py-3 text-[#A1A1AA] hover:text-[#F5F5F5] text-sm transition-colors rounded-lg hover:bg-[rgba(255,255,255,0.04)] cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 border-t border-[rgba(255,255,255,0.06)] flex flex-col gap-2">
                <Button variant="ghost" size="md" className="w-full justify-center">
                  Log in
                </Button>
                <Button size="md" className="w-full justify-center" onClick={() => scrollTo("#pricing")}>
                  Start Building
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
