import { Logo } from "../Logo/Logo";
import styles from "./PageFooter.module.css";

export function PageFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brandCopyright}>
          <Logo color="util-white" className={styles.logo} />
          <span>© 2023 Triangles, Inc.</span>
          <div
            style={{
              maxWidth: "500px",
              marginBlock: "0.5em",
              textWrap: "pretty",
            }}
          >
            This was a takehome project while interviewing for a front-end
            position on a design system team. You can view the{" "}
            <a href="https://github.com/taurean/react-dsys-takehome">
              public repo on github
            </a>{" "}
            for more info.
          </div>
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
