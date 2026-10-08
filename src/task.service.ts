import type { Task, TaskFilter,OpenTaskCallback } from "./task.type";

export function printTasks(tasks: Task[]): void {
    tasks.forEach((task) => {
        const assignee = task.assignee ?? "Unassigned";
        const note = task.note ?? "No note";

        console.log("======================");
        console.log(`ID: ${task.id}`);
        console.log(`Title: ${task.title}`);
        console.log(`Estimated Hours: ${task.estimatedHours}`);
        console.log(`Priority: ${task.priority}`);
        console.log(`Status: ${task.status}`);
        console.log(`Assignee: ${assignee}`);
        console.log(`Note: ${note}`);
    });
}

export function sumEstimatedHours(tasks: Task[]): number {
    let tmp: number = 0

    tasks.forEach((task) =>{
        tmp = tmp + task.estimatedHours;
    });

    return tmp;
}

export function filterTasks(
    tasks: Task[],
    status: TaskFilter
): Task[] {
    if (status === "all") {
        return tasks;
    }
    return tasks.filter((task) => task.status === status);
}

export function findTaskById(
    tasks: Task[],
    taskId: string
): Task | null {
    const task = tasks.find((task) => task.id ===taskId);

    return task ?? null;
}

export function createOpenTask(
  tasks: Task[]
): OpenTaskCallback {
  return (taskId: string): void => {
    const task = findTaskById(tasks, taskId);

    if (task === null) {
      console.log(`Task ${taskId} does not exist.`);
      return;
    }

    console.log(`Opening task: ${task.title}`);
  };
}

export function isTask(value: unknown): value is Task {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const task = value as Record<string, unknown>;

  return (
    typeof task.id === "string" &&
    typeof task.title === "string" &&
    typeof task.estimatedHours === "number" &&
    (task.priority === "low" ||
      task.priority === "medium" ||
      task.priority === "high") &&
    (task.status === "todo" ||
      task.status === "doing" ||
      task.status === "done") &&
    (typeof task.assignee === "string" ||
      task.assignee === null) &&
    (task.note === undefined ||
      typeof task.note === "string")
  );
}