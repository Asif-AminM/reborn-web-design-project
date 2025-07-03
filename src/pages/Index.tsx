import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-car.jpg";

const Index = () => {
  const latestArrivals = [
    {
      brand: "Mercedes",
      model: "AMG GT",
      year: 2022,
      mileage: "12 500",
      engine: "4.0L V8",
      transmission: "Automatic",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500",
      status: "new-arrival" as const
    },
    {
      brand: "Subaru",
      model: "Forester",
      year: 2021,
      mileage: "23 800",
      engine: "2.5L",
      transmission: "AWD",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500",
      status: "new-arrival" as const
    },
    {
      brand: "Volvo",
      model: "XC90",
      year: 2020,
      mileage: "45 200",
      engine: "2.0L T8",
      transmission: "Hybrid",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=500",
      status: "new-arrival" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            {/* Left Content */}
            <div className="text-white text-center lg:text-left">
              <p className="text-sm uppercase tracking-wider mb-2">BILAUKSJON</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-orange">ONGSDAG OG</span><br />
                <span className="text-orange">SONDAG</span>
              </h1>
              <p className="text-lg md:text-xl mb-2">HVER UKE</p>
              <p className="text-sm mb-6 lg:mb-8">Onsdag kl. 18:00-20:00 og Søndag kl. 15:00-17:00</p>
              
              <div className="mb-6 lg:mb-8">
                <h3 className="text-lg font-semibold mb-2">Kontakt oss</h3>
                <p className="text-sm">Tom Østerby</p>
                <p className="text-sm">22 22 56 56</p>
                <p className="text-sm text-orange">tom@okernbilauksjon.no</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="orange">Gi bud nå</Button>
                <Button variant="secondary">Selg bilen din</Button>
              </div>
            </div>

            {/* Right Content - Opening Hours */}
            <div className="lg:self-start lg:mt-12 order-first lg:order-last">
              <Card className="bg-card/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Åpningstider</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Mandag:</span>
                      <span>09:00-18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tirsdag:</span>
                      <span>09:00-18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-orange">Onsdag:</span>
                      <span className="text-orange">09:00-20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Torsdag:</span>
                      <span>09:00-18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fredag:</span>
                      <span>09:00-17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Lørdag:</span>
                      <span>Stengt</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-orange">Søndag:</span>
                      <span className="text-orange">15:00-18:00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Arrivals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Arrivals</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our newest additions - premium vehicles that have just arrived at our showroom
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArrivals.map((car, index) => (
              <CarCard key={index} {...car} />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
