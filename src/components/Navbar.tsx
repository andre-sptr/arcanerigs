import { Link, useLocation } from "react-router-dom";
import { Menu, X, Cpu } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Build PC", path: "/builder" },
    { name: "Stores", path: "/stores" },
    { name: "Team", path: "/team" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Support", path: "/support" },
    { name: "Chat", path: "/chat" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Cpu className="w-8 h-8 text-primary group-hover:animate-glow-pulse transition-all" />
            <span className="text-2xl font-bold text-gradient-primary">ArcaneRigs</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg transition-all ${
                  isActive(link.path)
                    ? "bg-primary/20 text-primary font-semibold"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/10"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background font-bold"
            >
              <Link to="/builder">Start Building</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2 hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-all ${
                  isActive(link.path)
                    ? "bg-primary/20 text-primary font-semibold"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/10"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background font-bold"
            >
              <Link to="/builder" onClick={() => setIsOpen(false)}>
                Start Building
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
