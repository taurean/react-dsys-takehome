import { Logo } from "../Logo/Logo";
import styles from "./PageFooter.module.css";

export function PageFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brandCopyright}>
          <Logo color="util-white" className={styles.logo} />
          <span>© 2023 Triangles, Inc.</span>
        </div>
        <div>
          <nav className={styles.navigation}>
            <ul className={styles.navList}>
              <li className={styles.navListItem}>
                <a className={styles.navListAnchor} href="#">
                  Terms of Use
                </a>
              </li>
              <li className={styles.navListItem}>
                <a className={styles.navListAnchor} href="#">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
