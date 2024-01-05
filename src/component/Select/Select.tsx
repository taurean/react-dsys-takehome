import styles from "./Select.module.css";

type SelectProps = {
  label: string;
  id: string;
  className?: string;
};

export function Select(props: SelectProps) {
  return (
    <>
      <div className={`${styles.selectWrapper} ${props.className}`}>
        <label className={styles.label} htmlFor={props.id}>
          {props.label}
        </label>
        <select className={styles.select} name="test" id={props.id}>
          <option value="10">10 Guests</option>
          <option value="20">20 Guests</option>
          <option value="30">30 Guests</option>
        </select>
      </div>
    </>
  );
}
