import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Frequency from "./pages/Frequency";
import Goals from "./pages/Goals";
import MuscleSelection from "./pages/MuscleSelection";
import Equipment from "./pages/Equipment";
import WorkoutPlan from "./pages/WorkoutPlan";
import WorkoutSession from "./pages/WorkoutSession";
import WorkoutComplete from "./pages/WorkoutComplete";
import History from "./pages/History";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frequency />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/muscles" element={<MuscleSelection />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/workout-plan" element={<WorkoutPlan />} />
          <Route path="/workout-session" element={<WorkoutSession />} />
          <Route path="/workout-complete" element={<WorkoutComplete />} />
          <Route path="/history" element={<History />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
