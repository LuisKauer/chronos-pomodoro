import styles from "./style.module.css";


type DefaultInputProps = {
 labelText?: string;
 id: string;
} & React.ComponentProps<"input">


export function DefaultInput({ id, type, labelText, ...rest }: DefaultInputProps) {
  return (
    <>{
      labelText && <label htmlFor={id}>{labelText}</label>}
     <input className={styles.input} id={id} type={type} {...rest} />
    </> 
  );
}