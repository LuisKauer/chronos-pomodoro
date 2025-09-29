
import { TimerIcon } from 'lucide-react'
import styles from './style.module.css'



export function Logo() {
    return (
        <h1 className={styles.logo}> 
          <a className={styles.logoLink} href="#"><TimerIcon size={64}/>
          <span className={styles.spanLogo}>Chronos</span>
          </a>
        </h1>
    )
}
