import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

const BuilderThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger confetti animation
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: NodeJS.Timeout = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="glass-card p-12 rounded-3xl text-center space-y-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(var(--primary),0.5)]"
          >
            <Check className="w-12 h-12 text-background" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">
              Thank You for Your Order!
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              Your dream PC is on its way
            </p>
            <p className="text-lg text-muted-foreground">
              Estimated delivery: <span className="text-primary font-semibold">5-7 business days</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-4"
          >
            <p className="text-muted-foreground">
              We've sent a confirmation email with your order details and tracking information.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button
                onClick={() => navigate("/")}
                variant="outline"
                size="lg"
              >
                Back to Home
              </Button>
              <Button
                onClick={() => navigate("/builder")}
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background font-bold"
              >
                Build Another PC
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BuilderThankYou;
