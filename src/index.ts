import { tasks } from "./task.data";
import * as TaskService from "./task.service";

console.log("========== ALL TASKS ==========");
TaskService.printTasks(tasks);


console.log("\n========== TODO TASKS ==========");

const todoTasks = TaskService.filterTasks(tasks, "todo");
TaskService.printTasks(todoTasks);

console.log("\n========== TOTAL ESTIMATED HOURS ==========");

const totalHours = TaskService.sumEstimatedHours(tasks);
console.log(`Total estimated hours: ${totalHours}`);

console.log("\n========== FIND TASK ==========");

const foundTask = TaskService.findTaskById(tasks, "002");

if (foundTask !== null) {
  console.log(`Found task: ${foundTask.title}`);
} else {
  console.log("Task not found.");
}

console.log("\n========== OPEN VALID TASK ==========");

const openTask = TaskService.createOpenTask(tasks);
openTask("001");


console.log("\n========== OPEN INVALID TASK ==========");

openTask("999");

console.log("\n========== RAW DATA VALIDATION ==========");

const rawData: unknown = {
  id: "005",
  title: "Test raw data",
  estimatedHours: 2,
  priority: "medium",
  status: "todo",
  assignee: null
};

if (TaskService.isTask(rawData)) {
  console.log("Raw data is a valid Task.");
  console.log(`Task title: ${rawData.title}`);
} else {
  console.log("Raw data is NOT a valid Task.");
}