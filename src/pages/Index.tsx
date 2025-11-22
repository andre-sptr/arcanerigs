import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gamepad2, Palette, Briefcase, Zap, Shield, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(210_100%_60%/0.1),transparent_50%)]" />
          <motion.div 
            className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
            animate={{ 
              y: [0, 50, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
            animate={{ 
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-gradient-primary leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Play. Create. Dominate.
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Build your dream gaming rig with top-tier components. From GTA V to Cyberpunk 2077 — 
              experience next-gen performance with ArcaneRigs.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background font-bold text-lg px-8 py-6 glow-primary hover-scale"
              >
                <Link to="/builder">Build Your PC</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/10 font-bold text-lg px-8 py-6 hover-scale"
              >
                <Link to="/shop">Find a Store</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gaming Section */}
      <section className="py-32 container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-primary">Unleash</span> Your Gaming Potential
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Play Grand Theft Auto V on Ryzen 9 7945HX — effortlessly. Experience 200+ FPS on ultra settings 
              with RTX 4090 power. Dominate every match with zero compromises.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background font-bold">
              <Link to="/builder">Build Gaming PC</Link>
            </Button>
          </div>
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="glass-card p-8 rounded-2xl glow-primary">
              <img 
                src="https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=800&h=600&fit=crop" 
                alt="Gaming PC Setup"
                className="rounded-xl w-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Rendering Section */}
      <section className="py-32 container mx-auto px-4 bg-gradient-to-b from-transparent to-card/30">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div 
            className="relative order-2 md:order-1"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="glass-card p-8 rounded-2xl glow-secondary">
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop" 
                alt="3D Rendering"
                className="rounded-xl w-full"
              />
            </div>
          </motion.div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-accent">Power</span> Beyond Limits
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Render 3D worlds in seconds with RTX 4090 + Ryzen 9 power. Handle Blender, Unity, Premiere Pro, 
              and DaVinci Resolve with professional-grade performance.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-secondary to-accent hover:opacity-90 text-background font-bold">
              <Link to="/builder">Build Creator PC</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Productivity Section */}
      <section className="py-32 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              The Future of <span className="text-gradient-primary">Performance</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Edit. Create. Stream. Multitask like a pro. Handle multiple 4K displays, 
              professional workloads, and demanding applications simultaneously.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-accent to-primary hover:opacity-90 text-background font-bold">
              <Link to="/builder">Build Workstation</Link>
            </Button>
          </div>
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="glass-card p-8 rounded-2xl glow-accent">
              <img 
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop" 
                alt="Workstation Setup"
                className="rounded-xl w-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Performance Cards */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Built for <span className="text-gradient-accent">Every Purpose</span>
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Whether you're gaming, creating content, or handling professional workloads — 
            we've got the perfect rig for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Gamepad2, title: "Gaming PCs", desc: "Play top titles with 144+ FPS. Optimized for GTA V, Valorant, Cyberpunk 2077, and more.", color: "primary", delay: 0 },
            { icon: Palette, title: "Creator PCs", desc: "Handle 3D rendering, video editing, and design workflows effortlessly.", color: "secondary", delay: 0.1 },
            { icon: Briefcase, title: "Workstation PCs", desc: "For professionals who demand power. Handle simulations, AI models, and complex data workloads.", color: "accent", delay: 0.2 }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3, delay: item.delay }}
              viewport={{ once: true }}
            >
              <div className={`glass-card p-8 rounded-2xl h-full cursor-pointer group glow-${item.color}`}>
                <div className={`w-16 h-16 bg-${item.color}/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-${item.color}/30 transition-colors`}>
                  <item.icon className={`w-8 h-8 text-${item.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground mb-6">{item.desc}</p>
                <Link to="/builder" className={`text-${item.color} font-semibold inline-flex items-center group-hover:gap-2 transition-all`}>
                  Build Now <span className="ml-2 group-hover:ml-0">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-transparent to-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Why <span className="text-gradient-primary">ArcaneRigs</span>?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Top-Tier Components", desc: "We only use premium parts from NVIDIA, AMD, Intel, and leading manufacturers.", color: "primary", delay: 0 },
              { icon: Shield, title: "3-Year Warranty", desc: "Every build comes with comprehensive warranty and lifetime support.", color: "secondary", delay: 0.1 },
              { icon: Wrench, title: "Expert Assembly", desc: "Built by certified technicians with years of experience in PC building.", color: "accent", delay: 0.2 }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <motion.div 
                  className={`w-20 h-20 bg-${item.color}/10 rounded-full flex items-center justify-center mx-auto mb-6`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className={`w-10 h-10 text-${item.color}`} />
                </motion.div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="glass-card p-12 rounded-3xl text-center glow-primary">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your <span className="text-gradient-accent">Dream PC</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start customizing your perfect rig now. Choose every component and see your total price in real-time.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-background font-bold text-lg px-12 py-6 hover-scale"
            >
              <Link to="/builder">Start Building Now</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
