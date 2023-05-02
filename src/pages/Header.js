import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";
export default function Header(props) {
  const router = useRouter();

  return (
    <header className={styles.contactHeader}>
      <div className={styles.headerContainer}>
        <div className={styles.pieceContainer}>
          <div
            className={styles.headerPieces}
            onClick={() => {
              router.push("/home");
            }}
          >
            Home
          </div>
        </div>
        <div className={styles.pieceContainer}>
          <div
            className={styles.headerPieces}
            onClick={() => {
              router.push("/products");
            }}
          >
            Product Line
          </div>
        </div>
        <div className={styles.pieceContainer}>
          <div
            className={styles.headerPieces}
            onClick={() => router.push("/finance")}
          >
            Financing
          </div>
        </div>
        <div className={styles.pieceContainer}>
          <div
            onClick={() => {
              router.push("/buy");
            }}
            className={styles.headerPieces}
          >
            Contact Us
          </div>
        </div>
      </div>
    </header>
  );
}
