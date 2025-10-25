import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";
import type { TaskActionModel } from "./taskActions";


const initialState = initialTaskState;

export type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};

const initialContextValue = {
  state: initialState,
  dispatch: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);

