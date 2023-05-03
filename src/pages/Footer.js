import styles from "../styles/Footer.module.css";
import Socials from "./Socials";
import Image from "next/image";
import Link from 'next/link'
import { useRouter } from "next/router";
export default function Footer(props) {

  const router = useRouter();
  return (
    <div className={styles.footer}>
      <div className={styles.exploreContainerGood}>
        <h3 className={styles.footerTitle}>Contact Us</h3>
        <div className={styles.footerTags}>Copiers Utah</div>
        <div className={styles.footerTags}>554 W 8360 S</div>
        <div className={styles.footerTags}>Sandy, UT 84070</div>
        <div className={styles.footerTags}>PHONE: (801)261-0510</div>
        <div className={styles.footerTags}>FAX: (801)261-1967</div>
        <div className={styles.footerTags}>
          E-MAIL: info@copiersutah.com
          <Socials />
        </div>
      </div>
      <div className={styles.exploreContainer}>
        <h3 className={styles.footerTitle}>Services</h3>
        <Link href="https://copiersutah.com/shortTerm">
          <div
            className={styles.headerPieces}>
            Rentals
          </div>
        </Link>
        <Link href="https://copiersutah.com/fix">
          <div
            className={styles.headerPieces}>
            Maintanance
          </div>
        </Link>
        <Link href="https://copiersutah.com/finance">
          <div
            className={styles.headerPieces}>
            Financing
          </div>
        </Link>
        <Link href="https://copiersutah.com/products">
          <div
            className={styles.headerPieces}>
            Products
          </div>
        </Link>
      </div>
      <div className={styles.exploreContainerGood}>
        <Image src={'/static/logo.png'} width={200} height={150} />
      </div>
    </div>
  );
}
