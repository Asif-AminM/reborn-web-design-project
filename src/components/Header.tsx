import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
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
          
          <nav className="flex items-center space-x-6">
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
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;