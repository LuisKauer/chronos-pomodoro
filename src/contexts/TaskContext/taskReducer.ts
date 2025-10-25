import type { TaskStateModel } from "../../models/TaskStateModel";
import { formatSecToMin } from "../../utils/formatSecToMin";
import { getNextCycle } from "../../utils/getNextCycle";
import { TaskActionTypes, type TaskActionModel } from "./taskActions";

export function taskReducer(state: TaskStateModel, action: TaskActionModel) :  TaskStateModel{

   switch(action.type) {
    case TaskActionTypes.START_TASK: {

    const newTask = action.payload;
    const nextCycle = getNextCycle(state.currentCycle);
    const secondsRemaining = newTask.duration * 60;

      return {
        ...state,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formatedSecondsRemaining: formatSecToMin(secondsRemaining),
        tasks: [...state.tasks, newTask],
      };
    }

     case TaskActionTypes.INTERRUPTED_TASK: {
      
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formatedSecondsRemaining: "00:00",
        tasks: state.tasks.map(task => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, interruptedDate: Date.now() };
          }
          return task;
        })
      };
    } 
      case TaskActionTypes.RESET_STATE: {
      return state;
      }

      case TaskActionTypes.COUNT_DOWN: {
        return{
           ...state,
           secondsRemaining: action.payload.secondsRemaining,
           formatedSecondsRemaining: formatSecToMin(action.payload.secondsRemaining),
        }
      }
      case TaskActionTypes.COMPLETED_TASK: {

        
        return{
          ...state,
        activeTask: null,
        secondsRemaining: 0,
        formatedSecondsRemaining: "00:00",
        tasks: state.tasks.map(task => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, completeDate: Date.now() };
          }
          return task;
        })
        }
      }
    }
  return state;
}



