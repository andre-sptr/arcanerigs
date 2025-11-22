import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "James Martinez",
    role: "Pro Gamer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    rating: 5,
    text: "ArcaneRigs built me the perfect gaming setup. I'm hitting 240 FPS consistently in Valorant. The team really knows their stuff!",
    game: "Valorant Pro Player",
  },
  {
    id: 2,
    name: "Emily Watson",
    role: "Content Creator",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    rating: 5,
    text: "My rendering times have been cut in half! The workstation they built handles 4K editing like a breeze. Absolutely worth every penny.",
    game: "YouTube Content Creator",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    rating: 5,
    text: "Perfect workstation for running multiple VMs and heavy development work. The team helped me choose exactly what I needed.",
    game: "Full Stack Developer",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "3D Artist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    rating: 5,
    text: "Blender renders that used to take hours now finish in minutes. This machine is a beast! Customer service was amazing too.",
    game: "Blender 3D Artist",
  },
  {
    id: 5,
    name: "David Park",
    role: "Streamer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    rating: 5,
    text: "Stream quality has never been better. Zero dropped frames, crystal clear encoding. My viewers love the upgrade!",
    game: "Twitch Partner",
  },
  {
    id: 6,
    name: "Lisa Anderson",
    role: "Game Developer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    rating: 5,
    text: "Compiling Unreal Engine projects is so much faster now. The build quality is exceptional and cable management is pristine.",
    game: "Indie Game Developer",
  },
  {
    id: 7,
    name: "Alex Thompson",
    role: "Gamer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    rating: 5,
    text: "My custom build runs Cyberpunk 2077 flawlessly! Best service ever. The attention to detail and support throughout the process was incredible.",
    game: "RPG Enthusiast",
  },
  {
    id: 8,
    name: "Rachel Kim",
    role: "Music Producer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    rating: 5,
    text: "Zero latency when recording and producing. This workstation handles my entire production suite without breaking a sweat. Amazing build!",
    game: "Audio Engineer",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            What Our <span className="text-gradient-primary">Customers Say</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what gamers, creators, and professionals say about their ArcaneRigs builds.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-center glass-card p-8 rounded-2xl"
          >
            <p className="text-5xl font-bold text-gradient-primary mb-2">4.9</p>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent fill-accent" />
              ))}
            </div>
            <p className="text-muted-foreground">Average Rating</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center glass-card p-8 rounded-2xl"
          >
            <p className="text-5xl font-bold text-gradient-primary mb-2">2.5k+</p>
            <p className="text-muted-foreground">Happy Customers</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center glass-card p-8 rounded-2xl"
          >
            <p className="text-5xl font-bold text-gradient-primary mb-2">98%</p>
            <p className="text-muted-foreground">Would Recommend</p>
          </motion.div>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto mb-16"
        >
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="glass-card p-8 md:p-12 rounded-2xl"
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full object-cover mb-6 ring-4 ring-primary/20"
                  />
                  
                  <div className="flex mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-accent fill-accent" />
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl text-muted-foreground mb-6 italic max-w-2xl">
                    &quot;{testimonials[currentIndex].text}&quot;
                  </p>

                  <h3 className="text-2xl font-bold mb-1">{testimonials[currentIndex].name}</h3>
                  <p className="text-primary font-semibold">{testimonials[currentIndex].game}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 glass-card p-3 rounded-full hover:scale-110 transition-transform"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 glass-card p-3 rounded-full hover:scale-110 transition-transform"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Before/After Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 rounded-2xl"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            Performance <span className="text-gradient-accent">Benchmarks</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Without ArcaneRigs</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• GTA V: 45 FPS (Medium Settings)</li>
                <li>• Cyberpunk 2077: 30 FPS (Low Settings)</li>
                <li>• Blender Render: 45 minutes</li>
                <li>• Video Export (4K): 2 hours</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-gradient-primary">With ArcaneRigs</h3>
              <ul className="space-y-3 text-primary font-semibold">
                <li>• GTA V: 165 FPS (Ultra Settings) ⚡</li>
                <li>• Cyberpunk 2077: 120 FPS (High Settings) ⚡</li>
                <li>• Blender Render: 8 minutes ⚡</li>
                <li>• Video Export (4K): 25 minutes ⚡</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
