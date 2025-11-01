import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { WorkoutFrequency } from "@/types/workout";
import heroImage from "@/assets/hero-fitness.jpg";
import { Dumbbell } from "lucide-react";

const Frequency = () => {
  const navigate = useNavigate();
  const [frequency, setFrequency] = useState<WorkoutFrequency | null>(null);
  const [hasIrregularSchedule, setHasIrregularSchedule] = useState(false);

  const frequencies: { value: WorkoutFrequency; label: string }[] = [
    { value: "2-3 times", label: "2-3 times per week" },
    { value: "3-4 times", label: "3-4 times per week" },
    { value: "4-5 times", label: "4-5 times per week" },
    { value: "5+ times", label: "5+ times per week" },
  ];

  const handleContinue = () => {
    if (!frequency) return;
    
    const preferences = {
      frequency,
      hasIrregularSchedule,
    };
    localStorage.setItem("workoutPreferences", JSON.stringify(preferences));
    navigate("/goals");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={heroImage}
          alt="Fitness motivation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-background" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-primary-foreground">
            <Dumbbell className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-2">QuickFit</h1>
            <p className="text-lg">Your perfect workout, every time</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">Let's get started!</h2>
          <p className="text-muted-foreground text-lg">
            How often do you typically workout?
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {frequencies.map((freq) => (
            <Card
              key={freq.value}
              className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
                frequency === freq.value
                  ? "border-primary border-2 bg-primary/5"
                  : "border-border"
              }`}
              onClick={() => setFrequency(freq.value)}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium">{freq.label}</span>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    frequency === freq.value
                      ? "border-primary bg-primary"
                      : "border-muted-foreground"
                  }`}
                >
                  {frequency === freq.value && (
                    <div className="w-3 h-3 rounded-full bg-primary-foreground" />
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 mb-8 border-muted">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="irregular"
              checked={hasIrregularSchedule}
              onCheckedChange={(checked) =>
                setHasIrregularSchedule(checked as boolean)
              }
              className="mt-1"
            />
            <label
              htmlFor="irregular"
              className="text-sm leading-relaxed cursor-pointer"
            >
              I have an irregular workout schedule due to work, school, or other
              commitments
            </label>
          </div>
        </Card>

        <Button
          variant="hero"
          size="lg"
          className="w-full"
          onClick={handleContinue}
          disabled={!frequency}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Frequency;
