import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Frequency from "./pages/Frequency";
import Goals from "./pages/Goals";
import MuscleSelection from "./pages/MuscleSelection";
import Equipment from "./pages/Equipment";
import WorkoutPlan from "./pages/WorkoutPlan";
import WorkoutSession from "./pages/WorkoutSession";
import WorkoutComplete from "./pages/WorkoutComplete";
import History from "./pages/History";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={<ProtectedRoute><Frequency /></ProtectedRoute>} />
            <Route path="/goals" element={<ProtectedRoute><Goals /></ProtectedRoute>} />
            <Route path="/muscles" element={<ProtectedRoute><MuscleSelection /></ProtectedRoute>} />
            <Route path="/equipment" element={<ProtectedRoute><Equipment /></ProtectedRoute>} />
            <Route path="/workout-plan" element={<ProtectedRoute><WorkoutPlan /></ProtectedRoute>} />
            <Route path="/workout-session" element={<ProtectedRoute><WorkoutSession /></ProtectedRoute>} />
            <Route path="/workout-complete" element={<ProtectedRoute><WorkoutComplete /></ProtectedRoute>} />
            <Route path="/history" element={<ProtectedRoute><History /></ProtectedRoute>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
