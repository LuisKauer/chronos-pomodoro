import styles from "./style.module.css";


type DefaultButtonProps = {
  icon: React.ReactNode;
  collor?: "green" | "red" ;
} & React.ComponentProps<"button">


export function DefaultButton({ icon, collor = "green",...props }: DefaultButtonProps) {
  return (
      <button className={`${styles.button} ${styles[collor]}`} {...props}>
        {icon}
      </button>
  
  );
}