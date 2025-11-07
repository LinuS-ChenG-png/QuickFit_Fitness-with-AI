import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Exercise, FitnessGoal, MuscleGroup, EquipmentType } from "@/types/workout";
import { generateWorkout } from "@/lib/exercises";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, Play } from "lucide-react";
import { toast } from "sonner";

const WorkoutPlan = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [selectedExercises, setSelectedExercises] = useState<Set<string>>(new Set());
  const [goals, setGoals] = useState<FitnessGoal[]>([]);

  useEffect(() => {
    const loadPreferencesAndGenerateWorkout = async () => {
      if (!user) {
        navigate("/");
        return;
      }

      const { data } = await supabase
        .from('user_preferences')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (!data || !data.selected_muscles || !data.equipment) {
        navigate("/");
        return;
      }

      setGoals((data.goals || []) as FitnessGoal[]);
      const workout = generateWorkout(
        data.selected_muscles as MuscleGroup[],
        data.equipment as EquipmentType,
        data.goals as FitnessGoal[]
      );
      setExercises(workout);

      // Auto-select first exercise of each muscle group
      const autoSelected = new Set<string>();
      const seenMuscles = new Set<string>();
      workout.forEach((ex) => {
        if (!seenMuscles.has(ex.muscleGroup)) {
          autoSelected.add(ex.id);
          seenMuscles.add(ex.muscleGroup);
        }
      });
      setSelectedExercises(autoSelected);
    };

    loadPreferencesAndGenerateWorkout();
  }, [navigate, user]);

  const toggleExercise = (id: string) => {
    const newSelected = new Set(selectedExercises);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedExercises(newSelected);
  };

  const startWorkout = () => {
    if (selectedExercises.size === 0) {
      toast.error("Please select at least one exercise");
      return;
    }

    const selectedWorkout = exercises.filter((ex) => selectedExercises.has(ex.id));
    localStorage.setItem("currentWorkout", JSON.stringify(selectedWorkout));
    localStorage.setItem("workoutGoals", JSON.stringify(goals));
    navigate("/workout-session");
  };

  // Group exercises by muscle group
  const exercisesByMuscle = exercises.reduce((acc, exercise) => {
    if (!acc[exercise.muscleGroup]) {
      acc[exercise.muscleGroup] = [];
    }
    acc[exercise.muscleGroup].push(exercise);
    return acc;
  }, {} as Record<string, Exercise[]>);

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/muscles")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Change Muscles
        </Button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">Your Workout Plan</h2>
          <p className="text-muted-foreground text-lg">
            Select exercises you want to include in today's workout
          </p>
          <p className="text-sm text-accent font-medium mt-2">
            {selectedExercises.size} exercise{selectedExercises.size !== 1 ? "s" : ""} selected
          </p>
        </div>

        <div className="space-y-6 mb-8">
          {Object.entries(exercisesByMuscle).map(([muscle, muscleExercises]) => (
            <div key={muscle}>
              <h3 className="text-xl font-semibold mb-3 capitalize">
                {muscle.replace(/([A-Z])/g, " $1").trim()}
              </h3>
              <div className="space-y-3">
                {muscleExercises.map((exercise) => {
                  const isSelected = selectedExercises.has(exercise.id);
                  const tip = goals[0] ? exercise.tips[goals[0]] : exercise.tips.general;

                  return (
                    <Card
                      key={exercise.id}
                      className={`p-4 transition-all ${
                        isSelected ? "border-primary border-2 bg-primary/5" : ""
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id={exercise.id}
                          checked={isSelected}
                          onCheckedChange={() => toggleExercise(exercise.id)}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <label
                            htmlFor={exercise.id}
                            className="font-semibold text-lg cursor-pointer block mb-2"
                          >
                            {exercise.name}
                          </label>
                          <p className="text-sm text-muted-foreground mb-2">
                            {exercise.description}
                          </p>
                          {tip && (
                            <div className={`mt-3 p-3 rounded-lg border-2 ${
                              goals[0] === "hypertrophy" 
                                ? "bg-primary/20 border-primary/40" 
                                : goals[0] === "strength"
                                ? "bg-accent/20 border-accent/40"
                                : "bg-secondary/20 border-secondary/40"
                            }`}>
                              <p className={`text-sm font-semibold ${
                                goals[0] === "hypertrophy"
                                  ? "text-primary"
                                  : goals[0] === "strength"
                                  ? "text-accent"
                                  : "text-foreground"
                              }`}>
                                💡 {goals[0] ? `${goals[0].charAt(0).toUpperCase() + goals[0].slice(1)} Tip:` : "Tip:"} {tip}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <Button
          variant="hero"
          size="lg"
          className="w-full"
          onClick={startWorkout}
          disabled={selectedExercises.size === 0}
        >
          <Play className="mr-2 h-5 w-5" />
          Start My Workout!
        </Button>
      </div>
    </div>
  );
};

export default WorkoutPlan;
