import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileText, Shield, DollarSign, Clock } from "lucide-react";

const SelgBil = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-background to-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Selg din bil på auksjon</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La oss hjelpe deg med å selge bilen din raskt og enkelt
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Process Steps */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Hvordan fungerer det å selge bil hos Økern Bilauksjon?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-orange" />
                  </div>
                  <h3 className="font-semibold mb-2">Enkel registrering</h3>
                  <p className="text-sm text-muted-foreground">
                    Fyll ut skjemaet med informasjon om din bil
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-orange" />
                  </div>
                  <h3 className="font-semibold mb-2">Vi tar over</h3>
                  <p className="text-sm text-muted-foreground">
                    Vi håndterer alt fra vask til markedsføring
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-orange" />
                  </div>
                  <h3 className="font-semibold mb-2">Auksjon</h3>
                  <p className="text-sm text-muted-foreground">
                    Din bil blir auksjoner til høystbydende
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-orange" />
                  </div>
                  <h3 className="font-semibold mb-2">Rask betaling</h3>
                  <p className="text-sm text-muted-foreground">
                    Du mottar betalingen raskt og enkelt
                  </p>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="reg-number">Registreringsnummer</Label>
                    <Input id="reg-number" placeholder="EX32452" />
                  </div>
                  <div>
                    <Label htmlFor="mileage">Kilometerstand</Label>
                    <Input id="mileage" placeholder="Kun tall" />
                  </div>
                  <div>
                    <Label htmlFor="brand">Bilmerke</Label>
                    <Input id="brand" placeholder="eks. Toyota" />
                  </div>
                  <div>
                    <Label htmlFor="model">Årsmodell</Label>
                    <Input id="model" placeholder="AAAA" />
                  </div>
                  <div>
                    <Label htmlFor="first-name">Fornavn</Label>
                    <Input id="first-name" placeholder="Fornavn" />
                  </div>
                  <div>
                    <Label htmlFor="last-name">Etternavn</Label>
                    <Input id="last-name" placeholder="Etternavn" />
                  </div>
                  <div>
                    <Label htmlFor="email">E-post</Label>
                    <Input id="email" type="email" placeholder="navn@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefonnummer</Label>
                    <Input id="phone" placeholder="8 siffer" />
                  </div>
                  <div>
                    <Label htmlFor="min-price">Hva er minstepris?</Label>
                    <Input id="min-price" placeholder="Kun tall" />
                  </div>
                  <div>
                    <Label htmlFor="desired-price">Ønsket pris</Label>
                    <Input id="desired-price" placeholder="Kun tall" />
                  </div>
                </div>
                
                <Button className="w-full mt-6" variant="orange" size="lg">
                  Send forespørsel
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Information Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Selge bilen din har aldri vært enklere!</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p>
                  Hos Økern Bilauksjon tilbyr vi en trygg og effektiv tjeneste for både kjøpere og
                  selgere. Vi sørger for at hele prosessen er enkel og transparent, slik at du kan
                  føle deg trygg gjennom hele salget.
                </p>
                
                <div>
                  <h4 className="font-semibold mb-2">Enkel og rask prosess</h4>
                  <p>
                    Fyll ut et enkelt skjema, og vi tar rask av resten.
                    Fra vask og rens til tilstandsrapport og utstedd
                    gransking, sørger vi for at bilen din er klar
                    for salg.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Sikkerhet og garanti</h4>
                  <p>
                    Vi selger med bankgaranti som sikkerhet for
                    våre kunder. Økern Bilauksjon AS overtar
                    eierskap ved salg/kjøp på alle våre
                    auksjoner.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SelgBil;