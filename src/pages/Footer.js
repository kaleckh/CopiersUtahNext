import styles from "../styles/Footer.module.css";
import Socials from "./Socials";

// import Logo from "../media/logo.svg"
export default function Footer(props) {
  //   const navigate = useNavigate();

  return (
    <div className={styles.footer}>
      <div className={styles.exploreContainer}>
        <h2 className={styles.footerTitle}>Contact Us</h2>
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
        <h2 className={styles.footerTitle}>Services</h2>
        <div
          onClick={() => {
            navigate("/");
          }}
          className={styles.footerTags}
        >
          Rentals
        </div>
        <div
          onClick={() => {
            navigate("/about");
          }}
          className={styles.footerTags}
        >
          Maintenance
        </div>
        <div
          onClick={() => {
            navigate("/diy");
          }}
          className={styles.footerTags}
        >
          Financing
        </div>
        <div
          onClick={() => {
            navigate("/solarcalculator");
          }}
          className={styles.footerTags}
        >
          Product Lines
        </div>
      </div>
      <div className={styles.exploreContainer}>
        <h2 className={styles.footerTitle}>Services</h2>
        <div
          onClick={() => {
            navigate("/");
          }}
          className={styles.footerTags}
        >
          Rentals
        </div>
        <div
          onClick={() => {
            navigate("/about");
          }}
          className={styles.footerTags}
        >
          Maintenance
        </div>
        <div
          onClick={() => {
            navigate("/diy");
          }}
          className={styles.footerTags}
        >
          Financing
        </div>
        <div
          onClick={() => {
            navigate("/solarcalculator");
          }}
          className={styles.footerTags}
        >
          Product Lines
        </div>
      </div>
    </div>
  );
}
