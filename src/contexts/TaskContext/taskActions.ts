import type { TaskModel } from "../../models/TaskModel";

export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  INTERRUPTED_TASK = 'INTERRUPTED_TASK',
  RESET_STATE = 'RESET_STATE',
  COUNT_DOWN = 'COUNT_DOWN',
  COMPLETED_TASK = 'COMPLETED_TASK'
}

export type TaskActionModel = 
| {
  type: TaskActionTypes.COUNT_DOWN, 
  payload: {secondsRemaining: number};
} 
| {
  type: TaskActionTypes.START_TASK, 
  payload: TaskModel;
} 
| {
  type: TaskActionTypes.INTERRUPTED_TASK, 
}
| {
  type: TaskActionTypes.RESET_STATE, 
}
| {
  type: TaskActionTypes.COMPLETED_TASK, 
}