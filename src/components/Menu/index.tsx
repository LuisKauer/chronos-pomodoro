import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon, MoonIcon } from 'lucide-react';
import styles from './style.module.css';
import {useEffect, useState} from 'react';

type avaliableThemes = 'light' | 'dark';



export function Menu() {
  const [theme, setTheme] = useState<avaliableThemes>(() => {
    const savedTheme = localStorage.getItem('theme') as avaliableThemes | null;
    return savedTheme ?? 'dark';
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />
  }

 useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        return () => {}
      }, [theme]); 

function handleThemeChange(
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) {
  event.preventDefault();
     
      setTheme(prevTheme => {
        const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
        return nextTheme
      });

      
}
  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href="#" aria-label='Página Inicial' title='Página Inicial'><HouseIcon /></a>
      <a className={styles.menuLink} href="#" aria-label='Histórico' title='Histórico'><HistoryIcon /></a>
      <a className={styles.menuLink} href="#" aria-label='Configurações' title='Configurações'><SettingsIcon /></a>
      <a className={styles.menuLink} href="#" aria-label='Mudar Tema' title='Mudar Tema' onClick={handleThemeChange}>{nextThemeIcon[theme]}</a>
    </nav>
  )
}     