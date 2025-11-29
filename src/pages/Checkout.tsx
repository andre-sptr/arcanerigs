import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AnimatedSection from "@/components/AnimatedSection";
import { CreditCard, Wallet, Building2 } from "lucide-react";

const Checkout = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<"card" | "wallet" | "bank">("card");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/thanks");
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">
            Complete Your <span className="text-gradient-primary">Order</span>
          </h1>
          <p className="text-center text-muted-foreground mb-12">
            Just a few more details and your dream PC will be on its way!
          </p>
        </AnimatedSection>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Shipping Address */}
          <AnimatedSection delay={100}>
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
          </AnimatedSection>

          {/* Payment Method */}
          <AnimatedSection delay={200}>
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    paymentMethod === "card"
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <CreditCard className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="font-semibold">Credit Card</p>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("wallet")}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    paymentMethod === "wallet"
                      ? "border-secondary bg-secondary/10"
                      : "border-border hover:border-secondary/50"
                  }`}
                >
                  <Wallet className="w-8 h-8 mx-auto mb-2 text-secondary" />
                  <p className="font-semibold">E-Wallet</p>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("bank")}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    paymentMethod === "bank"
                      ? "border-accent bg-accent/10"
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  <Building2 className="w-8 h-8 mx-auto mb-2 text-accent" />
                  <p className="font-semibold">Bank Transfer</p>
                </button>
              </div>

              {paymentMethod === "card" && (
                <div className="space-y-4">
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
                </div>
              )}
            </div>
          </AnimatedSection>

          {/* Order Summary */}
          <AnimatedSection delay={300}>
            <div className="glass-card p-8 rounded-2xl glow-primary">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>$3,499</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span className="text-primary font-semibold">FREE</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Tax</span>
                  <span>$279</span>
                </div>
                <div className="h-px bg-border my-4"></div>
                <div className="flex justify-between text-2xl font-bold">
                  <span>Total</span>
                  <span className="text-gradient-primary">$3,778</span>
                </div>
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background font-bold text-lg"
              >
                Confirm Purchase
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Estimated delivery: 3-7 business days
              </p>
            </div>
          </AnimatedSection>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
