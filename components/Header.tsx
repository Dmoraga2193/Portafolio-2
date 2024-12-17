"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  console.log("Header component rendered");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      id="main-header"
      className={`sticky top-0 z-50 w-full backdrop-blur transition-shadow duration-300 ${
        isScrolled ? "border-b shadow-md" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">
            <Code className="h-8 w-8 text-primary" />
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#about" className="transition-colors hover:text-primary">
            Sobre mí
          </Link>
          <Link href="#skills" className="transition-colors hover:text-primary">
            Habilidades
          </Link>
          <Link
            href="#projects"
            className="transition-colors hover:text-primary"
          >
            Proyectos
          </Link>

          <Link
            href="#contact"
            className="transition-colors hover:text-primary"
          >
            Contacto
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-background border-b md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col space-y-4 p-4">
              <Link
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="transition-colors hover:text-primary"
              >
                Sobre mí
              </Link>
              <Link
                href="#skills"
                onClick={() => setIsMenuOpen(false)}
                className="transition-colors hover:text-primary"
              >
                Habilidades
              </Link>
              <Link
                href="#projects"
                onClick={() => setIsMenuOpen(false)}
                className="transition-colors hover:text-primary"
              >
                Proyectos
              </Link>

              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="transition-colors hover:text-primary"
              >
                Contacto
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
