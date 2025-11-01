import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Exercise, FitnessGoal } from "@/types/workout";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import confetti from "canvas-confetti";

const WorkoutSession = () => {
  const navigate = useNavigate();
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [goals, setGoals] = useState<FitnessGoal[]>([]);
  const [completedExercises, setCompletedExercises] = useState<Set<number>>(new Set());

  useEffect(() => {
    const workoutData = localStorage.getItem("currentWorkout");
    const goalsData = localStorage.getItem("workoutGoals");
    
    if (!workoutData) {
      navigate("/workout-plan");
      return;
    }

    setExercises(JSON.parse(workoutData));
    if (goalsData) {
      setGoals(JSON.parse(goalsData));
    }
  }, [navigate]);

  const currentExercise = exercises[currentIndex];
  const progress = exercises.length > 0 ? ((completedExercises.size) / exercises.length) * 100 : 0;

  const handleNext = () => {
    setCompletedExercises(prev => new Set(prev).add(currentIndex));
    
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(currentIndex + 1);
      toast.success("Great job! Moving to next exercise", {
        icon: "💪",
      });
    } else {
      // Workout complete!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      
      // Save workout history
      const history = JSON.parse(localStorage.getItem("workoutHistory") || "[]");
      history.unshift({
        id: Date.now().toString(),
        date: new Date().toISOString(),
        exercises: exercises.length,
        duration: "N/A", // Could track this with a timer
      });
      localStorage.setItem("workoutHistory", JSON.stringify(history.slice(0, 20))); // Keep last 20
      
      toast.success("Workout Complete! 🎉", {
        description: "Amazing work today!",
      });
      
      setTimeout(() => {
        navigate("/workout-complete");
      }, 2000);
    }
  };

  if (!currentExercise) {
    return null;
  }

  const tip = goals[0] ? currentExercise.tips[goals[0]] : currentExercise.tips.general;

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-3xl mx-auto px-4 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">
              Exercise {completedExercises.size + 1} of {exercises.length}
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <Progress value={progress} className="h-3" />
        </div>

        {/* Exercise Card */}
        <Card className="p-8 mb-6 bg-gradient-to-br from-card to-card/50">
          <div className="mb-6">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {currentExercise.muscleGroup.replace(/([A-Z])/g, " $1").trim()}
            </div>
            <h2 className="text-3xl font-bold mb-4">{currentExercise.name}</h2>
            <p className="text-lg text-muted-foreground mb-6">
              {currentExercise.description}
            </p>
          </div>

          {/* Exercise Tips */}
          {tip && (
            <div className="mb-6 p-6 bg-accent/10 rounded-lg border-2 border-accent/20">
              <h3 className="font-semibold text-lg mb-3 text-accent-foreground flex items-center">
                <span className="mr-2">💡</span>
                {goals[0] ? `${goals[0].charAt(0).toUpperCase() + goals[0].slice(1)} Focus` : "Training Tip"}
              </h3>
              <p className="text-sm leading-relaxed">{tip}</p>
            </div>
          )}

          {/* Completed Exercises List */}
          {completedExercises.size > 0 && (
            <div className="mb-6 p-4 bg-muted/50 rounded-lg">
              <h4 className="text-sm font-semibold mb-3 flex items-center">
                <CheckCircle2 className="w-4 h-4 mr-2 text-accent" />
                Completed Exercises
              </h4>
              <div className="space-y-2">
                {Array.from(completedExercises).map((idx) => (
                  <div key={idx} className="text-sm text-muted-foreground flex items-center">
                    <CheckCircle2 className="w-3 h-3 mr-2 text-accent" />
                    {exercises[idx].name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            variant="hero"
            size="lg"
            className="w-full"
            onClick={handleNext}
          >
            {currentIndex < exercises.length - 1 ? (
              <>
                Next Exercise
                <ChevronRight className="ml-2 h-5 w-5" />
              </>
            ) : (
              <>
                Complete Workout
                <CheckCircle2 className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="w-full"
            onClick={() => {
              if (window.confirm("Are you sure you want to exit? Your progress will be lost.")) {
                navigate("/muscles");
              }
            }}
          >
            Exit Workout
          </Button>
        </div>

        {/* Motivational Message */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground italic">
            {completedExercises.size === 0 && "Let's crush this workout! 💪"}
            {completedExercises.size > 0 && completedExercises.size < exercises.length && "You're doing amazing! Keep it up! 🔥"}
            {completedExercises.size === exercises.length - 1 && "Almost there! One more to go! 🎯"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkoutSession;
