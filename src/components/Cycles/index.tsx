import styles from './style.module.css'

export function Cycles() {
  return (

  <div className={styles.cyclesContainer}>
      <span className={styles.spanDot}>Ciclos</span>
      <div className={styles.cycleDots}>
        <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
        <span className={`${styles.cycleDot} ${styles.breakTimeShort}`}></span>
        <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
        <span className={`${styles.cycleDot} ${styles.breakTimeShort}`}></span>
        <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
        <span className={`${styles.cycleDot} ${styles.breakTimeShort}`}></span>
        <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
        <span className={`${styles.cycleDot} ${styles.breakTimeLong}`}></span>
      </div>
  </div>
  )
}