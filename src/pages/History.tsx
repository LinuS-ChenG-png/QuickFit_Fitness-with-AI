import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, TrendingUp, Dumbbell } from "lucide-react";
import { format } from "date-fns";

interface WorkoutRecord {
  id: string;
  date: string;
  exercises: number;
  duration: string;
}

const History = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState<WorkoutRecord[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("workoutHistory");
    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, []);

  // Filter to last 2 weeks
  const twoWeeksAgo = new Date();
  twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);

  const recentHistory = history.filter((record) => {
    const recordDate = new Date(record.date);
    return recordDate >= twoWeeksAgo;
  });

  const olderHistory = history.filter((record) => {
    const recordDate = new Date(record.date);
    return recordDate < twoWeeksAgo;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-3xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/muscles")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-3">Workout History</h1>
          <p className="text-muted-foreground text-lg">
            Track your fitness journey
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Card className="p-6 text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold">{recentHistory.length}</p>
            <p className="text-sm text-muted-foreground">Last 2 Weeks</p>
          </Card>
          <Card className="p-6 text-center">
            <Dumbbell className="w-8 h-8 mx-auto mb-2 text-accent" />
            <p className="text-2xl font-bold">{history.length}</p>
            <p className="text-sm text-muted-foreground">Total Workouts</p>
          </Card>
        </div>

        {/* Recent Workouts */}
        {recentHistory.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Recent Workouts</h2>
            <div className="space-y-3">
              {recentHistory.map((record) => (
                <Card key={record.id} className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">
                          {format(new Date(record.date), "MMMM d, yyyy")}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {format(new Date(record.date), "h:mm a")}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{record.exercises} exercises</p>
                      <p className="text-xs text-muted-foreground">{record.duration}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Older Workouts */}
        {olderHistory.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Older Workouts</h2>
            <div className="space-y-3">
              {olderHistory.map((record) => (
                <Card key={record.id} className="p-4 opacity-60">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-muted rounded-lg">
                        <Calendar className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold">
                          {format(new Date(record.date), "MMMM d, yyyy")}
                        </p>
                        <p className="text-sm text-muted-foreground">Archived</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{record.exercises} exercises</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {history.length === 0 && (
          <Card className="p-12 text-center">
            <Calendar className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-semibold mb-2">No workouts yet</h3>
            <p className="text-muted-foreground mb-6">
              Complete your first workout to start tracking your progress!
            </p>
            <Button variant="hero" onClick={() => navigate("/muscles")}>
              Start Your First Workout
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
};

export default History;
