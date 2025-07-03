import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border">
      {/* Top contact bar */}
      <div className="bg-header-bg border-b border-border">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>Telefon: +47 123 456 789</span>
            <span>E-post: post@bilauksjon.no</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-orange text-xl font-bold">
            ØKERN BILAUKSJON
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/biler" className="text-foreground hover:text-orange transition-colors">
              Våre Biler
            </Link>
            <Link to="/om-oss" className="text-foreground hover:text-orange transition-colors">
              Om Oss
            </Link>
            <Button variant="orange" asChild>
              <Link to="/gi-bud">Gi Bud</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link to="/selg-bil">Selg Bil</Link>
            </Button>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link 
                to="/biler" 
                className="text-foreground hover:text-orange transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Våre Biler
              </Link>
              <Link 
                to="/om-oss" 
                className="text-foreground hover:text-orange transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Om Oss
              </Link>
              <Button variant="orange" asChild className="w-full">
                <Link to="/gi-bud" onClick={() => setMobileMenuOpen(false)}>Gi Bud</Link>
              </Button>
              <Button variant="secondary" asChild className="w-full">
                <Link to="/selg-bil" onClick={() => setMobileMenuOpen(false)}>Selg Bil</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;