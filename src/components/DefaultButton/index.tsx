import styles from "./style.module.css";


type DefaultButtonProps = {
  icon: React.ReactNode;
  collor?: "green" | "red" ;
} & React.ComponentProps<"button">


export function DefaultButton({ icon, color = "green",...props }: DefaultButtonProps) {
  return (
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
  
  );
}