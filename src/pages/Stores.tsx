import { useState } from "react";
import { MapPin, Clock, Phone, Star, Filter } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const stores = [
  {
    id: 1,
    name: "ArcaneRigs Silicon Valley",
    address: "123 Tech Street, Silicon Valley, CA 94025",
    coordinates: [-122.0838, 37.3861] as [number, number],
    hours: "Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 6:00 PM",
    phone: "+1 (555) 123-4567",
    rating: 4.8,
    distance: 2.3,
    inStock: true,
  },
  {
    id: 2,
    name: "ArcaneRigs Downtown SF",
    address: "456 Innovation Ave, San Francisco, CA 94102",
    coordinates: [-122.4194, 37.7749] as [number, number],
    hours: "Mon-Sat: 9:00 AM - 9:00 PM, Sun: 10:00 AM - 7:00 PM",
    phone: "+1 (555) 234-5678",
    rating: 4.9,
    distance: 5.7,
    inStock: true,
  },
  {
    id: 3,
    name: "ArcaneRigs Tech Hub",
    address: "789 Circuit Blvd, San Jose, CA 95110",
    coordinates: [-121.8863, 37.3382] as [number, number],
    hours: "Mon-Fri: 10:00 AM - 7:00 PM, Sat-Sun: Closed",
    phone: "+1 (555) 345-6789",
    rating: 4.6,
    distance: 8.1,
    inStock: false,
  },
  {
    id: 4,
    name: "ArcaneRigs Peninsula",
    address: "321 Hardware Way, Palo Alto, CA 94301",
    coordinates: [-122.1430, 37.4419] as [number, number],
    hours: "Mon-Sat: 9:00 AM - 8:00 PM, Sun: 11:00 AM - 5:00 PM",
    phone: "+1 (555) 456-7890",
    rating: 4.7,
    distance: 3.5,
    inStock: true,
  },
  {
    id: 5,
    name: "ArcaneRigs East Bay",
    address: "555 Gaming Street, Oakland, CA 94612",
    coordinates: [-122.2711, 37.8044] as [number, number],
    hours: "Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 6:00 PM",
    phone: "+1 (555) 567-8901",
    rating: 4.5,
    distance: 12.4,
    inStock: true,
  },
];

const Shop = () => {
  const [selectedStore, setSelectedStore] = useState<number | null>(null);
  const [filterBy, setFilterBy] = useState<"distance" | "rating">("distance");
  
  const sortedStores = [...stores].sort((a, b) => {
    if (filterBy === "distance") {
      return a.distance - b.distance;
    }
    return b.rating - a.rating;
  });

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center text-gradient-primary">
            Find a Store Near You
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Visit our physical locations to see components in person and talk to our expert staff.
          </p>
        </motion.div>


        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-between mb-8"
        >
          <h2 className="text-2xl font-bold">All Locations</h2>
          <div className="flex items-center gap-3">
            <Filter className="w-5 h-5 text-primary" />
            <Select value={filterBy} onValueChange={(value: "distance" | "rating") => setFilterBy(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="distance">Sort by Distance</SelectItem>
                <SelectItem value="rating">Sort by Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* Store List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedStores.map((store, index) => (
            <motion.div
              key={store.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
              onClick={() => setSelectedStore(store.id)}
              className={`glass-card p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                selectedStore === store.id 
                  ? "ring-2 ring-primary shadow-[0_0_30px_rgba(var(--primary),0.5)]" 
                  : "hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(var(--primary),0.3)]"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold">{store.name}</h3>
                <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-lg">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="text-sm font-bold">{store.rating}</span>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">{store.address}</p>
                    <p className="text-xs text-primary mt-1">{store.distance} miles away</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{store.hours}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <a href={`tel:${store.phone}`} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {store.phone}
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-semibold ${store.inStock ? "text-accent" : "text-muted-foreground"}`}>
                    {store.inStock ? "✓ In Stock" : "Limited Stock"}
                  </span>
                  <Button size="sm" variant="outline">
                    Get Directions
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
