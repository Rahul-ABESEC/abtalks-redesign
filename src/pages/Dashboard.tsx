import DashboardHeader from "../components/DashboardHeader";
import StreakCard from "../components/StreakCard";
import TodayMission from "../components/TodayMission";
import ProgressCard from "../components/ProgressCard";
import Achievements from "../components/Achievements";
import ReflectionCard from "../components/ReflectionCard";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-6 text-white">

      <div className="mx-auto max-w-2xl">

        <DashboardHeader />

        <StreakCard />

        <TodayMission />

        <ProgressCard />

        <Achievements />

        <ReflectionCard />

      </div>

    </main>
  );
}