import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@assets/logo_3_1776658907341.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Our Works", path: "/our-works" },
  { name: "Contact", path: "/contact" },
  { name: "Connect Us", path: "/connect" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-panel py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Desktop Nav - Left */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <span
                  className={`text-sm font-medium tracking-wider uppercase transition-colors hover:text-primary hover:text-glow cursor-pointer ${
                    location === link.path ? "text-primary text-glow" : "text-gray-400"
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-primary transition-colors"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>

          {/* Logo - Right */}
          <Link href="/">
            <div className="cursor-pointer h-10 w-auto group relative">
              <img
                src={logo}
                alt="INOMADIC"
                className="h-full w-auto object-contain drop-shadow-[0_0_10px_rgba(0,255,136,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(0,255,136,0.6)] transition-all duration-300"
              />
            </div>
          </Link>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-3/4 max-w-sm glass-panel z-[70] flex flex-col p-8 border-r border-white/10"
            >
              <button
                className="self-end text-gray-400 hover:text-primary transition-colors mb-12"
                onClick={() => setIsOpen(false)}
              >
                <X size={28} />
              </button>
              
              <nav className="flex flex-col gap-8">
                {navLinks.map((link) => (
                  <Link key={link.path} href={link.path}>
                    <span
                      className={`text-xl font-bold tracking-widest uppercase transition-colors hover:text-primary hover:text-glow cursor-pointer ${
                        location === link.path ? "text-primary text-glow" : "text-gray-300"
                      }`}
                    >
                      {link.name}
                    </span>
                  </Link>
                ))}
              </nav>

              <div className="mt-auto">
                <img src={logo} alt="INOMADIC" className="h-8 w-auto opacity-50" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
