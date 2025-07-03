import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CarCardProps {
  brand: string;
  model: string;
  year: number;
  mileage: string;
  engine: string;
  transmission: string;
  image: string;
  status?: "auction-ended" | "new-arrival" | "active";
}

const CarCard = ({ 
  brand, 
  model, 
  year, 
  mileage, 
  engine, 
  transmission, 
  image, 
  status 
}: CarCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow relative">
      {status === "new-arrival" && (
        <Badge className="absolute top-3 left-3 z-10 bg-orange text-orange-foreground">
          New Arrival
        </Badge>
      )}
      
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={image} 
          alt={`${brand} ${model}`}
          className="w-full h-full object-cover"
        />
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2">{brand} {model}</h3>
        <div className="text-sm text-muted-foreground space-y-1">
          <p>{year} • {mileage} km • {engine}</p>
          <p>{transmission}</p>
        </div>
        
        {status === "auction-ended" && (
          <div className="mt-3">
            <Badge variant="secondary">Auction Ended</Badge>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CarCard;