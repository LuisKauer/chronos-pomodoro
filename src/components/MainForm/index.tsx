import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import { Tips } from '../Tips';
import { toastAdapter } from '../adapters/toastAdapter';

import styles from './style.module.css';



export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameRef = useRef<HTMLInputElement>(null);
  const lastTaskName = state.tasks[state.tasks.length - 1]?.name || '';

// Ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);




  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    toastAdapter.dismiss()

    if (taskNameRef.current === null) return;
    const taskName = taskNameRef.current.value.trim();
    if (taskName.length === 0) {
      toastAdapter.warning('Por favor, insira um nome para a tarefa.');
      return;
    }
    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptedDate: null,
      duration: state.config[nextCycleType], // in minutes
      type: nextCycleType,
    };

    // const secondsRemaining = newTask.duration * 60;

    dispatch({
      type: TaskActionTypes.START_TASK, payload: newTask
    })

    toastAdapter.success(`Tarefa ${taskName} criada`)

  }

  function handleInterruptedTask () {

      dispatch({
      type: TaskActionTypes.INTERRUPTED_TASK,
    })  
    toastAdapter.dismiss();
    toastAdapter.error('Tarefa interrompida');
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.form} action={''}>
      <div className={styles.formRow}>
        <DefaultInput
          id='meuInput'
          type='text'
          placeholder='Digite algo...'
          ref={taskNameRef}
          disabled = {!!state.activeTask}
          defaultValue={lastTaskName}
        />
      </div>
      <div className={styles.formRow}>
         <Tips />
      </div>

      {state.currentCycle > 0 && (
       <div className={styles.formRow}>
        <Cycles />
       </div>
      )}
      
      <div className={styles.formRow}>
        {!state.activeTask ? (
          <DefaultButton key={"submit"} aria-label='Iniciar nova tarefa' title='Iniciar nova tarefa' type='submit' icon={<PlayCircleIcon />} />
        ) : (
          <DefaultButton key={"button"} onClick={handleInterruptedTask} aria-label='Interromper a tarefa atual' title='Interromper a tarefa atual' type='button'collor='red' icon={<StopCircleIcon />}  />)}
        
      </div>
    </form>
  );
}
