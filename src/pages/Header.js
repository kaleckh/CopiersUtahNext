import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Header(props) {
  const router = useRouter();

  return (
    <header className={styles.contactHeader}>
      <div className={styles.headerContainer}>
        <div className={styles.pieceContainer}>
          <Link href="https://copiersutah.com/home">
            <div className={styles.headerPieces}>Home</div>
          </Link>
        </div>
        <div className={styles.pieceContainer}>
          <Link href="https://copiersutah.com/products">
            <div className={styles.headerPieces}>Product Line</div>
          </Link>
        </div>
        <div className={styles.pieceContainer}>
          <Link href="https://copiersutah.com/Refurbished">
            <div className={styles.headerPieces}>Refurbished Machines</div>
          </Link>
        </div>
        <div className={styles.pieceContainer}>
          <Link href="https://copiersutah.com/finance">
            <div className={styles.headerPieces}>Financing</div>
          </Link>
        </div>
        <div className={styles.pieceContainer}>
          <Link href="https://copiersutah.com/buy">
            <div className={styles.headerPieces}>Contact Us</div>
          </Link>
        </div>
      </div>
    </header>
  );
}
