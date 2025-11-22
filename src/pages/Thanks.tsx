import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import confetti from "canvas-confetti";
import { CheckCircle, Package, Calendar } from "lucide-react";

const Thanks = () => {
  useEffect(() => {
    // Confetti animation
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#3b82f6", "#8b5cf6", "#fbbf24"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#3b82f6", "#8b5cf6", "#fbbf24"],
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedSection className="text-center">
          <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8 glow-primary">
            <CheckCircle className="w-12 h-12 text-primary" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Thank You for <span className="text-gradient-primary">Your Order</span>!
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12">
            Your custom PC is being prepared by our expert technicians.
          </p>

          <div className="glass-card p-8 rounded-2xl mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <Package className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Order Number</p>
                  <p className="text-xl font-bold">#AR-{Math.floor(Math.random() * 10000)}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-accent" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                  <p className="text-xl font-bold">3-7 Business Days</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground">
              You'll receive a confirmation email shortly with tracking information.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background font-bold"
              >
                <Link to="/">Back to Home</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/10 font-bold"
              >
                <Link to="/builder">Build Another PC</Link>
              </Button>
            </div>
          </div>

          <div className="mt-12 p-6 bg-card/50 rounded-xl">
            <h3 className="text-xl font-bold mb-2">What's Next?</h3>
            <p className="text-muted-foreground">
              Our team will carefully assemble and test your PC. You'll receive updates at each stage 
              of the process. If you have any questions, visit our <Link to="/support" className="text-primary hover:underline">support page</Link>.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Thanks;
