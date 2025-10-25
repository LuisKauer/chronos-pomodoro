import { useEffect, useReducer, useRef } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { TimerWorkerManager } from '../../workers/timerWorkerManager';
import { TaskActionTypes } from './taskActions';
import { loadBeep } from '../../utils/loadBeep';
import type { TaskStateModel } from '../../models/TaskStateModel';

const initialState = initialTaskState;

type TaskContextProviderProps = {
  children: React.ReactNode;
};


export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialState, () => {
    const storageState = localStorage.getItem('state')
    if (storageState === null) return initialState;
    const parsedStorageState = JSON.parse(storageState) as TaskStateModel;

    return {
      ...parsedStorageState,
      activeTask: null,
      secondsRemaining: 0,
      formatedSecondsRemaining: '00:00',
    }
  
  });
  const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);
  const worker = TimerWorkerManager.getInstance();

  worker.onmessage(e => {
    const countDownSeconds = e.data;

    if (countDownSeconds <= 0) {
      if (playBeepRef.current) {
        playBeepRef.current();
      }
      console.log('worker COMPLETED');
      dispatch({ type: TaskActionTypes.COMPLETED_TASK });
      worker.terminate();
    } else {
      dispatch({
        type: TaskActionTypes.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds },
      });
    }
  });

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))

    if (!state.activeTask) {
      worker.terminate();
    }
    document.title = `${state.formatedSecondsRemaining} - Chronos Pomodoro`
    worker.postMessage(state);
  }, [worker, state]);

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));

    if (state.activeTask && playBeepRef.current === null) {
      playBeepRef.current = loadBeep();
    } else {
      playBeepRef.current = null;
    }
  }, [state.activeTask]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
