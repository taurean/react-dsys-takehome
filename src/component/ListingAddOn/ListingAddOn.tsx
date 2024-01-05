import styles from "./ListingAddOn.module.css";

export type ListingAddOnData = {
  id: string;
  price: number;
  labelTitle: string;
  labelDescription: string;
};

export type ListingAddOnProps = ListingAddOnData & {
  isAdded: boolean;
};

export type ListingAddOnListProps = {
  addOns: ListingAddOnData[];
};

function ListingAddOn(props: ListingAddOnProps) {
  const { id, price, labelTitle, labelDescription, isAdded } = props;
  return (
    <div className={styles.addOn}>
      <label className={styles.label} htmlFor={id}>
        <div className={styles.price}>${price}</div>
        <div className={styles.labelContent}>
          <div className={styles.labelTitle}>{labelTitle}</div>
          <p className={styles.labelDescription}>{labelDescription}</p>
        </div>
      </label>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        {...(isAdded && { checked: true })}
      />
    </div>
  );
}

export function ListingAddOnList(props: ListingAddOnListProps) {
  return (
    <ul className={styles.listingAddOnList}>
      {props.addOns.map((addOn) => (
        <li className={styles.addOnListItem}>
          <ListingAddOn {...addOn} isAdded={false} />
        </li>
      ))}
    </ul>
  );
}
