import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Wallet, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const BuilderPayment = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<"card" | "wallet" | "bank">("card");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/builder/thankyou");
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center text-gradient-primary">
            Complete Your Order
          </h1>
          <p className="text-center text-muted-foreground mb-12">
            Just a few more details and your dream PC will be on its way!
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Shipping Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6">Shipping Address</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" className="mt-2" required />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" className="mt-2" required />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="mt-2" required />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="address">Street Address</Label>
                  <Input id="address" placeholder="123 Tech Street" className="mt-2" required />
                </div>
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Silicon Valley" className="mt-2" required />
                </div>
                <div>
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input id="zip" placeholder="12345" className="mt-2" required />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Payment Method */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <motion.button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    paymentMethod === "card"
                      ? "border-primary bg-primary/10 shadow-[0_0_20px_rgba(var(--primary),0.3)]"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <CreditCard className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="font-semibold">Credit Card</p>
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => setPaymentMethod("wallet")}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    paymentMethod === "wallet"
                      ? "border-secondary bg-secondary/10 shadow-[0_0_20px_rgba(var(--secondary),0.3)]"
                      : "border-border hover:border-secondary/50"
                  }`}
                >
                  <Wallet className="w-8 h-8 mx-auto mb-2 text-secondary" />
                  <p className="font-semibold">E-Wallet</p>
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => setPaymentMethod("bank")}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    paymentMethod === "bank"
                      ? "border-accent bg-accent/10 shadow-[0_0_20px_rgba(var(--accent),0.3)]"
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  <Building2 className="w-8 h-8 mx-auto mb-2 text-accent" />
                  <p className="font-semibold">Bank Transfer</p>
                </motion.button>
              </div>

              {paymentMethod === "card" && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-2" required />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" className="mt-2" required />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" className="mt-2" required />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background font-bold text-lg"
            >
              Confirm Order
            </Button>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Estimated delivery: 5-7 business days
            </p>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default BuilderPayment;
