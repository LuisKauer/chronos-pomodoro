
import { TimerIcon } from 'lucide-react'
import styles from './style.module.css'
import { RouterLink } from '../RouterLink'



export function Logo() {
    return (
        <h1 className={styles.logo}> 
          <RouterLink className={styles.logoLink} href="/"><TimerIcon size={64}/>
          <span className={styles.spanLogo}>Chronos</span>
          </RouterLink>
        </h1>
    )
}
