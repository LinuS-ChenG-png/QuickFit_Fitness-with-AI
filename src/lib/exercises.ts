import { Exercise, MuscleGroup, EquipmentType, FitnessGoal } from "@/types/workout";

export const exerciseDatabase: Exercise[] = [
  // Biceps
  {
    id: "bicep-curl",
    name: "Dumbbell Bicep Curl",
    muscleGroup: "biceps",
    equipment: ["gym"],
    description: "Stand with dumbbells at your sides, palms facing forward, curl weights up while keeping elbows stationary.",
    tips: {
      hypertrophy: "Use moderate weight, 8-12 reps, focus on the squeeze at the top for 2 seconds",
      strength: "Use heavier weight, 4-6 reps, controlled movement with full range of motion",
      general: "Use comfortable weight, 10-15 reps, focus on slow eccentric"
    }
  },
  {
    id: "hammer-curl",
    name: "Hammer Curl",
    muscleGroup: "biceps",
    equipment: ["gym"],
    description: "Hold dumbbells with neutral grip (palms facing each other), curl up alternating arms.",
    tips: {
      hypertrophy: "Slow eccentric phase (3-4 seconds down), 8-12 reps per arm",
      strength: "Heavier weight, both arms together, 5-7 reps",
      general: "Controlled tempo, 10-12 reps per arm"
    }
  },
  {
    id: "resistance-band-curl",
    name: "Resistance Band Curl",
    muscleGroup: "biceps",
    equipment: ["home"],
    description: "Stand on resistance band, curl handles up while keeping elbows locked at sides.",
    tips: {
      hypertrophy: "Use thick band for resistance, 12-15 reps with peak contraction",
      strength: "Double up bands for resistance, 8-10 reps",
      general: "Medium resistance, 12-15 reps with smooth motion"
    }
  },
  
  // Forearms
  {
    id: "wrist-curl",
    name: "Wrist Curl",
    muscleGroup: "forearms",
    equipment: ["gym"],
    description: "Rest forearms on bench, curl dumbbells up using only wrist movement.",
    tips: {
      hypertrophy: "Light to moderate weight, 15-20 reps, full range of motion",
      strength: "Moderate weight, 10-12 reps, hold at top",
      general: "Light weight, 15-20 reps, controlled movement"
    }
  },
  {
    id: "reverse-curl",
    name: "Reverse Curl",
    muscleGroup: "forearms",
    equipment: ["gym"],
    description: "Hold dumbbells with overhand grip, curl up focusing on forearm engagement.",
    tips: {
      hypertrophy: "Moderate weight, 10-15 reps, squeeze at top",
      strength: "Heavy weight, 6-8 reps",
      general: "Light to moderate weight, 12-15 reps"
    }
  },
  {
    id: "towel-grip",
    name: "Towel Grip Hold",
    muscleGroup: "forearms",
    equipment: ["home"],
    description: "Hang towel over pull-up bar or door, grip and hold for time.",
    tips: {
      hypertrophy: "45-60 second holds, 3-4 sets",
      strength: "Maximum grip hold until failure",
      general: "30-45 second comfortable holds"
    }
  },

  // Triceps
  {
    id: "tricep-dip",
    name: "Tricep Dip",
    muscleGroup: "triceps",
    equipment: ["gym", "home"],
    description: "Use parallel bars or bench, lower body by bending elbows, push back up focusing on triceps.",
    tips: {
      hypertrophy: "Full range of motion, 8-12 reps, add weight for progression",
      strength: "Heavy weight added, 4-6 reps, explosive push",
      general: "Bodyweight, 10-15 reps, controlled movement"
    }
  },
  {
    id: "cable-tricep-pressdown", 
    name: "Cable Tricep Pressdown",
    muscleGroup: "triceps",
    equipment: ["gym"], 
    description: "Using a rope attachment, set at maximum height, pull rope towards hips without moving elbows.",
    tips: {
      hypertrophy: "Focus on pulling down at 100%, slow controlled eccentric, 8-12 reps",
      strength: "Heavy weight added, 6-8 reps, slow controlled eccentric",
      general: "8-12 reps, ensure elbows are tucked in"
    }
  },
  {
    id: "overhead-extension",
    name: "Overhead Tricep Extension",
    muscleGroup: "triceps",
    equipment: ["gym"],
    description: "Hold dumbbell overhead with both hands, lower behind head, extend back up.",
    tips: {
      hypertrophy: "Moderate weight, 10-12 reps, full stretch at bottom",
      strength: "Heavy weight, 6-8 reps, controlled tempo",
      general: "Light to moderate weight, 12-15 reps"
    }
  },
  {
    id: "overhead-cable-tricep-extension",
    name: "Overhead Cable Tricep Extension",
    muscleGroup: "triceps",
    equipment: ["gym"],
    description: "Set cable at maximum height, use a rope attachment, face away and pull the rope away from the machine.",
    tips: {
      hypertrophy: "Moderate weight, 9-12 reps, keep elbows still, pull with triceps only, slow eccentric",
      strength: "Heavy weight, 8-10 reps, keep elbows still, controlled movement, lower weight if cannot control the weight",
      general: "Light to moderate weight, 12-15 reps, control the eccentric"
    }
  },
  {
    id: "diamond-pushup",
    name: "Diamond Push-up",
    muscleGroup: "triceps",
    equipment: ["home"],
    description: "Hands close together forming diamond shape, perform push-up focus on triceps.",
    tips: {
      hypertrophy: "Slow tempo, 10-15 reps, pause at bottom",
      strength: "Explosive push, 8-10 reps, can add weight on back",
      general: "Controlled pace, 12-15 reps"
    }
  },

  // Upper Chest
  {
    id: "incline-press",
    name: "Incline Dumbbell Press",
    muscleGroup: "upperChest",
    equipment: ["gym"],
    description: "Lie on incline bench (30-60°), press dumbbells up in a straight line, focus on pushing with chest.",
    tips: {
      hypertrophy: "Moderate weight, 8-12 reps, squeeze at top, slow descent",
      strength: "Heavy weight, 4-6 reps, explosive press",
      general: "Comfortable weight, 10-12 reps, full range"
    }
  },
  {
    id: "incline-pushup",
    name: "Incline Push-up",
    muscleGroup: "upperChest",
    equipment: ["home"],
    description: "Hands on elevated surface, perform push-up focusing on upper chest.",
    tips: {
      hypertrophy: "Slow tempo (3 seconds down), 12-15 reps, squeeze at top",
      strength: "Add weight on back, 8-10 reps",
      general: "Bodyweight, 15-20 reps, good form"
    }
  },
  {
    id: "cable-flies",
    name: "Cable Flies",
    muscleGroup: "upperChest",
    equipment: ["gym"],
    description: "Set two cables at about head height, face away from cable and pull towards the centre of body",
    tips: {
      hypertrophy: "Pull with 100%, slow eccentric, 8-10 reps, stretch at the end",
      strength: "use this as a warm-up for pecs",
      general: "Focus on stretch at the end, and squeeze at the front of the pecs"
    }
  },
  {
    id: "pike-pushup",
    name: "Pike Push-up",
    muscleGroup: "upperChest",
    equipment: ["home"],
    description: "Start in downward dog position, lower head toward ground.",
    tips: {
      hypertrophy: "12-15 reps, pause at bottom",
      strength: "Elevate feet, 8-10 reps",
      general: "10-12 reps, controlled movement"
    }
  },
  {
    id: "iso-lateral-incline-machine-press",
    name: "Iso-lateral Incline Machine Press",
    muscleGroup: "upperChest", 
    equipment: ["gym"],
    description: "Use the incline machine which isolates the left and right pec movement, good for unequal pec strength or size",
    tips: {
      hypertrophy: "8-10 reps, 100% when pressing, feel the pec squeeze, then control the eccentric",
      strength: "6-8 reps, 100% when pressing, feel the pec squeeze, then control the eccentric", 
      general: "8-12 reps, 100% when pressing, feel the squeeze, then control the eccentric"
    }
  },
  // Lower Chest
  {
    id: "decline-press",
    name: "Decline Dumbbell Press",
    muscleGroup: "lowerChest",
    equipment: ["gym"],
    description: "Lie on decline bench, press dumbbells up from chest level.",
    tips: {
      hypertrophy: "8-12 reps, full stretch at bottom, squeeze at top",
      strength: "Heavy weight, 4-6 reps, controlled",
      general: "10-12 reps, moderate weight"
    }
  },
  {
    id: "dips",
    name: "Chest Dips",
    muscleGroup: "lowerChest",
    equipment: ["gym"],
    description: "Lean forward on parallel bars, lower body down and press up.",
    tips: {
      hypertrophy: "Bodyweight, 10-15 reps, slow eccentric",
      strength: "Add weight, 6-8 reps",
      general: "Bodyweight, 8-12 reps"
    }
  },
  {
    id: "decline-pushup",
    name: "Decline Push-up",
    muscleGroup: "lowerChest",
    equipment: ["home"],
    description: "Feet elevated on chair/bench, perform push-ups.",
    tips: {
      hypertrophy: "12-15 reps, controlled tempo",
      strength: "Add weight on back, 8-10 reps",
      general: "15-20 reps, bodyweight"
    }
  },
  {
    id: "iso-lateral-decline-machine-press",
    name: "Iso-lateral Decline Machine Press",
    muscleGroup: "lowerChest", 
    equipment: ["gym"],
    description: "Use the decline machine which isolates the left and right pec movement, good for unequal pec strength or size",
    tips: {
      hypertrophy: "8-10 reps, 100% when pressing, feel the pec squeeze, then control the eccentric",
      strength: "6-8 reps, 100% when pressing, feel the pec squeeze, then control the eccentric", 
      general: "8-12 reps, 100% when pressing, feel the squeeze, then control the eccentric"
    }
  }, 
  
  // Traps
  {
    id: "shrugs",
    name: "Dumbbell Shrugs",
    muscleGroup: "traps",
    equipment: ["gym"],
    description: "Hold heavy dumbbells at sides, elevate shoulders straight up, shorter rest between sets.",
    tips: {
      hypertrophy: "Moderate weight, 12-15 reps, hold at top for 2 seconds",
      strength: "Heavy weight, 8-10 reps",
      general: "Light to moderate, 12-15 reps"
    }
  },
  {
    id: "upright-row",
    name: "Upright Row",
    muscleGroup: "traps",
    equipment: ["gym"],
    description: "Pull dumbbells up to chin level, elbows leading the movement.",
    tips: {
      hypertrophy: "8-12 reps, squeeze at top",
      strength: "6-8 reps, controlled",
      general: "10-12 reps"
    }
  },
  {
    id: "resistance-shrugs",
    name: "Resistance Band Shrugs",
    muscleGroup: "traps",
    equipment: ["home"],
    description: "Stand on band, hold the ends, perform shrug motion.",
    tips: {
      hypertrophy: "15-20 reps, hold peak contraction",
      strength: "Double bands, 10-12 reps",
      general: "12-15 reps"
    }
  },

  // Abs
  {
    id: "cable-crunch",
    name: "Cable Crunch",
    muscleGroup: "abs",
    equipment: ["gym"],
    description: "Kneel below high pulley, crunch down bringing elbows to knees.",
    tips: {
      hypertrophy: "12-15 reps, squeeze abs hard at bottom",
      strength: "Heavier weight, 8-12 reps",
      general: "15-20 reps"
    }
  },
  {
    id: "hanging-leg-raise",
    name: "Hanging Leg Raise",
    muscleGroup: "abs",
    equipment: ["gym"],
    description: "Hang from bar, raise legs to 90 degrees.",
    tips: {
      hypertrophy: "12-15 reps, controlled descent",
      strength: "Add ankle weights, 8-10 reps",
      general: "10-12 reps or knee raises"
    }
  },
  {
    id: "plank",
    name: "Plank Hold",
    muscleGroup: "abs",
    equipment: ["home"],
    description: "Forearm plank position, maintain straight line from head to heels.",
    tips: {
      hypertrophy: "60-90 second holds with weights",
      strength: "Maximum time holds",
      general: "45-60 second holds"
    }
  },
  {
    id: "bicycle-crunch",
    name: "Bicycle Crunch",
    muscleGroup: "abs",
    equipment: ["home"],
    description: "Alternate bringing opposite elbow to knee while extending other leg.",
    tips: {
      hypertrophy: "20-30 reps, slow controlled movement",
      strength: "15-20 reps with weight plate",
      general: "25-30 reps"
    }
  },

  // Quads
  {
    id: "squat",
    name: "Barbell Back Squat",
    muscleGroup: "quads",
    equipment: ["gym"],
    description: "Bar on upper back, squat down to parallel or below.",
    tips: {
      hypertrophy: "Moderate weight, 8-12 reps, tempo 3-1-1",
      strength: "Heavy weight, 3-5 reps, explosive up",
      general: "Comfortable weight, 10-15 reps"
    }
  },
  {
    id: "leg-press",
    name: "Leg Press",
    muscleGroup: "quads",
    equipment: ["gym"],
    description: "Push platform away with feet shoulder-width apart.",
    tips: {
      hypertrophy: "10-15 reps, control the eccentric",
      strength: "Heavy weight, 5-8 reps",
      general: "12-15 reps"
    }
  },
  {
    id: "bulgarian-split",
    name: "Bulgarian Split Squat",
    muscleGroup: "quads",
    equipment: ["home", "gym"],
    description: "Rear foot elevated on a seat/firm object, lower into lunge position.",
    tips: {
      hypertrophy: "12-15 reps per leg, fast up, slow down, aim for knees beyond toes while keeping feet flat to the floor",
      strength: "Add dumbbells, 8-10 reps",
      general: "Bodyweight, 15-20 reps per leg"
    }
  },

  // Upper Back
  {
    id: "pullup",
    name: "Pull-up",
    muscleGroup: "upperBack",
    equipment: ["gym"],
    description: "Hang from bar with overhand grip, pull chin over bar.",
    tips: {
      hypertrophy: "8-12 reps, slow eccentric (3-4 seconds)",
      strength: "Add weight, 4-6 reps",
      general: "Bodyweight, max reps or assisted"
    }
  },
  {
    id: "cable-row",
    name: "Seated Cable Row",
    muscleGroup: "upperBack",
    equipment: ["gym"],
    description: "Pull handle to torso, squeeze shoulder blades together.",
    tips: {
      hypertrophy: "10-12 reps, hold squeeze for 2 seconds",
      strength: "Heavy weight, 6-8 reps",
      general: "12-15 reps"
    }
  },
  {
    id: "inverted-row",
    name: "Inverted Row",
    muscleGroup: "upperBack",
    equipment: ["home"],
    description: "Under table/bar, pull chest to bar while body remains straight.",
    tips: {
      hypertrophy: "12-15 reps, squeeze at top",
      strength: "Elevate feet, 8-10 reps",
      general: "15-20 reps"
    }
  },

  // Mid Back
  {
    id: "tbar-row",
    name: "T-Bar Row",
    muscleGroup: "midBack",
    equipment: ["gym"],
    description: "Pull bar to chest, focus on mid back contraction, drop the weight if requiring too much body momentum.",
    tips: {
      hypertrophy: "8-12 reps, squeeze for 2 seconds",
      strength: "Heavy weight, 5-7 reps",
      general: "10-12 reps"
    }
  },
  {
    id: "dumbbell-row",
    name: "Single-Arm Dumbbell Row",
    muscleGroup: "midBack",
    equipment: ["gym"],
    description: "Support yourself on bench, row dumbbell to hip.",
    tips: {
      hypertrophy: "10-12 reps, full range of motion",
      strength: "Heavy weight, 6-8 reps",
      general: "12-15 reps per arm"
    }
  },
  {
    id: "resistance-row",
    name: "Resistance Band Row",
    muscleGroup: "midBack",
    equipment: ["home"],
    description: "Anchor band, pull handles to torso with elbows close.",
    tips: {
      hypertrophy: "15-20 reps, squeeze at end",
      strength: "Double bands, 10-12 reps",
      general: "15-20 reps"
    }
  },

  // Lower Back
  {
    id: "deadlift",
    name: "Conventional Deadlift",
    muscleGroup: "lowerBack",
    equipment: ["gym"],
    description: "Lift bar from ground to standing position, hinge at hips, straighten back.",
    tips: {
      hypertrophy: "Moderate weight, 6-10 reps, controlled",
      strength: "Heavy weight, 3-5 reps, explosive",
      general: "Light to moderate, 8-12 reps"
    }
  },
  {
    id: "back-extension",
    name: "Back Extension",
    muscleGroup: "lowerBack",
    equipment: ["gym"],
    description: "On hyperextension bench, lower and raise torso.",
    tips: {
      hypertrophy: "12-15 reps with weight, slow tempo",
      strength: "Heavy weight plate, 8-10 reps",
      general: "Bodyweight, 15-20 reps"
    }
  },
  {
    id: "superman",
    name: "Superman Hold",
    muscleGroup: "lowerBack",
    equipment: ["home"],
    description: "Lie face down, lift arms and legs off ground simultaneously.",
    tips: {
      hypertrophy: "15-20 reps with 2-second holds",
      strength: "Hold for max time",
      general: "12-15 reps with 1-second holds"
    }
  },

  // Lats
  {
    id: "lat-pulldown",
    name: "Lat Pulldown",
    muscleGroup: "lats",
    equipment: ["gym"],
    description: "Pull bar down to upper chest, focus on lat engagement, controlled eccentric, stretch at the top of the movement",
    tips: {
      hypertrophy: "10-12 reps, stretch at top, squeeze at bottom",
      strength: "Heavy weight, 6-8 reps",
      general: "12-15 reps"
    }
  },
  {
    id: "chinup",
    name: "Chin-up",
    muscleGroup: "lats",
    equipment: ["gym"],
    description: "Underhand grip, pull chin over bar.",
    tips: {
      hypertrophy: "8-12 reps, slow negative",
      strength: "Add weight, 5-7 reps",
      general: "Bodyweight max reps or assisted"
    }
  },
  {
    id: "resistance-pulldown",
    name: "Resistance Band Pulldown",
    muscleGroup: "lats",
    equipment: ["home"],
    description: "Anchor band high, pull down to chest level.",
    tips: {
      hypertrophy: "15-20 reps, focus on lat contraction",
      strength: "Thick band, 10-12 reps",
      general: "15-20 reps"
    }
  },

  // Glutes
  {
    id: "hip-thrust",
    name: "Barbell Hip Thrust",
    muscleGroup: "glutes",
    equipment: ["gym"],
    description: "Shoulders on bench, thrust barbell up with hips.",
    tips: {
      hypertrophy: "10-15 reps, squeeze at top for 2 seconds",
      strength: "Heavy weight, 6-8 reps",
      general: "12-15 reps"
    }
  },
  {
    id: "romanian-deadlift",
    name: "Romanian Deadlift",
    muscleGroup: "glutes",
    equipment: ["gym"],
    description: "Lower bar with slight knee bend, feel stretch in hamstrings and glutes.",
    tips: {
      hypertrophy: "8-12 reps, control the stretch",
      strength: "Heavy weight, 5-7 reps",
      general: "10-12 reps"
    }
  },
  {
    id: "glute-bridge",
    name: "Single-Leg Glute Bridge",
    muscleGroup: "glutes",
    equipment: ["home"],
    description: "One foot on ground, thrust hips up with other leg extended.",
    tips: {
      hypertrophy: "15-20 reps per leg, hold at top",
      strength: "Add weight on hips, 10-12 reps",
      general: "15-20 reps per leg"
    }
  },

  // Hamstrings
  {
    id: "leg-curl",
    name: "Lying Leg Curl",
    muscleGroup: "hamstrings",
    equipment: ["gym"],
    description: "Curl weight up bringing heels toward glutes.",
    tips: {
      hypertrophy: "10-15 reps, squeeze at top",
      strength: "Heavy weight, 6-8 reps",
      general: "12-15 reps"
    }
  },
  {
    id: "nordic-curl",
    name: "Nordic Hamstring Curl",
    muscleGroup: "hamstrings",
    equipment: ["home", "gym"],
    description: "Knees on pad, lower body forward controlling with hamstrings.",
    tips: {
      hypertrophy: "6-10 reps, slow eccentric",
      strength: "5-8 reps, max control",
      general: "8-12 reps or assisted"
    }
  },
  {
    id: "single-leg-deadlift",
    name: "Single-Leg Deadlift",
    muscleGroup: "hamstrings",
    equipment: ["home", "gym"],
    description: "Balance on one leg, hinge forward extending other leg back.",
    tips: {
      hypertrophy: "10-12 reps per leg with weight",
      strength: "Heavy dumbbell, 6-8 reps",
      general: "Bodyweight, 12-15 reps per leg"
    }
  },

  // Calves
  {
    id: "calf-raise",
    name: "Standing Calf Raise",
    muscleGroup: "calves",
    equipment: ["gym"],
    description: "Raise up onto toes, lower back down with control.",
    tips: {
      hypertrophy: "15-20 reps, pause at top for 2 seconds",
      strength: "Heavy weight, 10-12 reps",
      general: "15-20 reps"
    }
  },
  {
    id: "seated-calf",
    name: "Seated Calf Raise",
    muscleGroup: "calves",
    equipment: ["gym"],
    description: "Seated position, raise heels up against resistance.",
    tips: {
      hypertrophy: "15-20 reps, full range of motion",
      strength: "Heavy weight, 12-15 reps",
      general: "20-25 reps"
    }
  },
  {
    id: "single-calf",
    name: "Single-Leg Calf Raise",
    muscleGroup: "calves",
    equipment: ["home"],
    description: "On step, raise one leg up on toes, control descent.",
    tips: {
      hypertrophy: "15-20 reps per leg, hold at top",
      strength: "Add weight, 12-15 reps per leg",
      general: "20-25 reps per leg"
    }
  },
];

export function getExercisesForMuscle(
  muscleGroup: MuscleGroup,
  equipment: EquipmentType,
  goals: FitnessGoal[]
): Exercise[] {
  return exerciseDatabase
    .filter(
      (exercise) =>
        exercise.muscleGroup === muscleGroup &&
        exercise.equipment.includes(equipment)
    )
    .slice(0, 3); // Return max 3 exercises per muscle group
}

export function generateWorkout(
  muscleGroups: MuscleGroup[],
  equipment: EquipmentType,
  goals: FitnessGoal[]
): Exercise[] {
  const workout: Exercise[] = [];
  
  muscleGroups.forEach((muscle) => {
    const exercises = getExercisesForMuscle(muscle, equipment, goals);
    workout.push(...exercises);
  });
  
  return workout;
}
