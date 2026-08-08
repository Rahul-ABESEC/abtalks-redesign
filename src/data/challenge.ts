export const student = {
  name: "Rahul",
  streak: 12,
  currentDay: 12,
  totalDays: 60,
  completedDays: 12,
  completionRate: 20,
};
export const firstDayStudent = {
  name: "New Student",
  streak: 0,
  currentDay: 1,
  totalDays: 60,
  completedDays: 0,
  completionRate: 0,
};
export const missedDayStudent = {
  name: "Rahul",
  streak: 0,
  currentDay: 12,
  totalDays: 60,
  completedDays: 11,
  completionRate: 18,
  missedYesterday: true,
};
export const emptyProfileStudent = {
  name: "",
  streak: 0,
  currentDay: 0,
  totalDays: 60,
  completedDays: 0,
  completionRate: 0,
  isProfileEmpty: true,
};
export const todayTask = {
  day: 12,
  title: "Build a Binary Search Visualizer",
  description:
    "Create an interactive visualizer that demonstrates how binary search narrows down a sorted array.",
  difficulty: "Intermediate",
  estimatedTime: "45 min",
  tags: ["DSA", "JavaScript", "Algorithms"],
};

export const achievements = [
  {
    icon: "🔥",
    title: "7 Day Streak",
    unlocked: true,
  },
  {
    icon: "🚀",
    title: "First Project",
    unlocked: true,
  },
  {
    icon: "⭐",
    title: "10 Day Streak",
    unlocked: true,
  },
  {
    icon: "🏆",
    title: "30 Day Streak",
    unlocked: false,
  },
];

export const reflection = {
  text: "Today I finally understood how binary search reduces the search space.",
  date: "Yesterday",




};
export const challengeDay = {
  day: 12,
  totalDays: 60,
  title: "Build a Binary Search Visualizer",
  subtitle: "Make algorithms easier to understand through interaction.",
  description:
    "Create a visualizer that demonstrates how binary search repeatedly reduces the search space until the target is found.",
  difficulty: "Intermediate",
  estimatedTime: "45 min",

  goals: [
    "Create a sorted array visualization",
    "Highlight the middle element during each step",
    "Show how the search range changes",
    "Display whether the target was found",
  ],

  resources: [
    {
      title: "Binary Search — MDN",
      type: "Documentation",
    },
    {
      title: "Visualizing Binary Search",
      type: "Guide",
    },
  ],
};