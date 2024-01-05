import styles from "./Button.module.css";

type ButtonProps = {
  label: string;
  isFullWidth?: boolean;
  className?: string;
};

export function Button(props: ButtonProps) {
  const { label, isFullWidth, className } = props;
  return (
    <button
      className={`${styles.button} ${className} ${
        isFullWidth ? styles.isFullWidth : ""
      }`}
    >
      {label}
    </button>
  );
}
