import ChallengeHeader from "../components/ChallengeHeader";
import TaskOverview from "../components/TaskOverview";
import TaskChecklist from "../components/TaskChecklist";
import Resources from "../components/Resources";
import SubmissionForm from "../components/SubmissionForm";
import ReflectionInput from "../components/ReflectionInput";

export default function ChallengeDay() {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-6 text-white">
      <div className="mx-auto max-w-2xl">

        <ChallengeHeader />

        <TaskOverview />

        <TaskChecklist />

        <Resources />

        <SubmissionForm />

        <ReflectionInput />

      </div>
    </main>
  );
}