import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { WorkoutFrequency } from "@/types/workout";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { UserMenu } from "@/components/UserMenu";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-fitness.jpg";
import { Dumbbell } from "lucide-react";

const Frequency = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const [frequency, setFrequency] = useState<WorkoutFrequency | null>(null);
  const [hasIrregularSchedule, setHasIrregularSchedule] = useState(false);
  const [loading, setLoading] = useState(false);

  // Load existing preferences
  useEffect(() => {
    const loadPreferences = async () => {
      if (!user) return;

      const { data } = await supabase
        .from('user_preferences')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (data) {
        if (data.frequency) setFrequency(data.frequency as WorkoutFrequency);
        setHasIrregularSchedule(data.has_irregular_schedule || false);
      }
    };

    loadPreferences();
  }, [user]);

  const frequencies: { value: WorkoutFrequency; label: string }[] = [
    { value: "1-2 times", label: "1-2 times per week" },
    { value: "4-5 times", label: "4-5 times per week" },
    { value: "5+ times", label: "5+ times per week" },
  ];

  const handleContinue = async () => {
    if (!frequency || !user) return;
    
    setLoading(true);

    const { error } = await supabase
      .from('user_preferences')
      .upsert({
        user_id: user.id,
        frequency,
        has_irregular_schedule: hasIrregularSchedule,
      }, {
        onConflict: 'user_id'
      });

    setLoading(false);

    if (error) {
      toast({
        title: "Error saving preferences",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

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
        <div className="absolute top-4 right-4">
          <UserMenu />
        </div>
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
          disabled={!frequency || loading}
        >
          {loading ? "Saving..." : "Continue"}
        </Button>
      </div>
    </div>
  );
};

export default Frequency;
