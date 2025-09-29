import styles from './style.module.css';


export function Footer() {
 
  return (
    <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">Entenda mais sobre a tecnica Pomodoro
        </a>
        <a href="#">Chronos Pomodoro &copy; {new Date().getFullYear()}</a>
    </footer>
  )
}