import type { TaskModel } from "./TaskModel";

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number;
  formatedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number; // 1 a 8
  config: {
    workTime: number; // in minutes
    shortBreakTime: number; // in minutes
    longBreakTime: number; // in minutes
  };
};