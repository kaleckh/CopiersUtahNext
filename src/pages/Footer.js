import styles from "../styles/Footer.module.css";
import Socials from "./Socials";
import Image from "next/image";
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
        <div
          onClick={() => {
            router.push("/shortTerm");
          }}
          className={styles.footerTags}
        >
          Rentals
        </div>
        <div
          onClick={() => {
            router.push("/fix");
          }}
          className={styles.footerTags}
        >
          Maintenance
        </div>
        <div
          onClick={() => {
            router.push("/finance");
          }}
          className={styles.footerTags}
        >
          Financing
        </div>
        <div
          onClick={() => {
            router.push("/products");
          }}
          className={styles.footerTags}
        >
          Product Lines
        </div>
      </div>
      <div className={styles.exploreContainerGood}>
        <Image src={'/static/logo.png'} width={200} height={150} />
      </div>
    </div>
  );
}
