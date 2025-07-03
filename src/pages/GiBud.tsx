import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const GiBud = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-background to-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Gi ditt bud</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Send inn ditt bud på våre kommende bilauksjon. Alle bud er bindende og underlagt våre
            auksjonsvilkår.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bid Form */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* Vehicle Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Kjøretøyinformasjon</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="reg-number">Registreringsnummer</Label>
                      <Input id="reg-number" placeholder="EX32452" />
                    </div>
                    <div>
                      <Label htmlFor="mileage">Kilometerstand</Label>
                      <Input id="mileage" placeholder="Antall kilometer" />
                    </div>
                    <div>
                      <Label htmlFor="brand">Bilmerke</Label>
                      <Input id="brand" placeholder="Skriv bilmerke" />
                    </div>
                    <div>
                      <Label htmlFor="model">Årsmodell</Label>
                      <Input id="model" placeholder="Skriv årsmodell" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Personlig informasjon</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="first-name">Fornavn</Label>
                      <Input id="first-name" placeholder="Skriv fornavn" />
                    </div>
                    <div>
                      <Label htmlFor="last-name">Etternavn</Label>
                      <Input id="last-name" placeholder="Skriv etternavn" />
                    </div>
                    <div>
                      <Label htmlFor="email">E-post</Label>
                      <Input id="email" type="email" placeholder="din@epost.no" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefon</Label>
                      <Input id="phone" placeholder="Skriv telefonnummer" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Bid Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Buddetaljer</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="min-price">Minstepris</Label>
                      <Input id="min-price" placeholder="kr 0" />
                    </div>
                    <div>
                      <Label htmlFor="max-price">Ønsket pris</Label>
                      <Input id="max-price" placeholder="kr 0" />
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm">
                      Jeg godtar{" "}
                      <span className="text-orange underline cursor-pointer">
                        auksjonsvilkårene
                      </span>
                    </Label>
                  </div>
                </CardContent>
              </Card>

              <Button className="w-full" variant="orange" size="lg">
                Send inn bud
              </Button>
            </div>
          </div>

          {/* Important Information Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Viktig informasjon</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <p className="font-medium mb-2">• Alle bud er bindende når de er sendt inn</p>
                </div>
                <div>
                  <p className="font-medium mb-2">• Kjøperpåslag på 12% av hammerslag (min. kr 2 900, maks. kr 11 900)</p>
                </div>
                <div>
                  <p className="font-medium mb-2">• Administrasjonsgebyr på kr 1 490 tilkommer</p>
                </div>
                <div>
                  <p className="font-medium mb-2">• Bestilling må skje innen 2 dager etter vunnet auksjon</p>
                </div>
                <div>
                  <p className="font-medium mb-2">• Kjøretøyet må hentes innen angitt tidsfrist</p>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-muted-foreground">
                    Trenger du hjelp? Kontakt oss på{" "}
                    <span className="text-orange font-medium">22 22 56 56</span>
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

export default GiBud;