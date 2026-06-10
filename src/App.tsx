import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Loader from "./components/Loader";
import BottomNav from "./components/BottomNav";
import PageTransition from "./components/PageTransition";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BlogPage from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CreativeCorner from "./pages/CreativeCorner";
import Photography from "./pages/Photography";
import Writing from "./pages/Writing";
import Experiments from "./pages/Experiments";
import SignatureBook from "./pages/SignatureBook";
import Links from "./pages/Links";

const queryClient = new QueryClient();

const wrap = (el: React.ReactNode) => <PageTransition>{el}</PageTransition>;

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={wrap(<Index />)} />
        <Route path="/projects" element={wrap(<Projects />)} />
        <Route path="/projects/:id" element={wrap(<ProjectDetail />)} />
        <Route path="/about" element={wrap(<About />)} />
        <Route path="/blog" element={wrap(<BlogPage />)} />
        <Route path="/blog/:id" element={wrap(<BlogPost />)} />
        <Route path="/contact" element={wrap(<Contact />)} />
        <Route path="/creative" element={wrap(<CreativeCorner />)} />
        <Route path="/creative/photography" element={wrap(<Photography />)} />
        <Route path="/creative/writing" element={wrap(<Writing />)} />
        <Route path="/creative/experiments" element={wrap(<Experiments />)} />
        <Route path="/signature-book" element={wrap(<SignatureBook />)} />
        <Route path="/links" element={wrap(<Links />)} />
        <Route path="*" element={wrap(<NotFound />)} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Loader />
      <BrowserRouter>
        <AnimatedRoutes />
        <BottomNav />
        <div className="md:hidden h-20" aria-hidden />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
