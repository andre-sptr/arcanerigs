import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Builder from "./pages/Builder";
import Analysis from "./pages/Analysis";
import BuilderPayment from "./pages/BuilderPayment";
import BuilderThankYou from "./pages/BuilderThankYou";
import Checkout from "./pages/Checkout";
import Thanks from "./pages/Thanks";
import Stores from "./pages/Stores";
import Team from "./pages/Team";
import Support from "./pages/Support";
import Testimonials from "./pages/Testimonials";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 pt-16">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/builder/payment" element={<BuilderPayment />} />
          <Route path="/builder/thankyou" element={<BuilderThankYou />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/team" element={<Team />} />
          <Route path="/support" element={<Support />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
