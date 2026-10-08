export type TaskPriority = "low" | "medium" | "high";

export type TaskStatus = "todo" | "doing" | "done";

export type TaskFilter = TaskStatus | "all";

export type OpenTaskCallback = (taskId: string) => void;

export interface Task {
    id: string;
    title: string;
    estimatedHours: number;
    priority: TaskPriority;
    status: TaskStatus;
    assignee: string | null;
    note ?: string; 

}