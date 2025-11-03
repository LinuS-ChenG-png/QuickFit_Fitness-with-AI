export type WorkoutFrequency = "1-2 times" | "4-5 times" | "5+ times";

export type FitnessGoal = "hypertrophy" | "strength" | "general";

export type MuscleGroup = 
  | "biceps" | "forearms" | "upperChest" | "lowerChest" | "traps" | "abs" | "quads"
  | "upperBack" | "midBack" | "lowerBack" | "lats" | "glutes" | "hamstrings" | "calves";

export type EquipmentType = "home" | "gym";

export interface Exercise {
  id: string;
  name: string;
  muscleGroup: MuscleGroup;
  equipment: EquipmentType[];
  description: string;
  tips: {
    hypertrophy?: string;
    strength?: string;
    general?: string;
  };
}

export interface WorkoutSession {
  id: string;
  date: Date;
  muscleGroups: MuscleGroup[];
  exercises: Exercise[];
  completed: boolean;
}

export interface UserPreferences {
  frequency: WorkoutFrequency;
  hasIrregularSchedule: boolean;
  goals: FitnessGoal[];
  setupComplete: boolean;
}
