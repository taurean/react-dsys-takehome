import styles from "./InputSearch.module.css";

type InputSearchProps = {
  id: string;
  label: string;
  placeholder: string;
};

export function InputSearch(props: InputSearchProps) {
  const { id, label, placeholder } = props;
  return (
    <span>
      <label visually-hidden="true" htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.searchBar}
        id={id}
        type="Search"
        placeholder={placeholder}
      />
    </span>
  );
}
