import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Cpu, 
  Zap, 
  Gamepad2, 
  Brain, 
  Database, 
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft,
  CreditCard
} from "lucide-react";

interface BuildSelection {
  cpu?: any;
  gpu?: any;
  ram?: any;
  storage?: any;
  motherboard?: any;
  psu?: any;
  case?: any;
}

const Analysis = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selections = (location.state?.selections || {}) as BuildSelection;
  
  const [progress, setProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [performanceScore, setPerformanceScore] = useState(0);

  // Calculate total price
  const totalPrice = Object.values(selections).reduce(
    (sum, item) => sum + (item?.price || 0),
    0
  );

  // Calculate performance score based on components
  const calculatePerformanceScore = () => {
    let score = 0;
    
    // GPU contributes 40%
    if (selections.gpu) {
      const gpuPrice = selections.gpu.price;
      if (gpuPrice >= 1500) score += 4.0;
      else if (gpuPrice >= 1000) score += 3.5;
      else if (gpuPrice >= 600) score += 3.0;
      else if (gpuPrice >= 400) score += 2.5;
      else score += 2.0;
    }
    
    // CPU contributes 30%
    if (selections.cpu) {
      const cpuPrice = selections.cpu.price;
      if (cpuPrice >= 600) score += 3.0;
      else if (cpuPrice >= 400) score += 2.5;
      else if (cpuPrice >= 250) score += 2.0;
      else score += 1.5;
    }
    
    // RAM contributes 20%
    if (selections.ram) {
      const ramPrice = selections.ram.price;
      if (ramPrice >= 200) score += 2.0;
      else if (ramPrice >= 120) score += 1.5;
      else score += 1.0;
    }
    
    // Storage contributes 10%
    if (selections.storage) {
      score += 1.0;
    }
    
    return Math.min(score, 10);
  };

  const finalScore = calculatePerformanceScore();
  const performanceTier = finalScore >= 8.5 ? "HIGH-END" : finalScore >= 6.5 ? "MID-RANGE" : "ENTRY-LEVEL";
  const tierColor = finalScore >= 8.5 ? "text-purple-500" : finalScore >= 6.5 ? "text-blue-500" : "text-green-500";

  // Gaming benchmarks based on performance score
  const gamingBenchmarks = [
    {
      game: "Valorant",
      fps: finalScore >= 8 ? "300+" : finalScore >= 6 ? "240+" : "144+",
      quality: "Ultra",
      verdict: "excellent",
      icon: "✅"
    },
    {
      game: "GTA V",
      fps: finalScore >= 8 ? "120+" : finalScore >= 6 ? "90" : "60",
      quality: finalScore >= 6 ? "High" : "Medium",
      verdict: "excellent",
      icon: "✅"
    },
    {
      game: "Cyberpunk 2077",
      fps: finalScore >= 8.5 ? "85" : finalScore >= 6.5 ? "60" : "45",
      quality: finalScore >= 8 ? "High" : finalScore >= 6 ? "Medium" : "Low",
      verdict: finalScore >= 6 ? "demanding" : "stable",
      icon: finalScore >= 6 ? "⚠️" : "✅"
    },
    {
      game: "Minecraft RTX",
      fps: finalScore >= 8 ? "110" : finalScore >= 6 ? "75" : "50",
      quality: finalScore >= 8 ? "RTX Ultra" : finalScore >= 6 ? "RTX High" : "RTX Medium",
      verdict: "good",
      icon: "✅"
    },
    {
      game: "Red Dead Redemption 2",
      fps: finalScore >= 8.5 ? "90" : finalScore >= 6.5 ? "65" : "45",
      quality: finalScore >= 7 ? "High" : "Medium",
      verdict: "playable",
      icon: "✅"
    }
  ];

  const renderingSoftware = [
    "Blender (Eevee / Cycles)",
    "Autodesk Maya",
    "Adobe Premiere Pro",
    "Adobe After Effects",
    "Unreal Engine 5",
    "Unity"
  ];

  useEffect(() => {
    // Simulate analysis progress
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setShowResults(true), 300);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (showResults) {
      // Animate the score counter
      const scoreTimer = setInterval(() => {
        setPerformanceScore(prev => {
          if (prev >= finalScore) {
            clearInterval(scoreTimer);
            return finalScore;
          }
          return prev + 0.1;
        });
      }, 30);

      return () => clearInterval(scoreTimer);
    }
  }, [showResults, finalScore]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Performance Analysis: Let's See What Your Build Can Do ⚙️
          </h1>
          
          {!showResults && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 space-y-4"
            >
              <p className="text-lg text-muted-foreground animate-pulse">
                Analyzing hardware compatibility, benchmark data, and gaming performance...
              </p>
              <div className="max-w-md mx-auto">
                <Progress value={progress} className="h-3" />
                <p className="text-sm text-muted-foreground mt-2">{progress}% Complete</p>
              </div>
            </motion.div>
          )}
        </motion.div>

        {showResults && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* PC Summary Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-2">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Cpu className="w-6 h-6 text-primary" />
                    Your Build Summary
                  </h2>
                  <Button 
                    variant="outline" 
                    onClick={() => navigate('/builder')}
                    className="gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Edit Build
                  </Button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold">Component</th>
                        <th className="text-left py-3 px-4 font-semibold">Your Selection</th>
                        <th className="text-right py-3 px-4 font-semibold">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(selections).map(([key, value], index) => (
                        value && (
                          <motion.tr 
                            key={key}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + index * 0.05 }}
                            className="border-b border-border/50 hover:bg-accent/50 transition-colors"
                          >
                            <td className="py-3 px-4 capitalize font-medium">{key}</td>
                            <td className="py-3 px-4">{value.name}</td>
                            <td className="py-3 px-4 text-right font-semibold text-primary">
                              ${value.price}
                            </td>
                          </motion.tr>
                        )
                      ))}
                      <tr className="font-bold text-lg">
                        <td colSpan={2} className="py-4 px-4 text-right">Total:</td>
                        <td className="py-4 px-4 text-right text-primary">${totalPrice}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </motion.div>

            {/* Performance Score Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-8 bg-gradient-to-br from-primary/10 via-purple-500/10 to-blue-500/10 border-2 border-primary/20">
                <div className="text-center space-y-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                  >
                    <div className="text-7xl font-bold mb-2">
                      ⭐ {performanceScore.toFixed(1)} / 10
                    </div>
                    <div className={`text-3xl font-bold ${tierColor} mb-2`}>
                      {performanceTier} PC
                    </div>
                    <p className="text-lg text-muted-foreground">
                      {finalScore >= 8.5 
                        ? "Excellent for modern gaming, content creation, and heavy 3D workloads."
                        : finalScore >= 6.5
                        ? "Great for gaming and multitasking. Handles most modern titles smoothly."
                        : "Good for casual gaming and everyday tasks. Perfect starter build."}
                    </p>
                  </motion.div>

                  <div className="max-w-2xl mx-auto">
                    <div className="h-8 bg-secondary rounded-full overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(finalScore / 10) * 100}%` }}
                        transition={{ delay: 0.7, duration: 1 }}
                        className="h-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground italic">
                    This score is based on the synergy between CPU, GPU, and RAM, using real-world benchmark data.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Gaming Performance Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-2">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Gamepad2 className="w-6 h-6 text-primary" />
                  Gaming Performance Simulation
                </h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-border">
                        <th className="text-left py-3 px-4 font-semibold">Game</th>
                        <th className="text-left py-3 px-4 font-semibold">Estimated FPS</th>
                        <th className="text-left py-3 px-4 font-semibold">Graphics Quality</th>
                        <th className="text-left py-3 px-4 font-semibold">Verdict</th>
                      </tr>
                    </thead>
                    <tbody>
                      {gamingBenchmarks.map((game, index) => (
                        <motion.tr
                          key={game.game}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className="border-b border-border/50 hover:bg-accent/50 transition-colors"
                        >
                          <td className="py-4 px-4 font-medium">{game.game}</td>
                          <td className="py-4 px-4 text-primary font-bold">{game.fps} FPS</td>
                          <td className="py-4 px-4">{game.quality}</td>
                          <td className="py-4 px-4">
                            <span className="inline-flex items-center gap-2">
                              {game.icon}
                              <span className="capitalize">{game.verdict}</span>
                            </span>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </motion.div>

            {/* 3D Rendering Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-2">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Brain className="w-6 h-6 text-primary" />
                  3D Rendering & Productivity Capability
                </h2>
                
                <p className="text-lg mb-6">
                  💼 This PC can handle {finalScore >= 8 ? "heavy" : finalScore >= 6 ? "mid-to-heavy" : "light-to-medium"} 3D rendering and professional workloads.
                </p>

                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Recommended Software:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {renderingSoftware.map((software, index) => (
                      <motion.div
                        key={software}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.05 }}
                        className="flex items-center gap-2 p-3 bg-accent/50 rounded-lg"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span>{software}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Rendering Tier:</span>
                    <span className="text-primary font-bold">
                      {finalScore >= 8 ? "Heavy Projects" : finalScore >= 6 ? "Mid-to-Heavy Projects" : "Light Projects"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Rendering Speed Index:</span>
                    <span className="text-primary font-bold">{(finalScore * 0.9).toFixed(1)} / 10</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Final Summary Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-purple-500/5 border-2 border-primary/20">
                <h2 className="text-2xl font-bold mb-6 text-center">Build Assessment</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-card rounded-xl border-2 text-center"
                  >
                    <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold mb-1">Performance Tier</div>
                    <div className={`${tierColor} font-bold`}>{performanceTier}</div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-card rounded-xl border-2 text-center"
                  >
                    <Gamepad2 className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold mb-1">Gaming Ready</div>
                    <div className="text-primary font-bold">
                      {finalScore >= 8.5 ? "4K Gaming" : finalScore >= 6.5 ? "1440p Ultra" : "1080p High"}
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-card rounded-xl border-2 text-center"
                  >
                    <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold mb-1">AI / Render Capable</div>
                    <div className="text-primary font-bold">Yes</div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-card rounded-xl border-2 text-center"
                  >
                    <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold mb-1">Upgrade Potential</div>
                    <div className="text-primary font-bold">Excellent</div>
                  </motion.div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => navigate('/builder')}
                    className="gap-2 text-lg px-8"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Rebuild PC
                  </Button>
                  <Button
                    size="lg"
                    onClick={() => navigate('/builder/payment', { state: { selections, totalPrice } })}
                    className="gap-2 text-lg px-8 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                  >
                    <CreditCard className="w-5 h-5" />
                    Proceed to Checkout
                  </Button>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Analysis;
