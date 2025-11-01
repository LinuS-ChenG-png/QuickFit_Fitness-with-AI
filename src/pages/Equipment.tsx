import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EquipmentType } from "@/types/workout";
import { ArrowLeft, Home, Building2 } from "lucide-react";

const Equipment = () => {
  const navigate = useNavigate();
  const [equipment, setEquipment] = useState<EquipmentType | null>(null);

  const options: { value: EquipmentType; label: string; description: string; icon: typeof Home }[] = [
    {
      value: "home",
      label: "Home Workout",
      description: "Bodyweight exercises, no equipment needed",
      icon: Home,
    },
    {
      value: "gym",
      label: "At the Gym",
      description: "Full access to gym equipment",
      icon: Building2,
    },
  ];

  const handleContinue = () => {
    if (!equipment) return;
    
    const stored = localStorage.getItem("workoutPreferences");
    const preferences = stored ? JSON.parse(stored) : {};
    preferences.equipment = equipment;
    preferences.setupComplete = true;
    localStorage.setItem("workoutPreferences", JSON.stringify(preferences));
    navigate("/workout-plan");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-2xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/muscles")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">Where are you working out?</h2>
          <p className="text-muted-foreground text-lg">
            We'll customize your exercises based on available equipment
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {options.map((option) => {
            const Icon = option.icon;
            const isSelected = equipment === option.value;

            return (
              <Card
                key={option.value}
                className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
                  isSelected
                    ? "border-primary border-2 bg-primary/5"
                    : "border-border"
                }`}
                onClick={() => setEquipment(option.value)}
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
                    <h3 className="text-lg font-semibold mb-1">{option.label}</h3>
                    <p className="text-sm text-muted-foreground">
                      {option.description}
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
          disabled={!equipment}
        >
          Generate My Workout
        </Button>
      </div>
    </div>
  );
};

export default Equipment;
