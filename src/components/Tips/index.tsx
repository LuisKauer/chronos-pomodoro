import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";


export function Tips() {
 const {state} = useTaskContext()

  const nextCycle = getNextCycle(state.currentCycle);
   const nextCycleType = getNextCycleType(nextCycle);

    //Tips
const tipsForWhenActiveTask = {
  workTime: <p>Foque na tarefa por {state.config.workTime} minutos.</p>,
  shortBreakTime: <p>Descance por {state.config.shortBreakTime} minutos.</p>,
  longBreakTime: <p>Descance por {state.config.longBreakTime} minutos.</p>,
}
const tipsForNoActiveTask = {
  workTime: <p>Proximo ciclo é de trabalho de {state.config.workTime} minutos.</p>,
  shortBreakTime: <p>Proximo ciclo é de descanço por {state.config.shortBreakTime} minutos.</p>,
  longBreakTime: <p>Proximo ciclo é de descanço {state.config.longBreakTime} minutos.</p>,
}

  return (
    <>
       {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
       {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  )
} 