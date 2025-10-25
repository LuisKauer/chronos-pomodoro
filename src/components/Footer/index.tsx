import styles from './style.module.css';
import { RouterLink } from '../RouterLink';


export function Footer() {
 
  return (
    <footer className={styles.footer}>
        <RouterLink href="/about-pomodoro" rel="noopener noreferrer">Entenda mais sobre a tecnica Pomodoro
        </RouterLink>
        <RouterLink href="/">Chronos Pomodoro &copy; {new Date().getFullYear()}</RouterLink>
    </footer>
  )
}