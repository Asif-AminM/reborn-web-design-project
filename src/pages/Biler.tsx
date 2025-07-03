import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Grid3X3, List } from "lucide-react";

const Biler = () => {
  const cars = [
    {
      brand: "Audi",
      model: "RS3",
      year: 2020,
      mileage: "18 175",
      engine: "1 598 cm³",
      transmission: "Hibrid",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500",
      status: "auction-ended" as const
    },
    {
      brand: "Audi", 
      model: "RS3",
      year: 2020,
      mileage: "18 175", 
      engine: "1 598 cm³",
      transmission: "Hibrid",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500",
      status: "auction-ended" as const
    },
    {
      brand: "Audi",
      model: "RS3", 
      year: 2020,
      mileage: "18 175",
      engine: "1 598 cm³", 
      transmission: "Hibrid",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500",
      status: "auction-ended" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className="w-80">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Filters:</CardTitle>
                <p className="text-sm text-muted-foreground">CAR MODELS</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Audi</span>
                    <span className="text-muted-foreground">(3)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Audi</span>
                    <span className="text-muted-foreground">(3)</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>car</span>
                    <span className="text-orange">+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>car2</span>
                    <span className="text-orange">+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <Button variant="orange" size="icon">
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <List className="h-4 w-4" />
                </Button>
              </div>
              
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="year-new">Year: Newest First</SelectItem>
                  <SelectItem value="year-old">Year: Oldest First</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cars.map((car, index) => (
                <CarCard key={index} {...car} />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Biler;