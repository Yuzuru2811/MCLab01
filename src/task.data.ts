import type { Task } from "./task.type";

export const tasks: Task[] = [
    {
    id: "001",
    title: "Learn TypeScript types",
    estimatedHours: 3,
    priority: "high",
    status: "doing",
    assignee: "Tung",
    note: "Review union and interface"
  },
  {
    id: "002",
    title: "Complete Mobile Computing Lab",
    estimatedHours: 5,
    priority: "high",
    status: "todo",
    assignee: "Tung"
  },
  {
    id: "003",
    title: "Read TypeScript documentation",
    estimatedHours: 2,
    priority: "medium",
    status: "done",
    assignee: null,
    note: "Focus on type safety"
  },
  {
    id: "004",
    title: "Push project to GitHub",
    estimatedHours: 1,
    priority: "low",
    status: "todo",
    assignee: null
  }
]