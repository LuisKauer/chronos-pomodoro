import { useEffect, useState } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";

const initialState = initialTaskState;

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState<TaskStateModel>(initialState);

  useEffect(() => {
    console.log('TaskContext state changed:', state);
  }, [state]);

  return <TaskContext.Provider value={{ state, setState }}>
           {children}
       </TaskContext.Provider>
}