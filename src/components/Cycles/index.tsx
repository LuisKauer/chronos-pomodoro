import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './style.module.css';

export function Cycles() {
  const { state } = useTaskContext();

  const cycleStep = Array.from({ length: state.currentCycle });

  return (
    <div className={styles.cyclesContainer}>
      <span className={styles.spanDot}>Ciclos</span>
      <div className={styles.cycleDots}>
        {cycleStep.map((_, index) => {
          const cycleType = getNextCycleType(index + 1);
          const key = index + 1
          const labels = {
            workTime: 'indicador de ciclo de foco',
            shortBreakTime: 'indicador de ciclo de descanso curto',
            longBreakTime: 'indicador de ciclo de descanso longo',
          } as const;

          const ariaLabel = labels[cycleType];

          return (
            <span
              key={key}
              aria-label={ariaLabel}
              title={ariaLabel}
              className={`${styles.cycleDot} ${styles[cycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
