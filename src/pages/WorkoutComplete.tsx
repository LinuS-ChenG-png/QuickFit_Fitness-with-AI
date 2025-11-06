import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, History, Home } from "lucide-react";
import heroImage from "@/assets/hero-fitness.jpg";
import flexImage from "@/assets/workout-complete-flex.jpg";

const WorkoutComplete = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="relative inline-block mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow-lg animate-scale-in">
              <img 
                src={flexImage} 
                alt="Flexing muscles" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-bounce">
              <Trophy className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">Workout Complete!</h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Amazing work today! You crushed it! 💪
          </p>
        </div>

        <Card className="p-6 mb-6 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative z-10">
            <h3 className="text-lg font-semibold mb-4">Your Progress</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <span className="text-sm font-medium">Workout Duration</span>
                <span className="text-sm text-muted-foreground">Just now</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <span className="text-sm font-medium">Status</span>
                <span className="text-sm text-accent font-semibold">Completed ✓</span>
              </div>
            </div>
          </div>
        </Card>

        <div className="space-y-3">
          <Button
            variant="hero"
            size="lg"
            className="w-full"
            onClick={() => navigate("/muscles")}
          >
            <Home className="mr-2 h-5 w-5" />
            Start New Workout
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full"
            onClick={() => navigate("/history")}
          >
            <History className="mr-2 h-5 w-5" />
            View History
          </Button>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
          <p className="text-sm text-center leading-relaxed">
            <strong>Consistency is key!</strong> Keep showing up, and you'll see amazing results.
            See you next workout! 🎯
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkoutComplete;
