import { InputSearch } from "../InputSearch/InputSearch";
import { Logo } from "../Logo/Logo";
import styles from "./PageHeader.module.css";

export function PageHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>
          {/* @TODO: link to this page? */}
          <Logo color="util-brand" />
        </h1>
        <InputSearch
          id="pageHeaderSearch"
          label="Search"
          placeholder="search"
        />
      </div>
    </header>
  );
}
