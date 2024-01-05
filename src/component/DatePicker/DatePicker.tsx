import styles from "./DatePicker.module.css";

type DatePickerProps = {
  id: string;
  label: string;
  className?: string;
};

export function DatePicker(props: DatePickerProps) {
  const { id, label, className } = props;
  return (
    <div className={`${styles.datePicker} ${className}`}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.dateInput}
        type="date"
        id={id}
        placeholder="MM/DD/YYYY"
      />
    </div>
  );
}
