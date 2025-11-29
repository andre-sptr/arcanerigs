import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Clock, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Support = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    reset();
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Need <span className="text-gradient-primary">Help</span>?
          </h1>
          <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
            We&apos;re here to assist you with any questions about your PC build, order, or technical support.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-primary font-semibold"
          >
            We usually reply within 24 hours.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="John Doe"
                    className="mt-2"
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="john@example.com"
                    className="mt-2"
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Tell us how we can help..."
                    className="mt-2 min-h-32"
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background font-bold"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Support</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Get a response within 24 hours
                    </p>
                    <a href="mailto:support@arcanerigs.com" className="text-primary hover:underline font-semibold">
                      support@arcanerigs.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone Support</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Talk to our team directly
                    </p>
                    <a href="tel:+15551234567" className="text-secondary hover:underline font-semibold">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Support Hours</h3>
                    <p className="text-muted-foreground text-sm">
                      Monday - Friday: 9:00 AM - 8:00 PM PST<br />
                      Saturday: 10:00 AM - 6:00 PM PST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">AI Assistant</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Get instant answers to common questions
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10"
                    >
                      <a href="/chat">Chat Now</a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked <span className="text-gradient-primary">Questions</span>
            </h2>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <h3 className="font-bold text-lg mb-2">How long does it take to build my PC?</h3>
                <p className="text-muted-foreground">
                  Most builds are completed within 3-5 business days after order confirmation. 
                  Custom configurations may take up to 7 business days.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h3 className="font-bold text-lg mb-2">What warranty do you offer?</h3>
                <p className="text-muted-foreground">
                  All builds come with a 3-year comprehensive warranty covering parts and labor. 
                  Individual components have manufacturer warranties that vary by brand.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h3 className="font-bold text-lg mb-2">Can I upgrade my PC later?</h3>
                <p className="text-muted-foreground">
                  Absolutely! We design all builds with upgradeability in mind. Contact us for upgrade 
                  consultations and we&apos;ll help you enhance your system.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Support;
