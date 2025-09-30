import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number; // duration in minutes
  startDate: number;
  completeDate: number | null; // timestamp or null is completed
  interruptedDate: number | null; // timestamp or null is interrupted
  type: keyof TaskStateModel['config'];
};
