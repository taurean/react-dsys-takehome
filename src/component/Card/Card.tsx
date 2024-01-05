import { ReactNode } from "react";
import styles from "./Card.module.css";

type CardProps = {
  children: ReactNode | ReactNode[];
};

export function Card(props: CardProps) {
  return (
    <>
      <div className={styles.card}>{props.children}</div>
    </>
  );
}
