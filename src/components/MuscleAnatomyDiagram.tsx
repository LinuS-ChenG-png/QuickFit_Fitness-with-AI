import { MuscleGroup } from "@/types/workout";

interface MuscleAnatomyDiagramProps {
  view: "front" | "back";
  selectedMuscles: MuscleGroup[];
  onMuscleClick: (muscle: MuscleGroup) => void;
}

const MuscleAnatomyDiagram = ({
  view,
  selectedMuscles,
  onMuscleClick,
}: MuscleAnatomyDiagramProps) => {
  const frontMuscles: { id: MuscleGroup; label: string; style: React.CSSProperties }[] = [
    { id: "biceps", label: "Biceps", style: { top: "28%", left: "16%", width: "10%" } },
    { id: "biceps", label: "Biceps", style: { top: "28%", right: "16%", width: "10%" } },
    { id: "delts", label: "Delts", style: { top: "20%, right: "12%, width: "10%" } },
    { id: "delts", label: "Delts", style: { top: "20%, right: "12%, width: "10%" } },
    { id: "triceps", label: "Triceps", style: { top: "32%", left: "12%", width: "8%" } },
    { id: "triceps", label: "Triceps", style: { top: "32%", right: "12%", width: "8%" } },
    { id: "forearms", label: "Forearms", style: { top: "40%", left: "14%", width: "12%" } },
    { id: "forearms", label: "Forearms", style: { top: "40%", right: "14%", width: "12%" } },
    { id: "upperChest", label: "Upper Chest", style: { top: "18%", left: "35%", width: "30%" } },
    { id: "lowerChest", label: "Lower Chest", style: { top: "28%", left: "35%", width: "30%" } },
    { id: "traps", label: "Traps", style: { top: "12%", left: "38%", width: "24%" } },
    { id: "abs", label: "Abs", style: { top: "38%", left: "38%", width: "24%" } },
    { id: "quads", label: "Quads", style: { top: "58%", left: "32%", width: "16%" } },
    { id: "quads", label: "Quads", style: { top: "58%", right: "32%", width: "16%" } },
  ];

  const backMuscles: { id: MuscleGroup; label: string; style: React.CSSProperties }[] = [
    { id: "upperBack", label: "Upper Back", style: { top: "15%", left: "35%", width: "30%" } },
    { id: "midBack", label: "Mid Back", style: { top: "28%", left: "35%", width: "30%" } },
    { id: "lowerBack", label: "Lower Back", style: { top: "40%", left: "38%", width: "24%" } },
    { id: "lats", label: "Lats", style: { top: "24%", left: "20%", width: "20%" } },
    { id: "lats", label: "Lats", style: { top: "24%", right: "20%", width: "20%" } },
    { id: "glutes", label: "Glutes", style: { top: "48%", left: "36%", width: "28%" } },
    { id: "hamstrings", label: "Hamstrings", style: { top: "60%", left: "32%", width: "16%" } },
    { id: "hamstrings", label: "Hamstrings", style: { top: "60%", right: "32%", width: "16%" } },
    { id: "calves", label: "Calves", style: { top: "75%", left: "34%", width: "12%" } },
    { id: "calves", label: "Calves", style: { top: "75%", right: "34%", width: "12%" } },
  ];

  const muscles = view === "front" ? frontMuscles : backMuscles;

  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-gradient-to-b from-muted/30 to-muted/10 rounded-lg overflow-hidden perspective-1000">
      {/* Body outline - improved human shape */}
      <svg
        viewBox="0 0 300 400"
        className={`absolute inset-0 w-full h-full transition-transform duration-500 pointer-events-none -z-10 ${
          view === "back" ? "rotate-y-180" : ""
        }`}
        style={{ 
          filter: "drop-shadow(0 0 8px rgba(0,0,0,0.1))",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden"
        }}
      >
        {view === "front" ? (
          // Front body outline - improved shape
          <>
            {/* Head */}
            <ellipse cx="150" cy="30" rx="25" ry="30" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2"/>
            {/* Neck */}
            <rect x="140" y="55" width="20" height="15" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2"/>
            {/* Torso - V-taper */}
            <path
              d="M 115 70 L 105 90 L 100 120 L 105 150 L 110 180 L 115 210 L 125 240 M 185 70 L 195 90 L 200 120 L 195 150 L 190 180 L 185 210 L 175 240"
              fill="none"
              stroke="hsl(var(--border))"
              strokeWidth="2"
            />
            <path
              d="M 115 70 Q 100 100 105 150 Q 110 200 125 240 L 135 270 L 140 300 L 145 330 L 145 380 L 150 400 L 155 380 L 155 330 L 160 300 L 165 270 L 175 240 Q 190 200 195 150 Q 200 100 185 70 L 150 60 Z"
              fill="hsl(var(--muted))"
              stroke="hsl(var(--border))"
              strokeWidth="2"
            />
            {/* Arms */}
            <ellipse cx="90" cy="110" rx="12" ry="30" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2"/>
            <ellipse cx="210" cy="110" rx="12" ry="30" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2"/>
            <ellipse cx="85" cy="160" rx="10" ry="35" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2"/>
            <ellipse cx="215" cy="160" rx="10" ry="35" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2"/>
            {/* Legs */}
            <ellipse cx="135" cy="290" rx="18" ry="65" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2"/>
            <ellipse cx="165" cy="290" rx="18" ry="65" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2"/>
            <ellipse cx="135" cy="365" rx="12" ry="30" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2"/>
            <ellipse cx="165" cy="365" rx="12" ry="30" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2"/>
          </>
        ) : (
          // Back body outline - improved shape
          <>
            {/* Head */}
            <ellipse cx="150" cy="30" rx="25" ry="30" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2"/>
            {/* Neck */}
            <rect x="140" y="55" width="20" height="15" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2"/>
            {/* Back torso - V-taper */}
            <path
              d="M 115 70 Q 100 100 105 150 Q 110 200 125 240 L 135 270 L 140 300 L 145 330 L 145 380 L 150 400 L 155 380 L 155 330 L 160 300 L 165 270 L 175 240 Q 190 200 195 150 Q 200 100 185 70 L 150 60 Z"
              fill="hsl(var(--muted))"
              stroke="hsl(var(--border))"
              strokeWidth="2"
            />
            {/* Arms */}
            <ellipse cx="90" cy="110" rx="12" ry="30" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2"/>
            <ellipse cx="210" cy="110" rx="12" ry="30" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2"/>
            <ellipse cx="85" cy="160" rx="10" ry="35" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2"/>
            <ellipse cx="215" cy="160" rx="10" ry="35" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2"/>
            {/* Legs */}
            <ellipse cx="135" cy="290" rx="18" ry="65" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2"/>
            <ellipse cx="165" cy="290" rx="18" ry="65" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2"/>
            <ellipse cx="135" cy="365" rx="12" ry="30" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2"/>
            <ellipse cx="165" cy="365" rx="12" ry="30" fill="hsl(var(--muted))" stroke="hsl(var(--border))" strokeWidth="2"/>
          </>
        )}
      </svg>

      {/* Muscle group buttons */}
      {muscles.map((muscle, index) => {
        const isSelected = selectedMuscles.includes(muscle.id);
        return (
          <button
            key={`${muscle.id}-${index}`}
            type="button"
            onClick={() => onMuscleClick(muscle.id)}
            className={`absolute z-50 cursor-pointer select-none transition-transform duration-200 hover:scale-105 ${
              isSelected
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-card hover:bg-accent text-card-foreground"
            } rounded-lg p-2 text-xs font-medium border-2 ${
              isSelected ? "border-primary" : "border-border"
            }`}
            style={muscle.style}
          >
            {muscle.label}
          </button>
        );
      })}
    </div>
  );
};

export default MuscleAnatomyDiagram;
