import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="text-orange text-xl font-bold block mb-4">
              ØKERN BILAUKSJON
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Økern Bilauksjon AS har lang forholdet til rete slik at kjøper og selger kan føle
              seg trygg ved salg/kjøp på alle våre auksjoner.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-orange transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-orange transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Hurtiglenker</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/biler" className="text-muted-foreground hover:text-orange transition-colors">
                  Våre Biler
                </Link>
              </li>
              <li>
                <Link to="/gi-bud" className="text-muted-foreground hover:text-orange transition-colors">
                  Gi Bud
                </Link>
              </li>
              <li>
                <Link to="/selg-bil" className="text-muted-foreground hover:text-orange transition-colors">
                  Selg Bil
                </Link>
              </li>
              <li>
                <Link to="/om-oss" className="text-muted-foreground hover:text-orange transition-colors">
                  Auksjonsvilkår
                </Link>
              </li>
              <li>
                <Link to="/om-oss" className="text-muted-foreground hover:text-orange transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Kontakt Oss</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Folkeveien 22, 1348 Rykkinn</p>
              <p>22 22 56 56</p>
              <p>tom@okernbilauksjon.no</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2023 Økern Bilauksjon AS. Alle rettigheter reservert.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;