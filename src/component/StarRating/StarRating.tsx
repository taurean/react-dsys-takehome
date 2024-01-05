import styles from "./StarRating.module.css";

type StarRatingProps = {
  rating: number;
};

export function StarRating(props: StarRatingProps) {
  const stars = "★".repeat(props.rating) + "☆".repeat(5 - props.rating);
  return <span className={styles.stars}>{stars}</span>;
}
