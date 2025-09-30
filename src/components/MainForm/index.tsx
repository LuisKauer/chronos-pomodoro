import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { DefaultInput } from '../DefaultInput';
import styles from './style.module.css';


export function MainForm() {
  return (
         <form className={styles.form} action={""}>
            <div className={styles.formRow}>
              <DefaultInput id='meuInput' type='text' placeholder='Digite algo...' />
            </div>
             <div className={styles.formRow}>
              <p>Lorem ipsum dolor sit </p>
             </div>
             <div className={styles.formRow}>
              <Cycles />
             </div>
             <div className={styles.formRow}>
              <DefaultButton icon={<PlayCircleIcon />} />
             </div>
          </form>
)
}