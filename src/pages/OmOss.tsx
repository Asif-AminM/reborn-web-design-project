import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const OmOss = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Om Økern Bilauksjon</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Vår Historie</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Økern Bilauksjon AS har lang forholdet til rete slik at kjøper og selger kan føle
                  seg trygg ved salg/kjøp på alle våre auksjoner. Vi har bygget opp en solid 
                  reputasjon basert på ærlighet, integritet og profesjonalitet.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Vårt Oppdrag</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Vi streber etter å levere den beste auksjonsopplevelsen for både kjøpere og
                  selgere. Vårt mål er å gjøre prosessen så enkel og transparent som mulig,
                  samtidig som vi opprettholder høyeste standarder for kvalitet og service.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Kontakt Informasjon</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-orange">Adresse</h3>
                  <p className="text-muted-foreground">
                    Folkeveien 22, 1348 Rykkinn
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-orange">Telefon</h3>
                  <p className="text-muted-foreground">22 22 56 56</p>
                </div>
                <div>
                  <h3 className="font-semibold text-orange">E-post</h3>
                  <p className="text-muted-foreground">tom@okernbilauksjon.no</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Våre Tjenester</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Bilauksjon hver onsdag og søndag</li>
                <li>• Profesjonell vurdering av kjøretøy</li>
                <li>• Trygg og sikker betalingsløsning</li>
                <li>• Hjelp med dokumentasjon</li>
                <li>• Markedsføring av ditt kjøretøy</li>
                <li>• Fullservice fra start til slutt</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OmOss;