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

  // Filter out duplicate muscle labels (only show label once per muscle group)
  const uniqueMuscles = muscles.reduce((acc, muscle) => {
    if (!acc.find((m) => m.id === muscle.id && m.label === muscle.label)) {
      acc.push(muscle);
    }
    return acc;
  }, [] as typeof muscles);

  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-gradient-to-b from-muted/30 to-muted/10 rounded-lg overflow-hidden">
      {/* Body outline - simplified representation */}
      <svg
        viewBox="0 0 300 400"
        className="absolute inset-0 w-full h-full"
        style={{ filter: "drop-shadow(0 0 8px rgba(0,0,0,0.1))" }}
      >
        {view === "front" ? (
          // Front body outline
          <path
            d="M150 20 L160 35 L170 65 L165 100 L160 140 L155 180 L150 240 L145 280 L140 320 L135 360 L140 395 L150 400 L160 395 L165 360 L170 320 L175 280 L180 240 L185 180 L190 140 L195 100 L190 65 L180 35 L170 20 Z M130 20 L140 35 L145 65 L148 100 L148 140 L148 180 L148 240 L148 280 L148 320 L148 360 L148 395 L150 400 L148 395 L145 360 L140 320 L135 280 L130 240 L125 180 L120 140 L115 100 L120 65 L130 35 Z"
            fill="hsl(var(--muted))"
            stroke="hsl(var(--border))"
            strokeWidth="2"
          />
        ) : (
          // Back body outline
          <path
            d="M150 20 L165 35 L175 65 L180 100 L185 140 L185 180 L180 240 L175 280 L170 320 L165 360 L160 395 L150 400 L140 395 L135 360 L130 320 L125 280 L120 240 L115 180 L115 140 L120 100 L125 65 L135 35 Z"
            fill="hsl(var(--muted))"
            stroke="hsl(var(--border))"
            strokeWidth="2"
          />
        )}
      </svg>

      {/* Muscle group buttons */}
      {uniqueMuscles.map((muscle, index) => {
        const isSelected = selectedMuscles.includes(muscle.id);
        return (
          <button
            key={`${muscle.id}-${index}`}
            onClick={() => onMuscleClick(muscle.id)}
            className={`absolute transition-all hover:scale-105 ${
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
