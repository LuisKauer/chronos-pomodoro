import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

import styles from './style.module.css';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecToMin } from '../../utils/formatSecToMin';

export function MainForm() {
  const { state, setState } = useTaskContext();
  const taskNameRef = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  console.log(state.secondsRemaining);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameRef.current === null) return;
    const taskName = taskNameRef.current.value.trim();
    if (taskName.length === 0) {
      alert('Por favor, insira um nome para a tarefa.');
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

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formatedSecondsRemaining: formatSecToMin(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      };
    });
  }
  return (
    <form onSubmit={handleCreateNewTask} className={styles.form} action={''}>
      <div className={styles.formRow}>
        <DefaultInput
          id='meuInput'
          type='text'
          placeholder='Digite algo...'
          ref={taskNameRef}
        />
      </div>
      <div className={styles.formRow}>
        <p>Proximo intervalo é em {state.formatedSecondsRemaining}</p>
      </div>
      <div className={styles.formRow}>
        <Cycles />
      </div>
      <div className={styles.formRow}>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
