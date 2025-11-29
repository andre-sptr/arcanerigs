import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const executives = [
  {
    id: 1,
    name: "Ammar Rayhan Alesta",
    title: "Founder & CEO",
    country: "Indonesia",
    flag: "🇮🇩",
    description: "Visionary mind behind ArcaneRigs. Focused on innovation, performance, and the future of PC technology.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=600&fit=crop&crop=top",
  },
  {
    id: 2,
    name: "Asrul Fuadisyah",
    title: "Chief Technology Officer (CTO)",
    country: "Indonesia",
    flag: "🇮🇩",
    description: "Leads system architecture and ensures every build meets world-class performance standards.",
    image: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622?w=400&h=600&fit=crop&crop=top",
  },
  {
    id: 3,
    name: "Muhammad Firdaus",
    title: "Chief Operations Officer (COO)",
    country: "Indonesia",
    flag: "🇮🇩",
    description: "Oversees production, logistics, and strategic growth across all departments.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop&crop=top",
  },
  {
    id: 4,
    name: "Muhammad Alzakri",
    title: "Chief Marketing Officer (CMO)",
    country: "Indonesia",
    flag: "🇮🇩",
    description: "Drives ArcaneRigs' global presence and creative storytelling in tech marketing.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=top",
  },
];

const coreTeam = [
  {
    id: 5,
    name: "Ethan Zhang",
    position: "Senior GPU Engineer",
    country: "China",
    flag: "🇨🇳",
    description: "Specializes in GPU optimization and thermal management solutions.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Lucas Meyer",
    position: "Software Architect",
    country: "Germany",
    flag: "🇩🇪",
    description: "Designs scalable systems for performance monitoring and diagnostics.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: 7,
    name: "Aria Tanaka",
    position: "UI/UX Designer",
    country: "Japan",
    flag: "🇯🇵",
    description: "Creates intuitive interfaces for configuration tools and dashboards.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    id: 8,
    name: "Noah Williams",
    position: "Data Systems Lead",
    country: "United States",
    flag: "🇺🇸",
    description: "Manages performance analytics and customer data infrastructure.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    id: 9,
    name: "Priya Nair",
    position: "Cloud Infrastructure",
    country: "India",
    flag: "🇮🇳",
    description: "Oversees cloud deployment and remote system management platforms.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: 10,
    name: "Liam O'Connor",
    position: "Hardware Specialist",
    country: "Ireland",
    flag: "🇮🇪",
    description: "Expert in component compatibility and custom cooling solutions.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
  },
  {
    id: 11,
    name: "Elena Rossi",
    position: "3D Visualization Artist",
    country: "Italy",
    flag: "🇮🇹",
    description: "Creates stunning 3D renders and marketing visuals for products.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
  },
  {
    id: 12,
    name: "David Kim",
    position: "Firmware Engineer",
    country: "South Korea",
    flag: "🇰🇷",
    description: "Develops BIOS optimizations and firmware updates for builds.",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop",
  },
];

const AnimatedCounter = ({ target }: { target: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, target]);

  return (
    <motion.span ref={ref}>
      {rounded}
    </motion.span>
  );
};

const Team = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header with Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Meet Our <span className="text-gradient-primary">Team</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl text-gradient-accent font-semibold mb-2"
          >
            Our Team: <AnimatedCounter target={43} /> Members Worldwide
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            From a small team to the world — powered by passion, precision, and performance.
          </motion.p>
        </motion.div>

        {/* Executive Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Executive <span className="text-gradient-primary">Leadership</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {executives.map((exec, index) => (
              <motion.div
                key={exec.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
                className="glass-card p-6 rounded-2xl group cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold">{exec.name}</h3>
                  <span className="text-2xl">{exec.flag}</span>
                </div>
                <p className="text-primary font-semibold mb-3">{exec.title}</p>
                <p className="text-sm text-muted-foreground">{exec.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Core <span className="text-gradient-primary">Team Members</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
                className="glass-card p-6 rounded-2xl group cursor-pointer"
              >
                <div className="aspect-square rounded-xl overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <span className="text-xl">{member.flag}</span>
                </div>
                <p className="text-primary font-semibold mb-2">{member.position}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Team;
