import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FitnessGoal } from "@/types/workout";
import { ArrowLeft, Zap, Dumbbell, Heart } from "lucide-react";

const Goals = () => {
  const navigate = useNavigate();
  const [selectedGoals, setSelectedGoals] = useState<FitnessGoal[]>([]);

  const goals: { value: FitnessGoal; label: string; description: string; icon: typeof Zap }[] = [
    {
      value: "hypertrophy",
      label: "Hypertrophy (Muscle Growth)",
      description: "Focus on building muscle size and definition",
      icon: Dumbbell,
    },
    {
      value: "strength",
      label: "Strength Building",
      description: "Increase your maximum power and lifting capacity",
      icon: Zap,
    },
    {
      value: "general",
      label: "General Fitness",
      description: "Maintain overall health and conditioning",
      icon: Heart,
    },
  ];

  const toggleGoal = (goal: FitnessGoal) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter((g) => g !== goal));
    } else if (selectedGoals.length < 2) {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  const handleContinue = () => {
    if (selectedGoals.length === 0) return;
    
    const stored = localStorage.getItem("workoutPreferences");
    const preferences = stored ? JSON.parse(stored) : {};
    preferences.goals = selectedGoals;
    localStorage.setItem("workoutPreferences", JSON.stringify(preferences));
    navigate("/muscles");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-2xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">What's your main fitness goal?</h2>
          <p className="text-muted-foreground text-lg">
            Select up to 2 goals that matter most to you
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            {selectedGoals.length}/2 selected
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {goals.map((goal) => {
            const Icon = goal.icon;
            const isSelected = selectedGoals.includes(goal.value);
            const isDisabled = !isSelected && selectedGoals.length >= 2;

            return (
              <Card
                key={goal.value}
                className={`p-6 cursor-pointer transition-all ${
                  isDisabled ? "opacity-50 cursor-not-allowed" : "hover:shadow-lg"
                } ${
                  isSelected
                    ? "border-primary border-2 bg-primary/5"
                    : "border-border"
                }`}
                onClick={() => !isDisabled && toggleGoal(goal.value)}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`p-3 rounded-lg ${
                      isSelected ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{goal.label}</h3>
                    <p className="text-sm text-muted-foreground">
                      {goal.description}
                    </p>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      isSelected
                        ? "border-primary bg-primary"
                        : "border-muted-foreground"
                    }`}
                  >
                    {isSelected && (
                      <div className="w-3 h-3 rounded-full bg-primary-foreground" />
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Button
          variant="hero"
          size="lg"
          className="w-full"
          onClick={handleContinue}
          disabled={selectedGoals.length === 0}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Goals;
