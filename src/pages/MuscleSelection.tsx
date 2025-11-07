import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MuscleGroup } from "@/types/workout";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import MuscleAnatomyDiagram from "@/components/MuscleAnatomyDiagram";
import { ArrowLeft, RotateCw } from "lucide-react";

const MuscleSelection = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const [view, setView] = useState<"front" | "back">("front");
  const [selectedMuscles, setSelectedMuscles] = useState<MuscleGroup[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadPreferences = async () => {
      if (!user) return;

      const { data } = await supabase
        .from('user_preferences')
        .select('selected_muscles')
        .eq('user_id', user.id)
        .maybeSingle();

      if (data?.selected_muscles) {
        setSelectedMuscles(data.selected_muscles as MuscleGroup[]);
      }
    };

    loadPreferences();
  }, [user]);

  const toggleMuscle = (muscle: MuscleGroup) => {
    if (selectedMuscles.includes(muscle)) {
      setSelectedMuscles(selectedMuscles.filter((m) => m !== muscle));
    } else {
      setSelectedMuscles([...selectedMuscles, muscle]);
    }
  };

  const handleContinue = async () => {
    if (selectedMuscles.length === 0 || !user) return;
    
    setLoading(true);

    const { error } = await supabase
      .from('user_preferences')
      .upsert({
        user_id: user.id,
        selected_muscles: selectedMuscles,
      }, {
        onConflict: 'user_id'
      });

    setLoading(false);

    if (error) {
      toast({
        title: "Error saving muscles",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    navigate("/equipment");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-3xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/goals")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-3">Select your target muscles</h2>
          <p className="text-muted-foreground text-lg mb-4">
            Choose the muscle groups you want to train today
          </p>
          <div className="inline-block px-4 py-2 bg-primary/20 rounded-full border-2 border-primary">
            <p className="text-sm text-primary font-bold">
              {selectedMuscles.length} muscle{selectedMuscles.length !== 1 ? "s" : ""} selected
            </p>
          </div>
        </div>

        <Card className="p-6 mb-6">
          <div className="flex justify-center mb-6">
            <Button
              variant={view === "front" ? "default" : "outline"}
              onClick={() => setView("front")}
              className="mr-2"
            >
              Front View
            </Button>
            <Button
              variant={view === "back" ? "default" : "outline"}
              onClick={() => setView("back")}
              className="ml-2"
            >
              <RotateCw className="mr-2 h-4 w-4" />
              Back View
            </Button>
          </div>

          <MuscleAnatomyDiagram
            view={view}
            selectedMuscles={selectedMuscles}
            onMuscleClick={toggleMuscle}
          />

          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Tip:</strong> Click on muscle groups to select them. You can switch between front and back views.
            </p>
          </div>
        </Card>

        {selectedMuscles.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Selected muscles:</h3>
            <div className="flex flex-wrap gap-2">
              {selectedMuscles.map((muscle) => (
                <Button
                  key={muscle}
                  variant="secondary"
                  size="sm"
                  onClick={() => toggleMuscle(muscle)}
                  className="capitalize"
                >
                  {muscle.replace(/([A-Z])/g, " $1").trim()} ×
                </Button>
              ))}
            </div>
          </div>
        )}

        <Button
          variant="hero"
          size="lg"
          className="w-full"
          onClick={handleContinue}
          disabled={selectedMuscles.length === 0 || loading}
        >
          {loading ? "Saving..." : "Continue to Equipment"}
        </Button>
      </div>
    </div>
  );
};

export default MuscleSelection;
