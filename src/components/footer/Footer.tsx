import styles from "./page.module.css";
import Ticket from "../../assets/images/ticket.png";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.mainFooter}>
        <div className={styles.logoAndPowerPhrase}>
          <div className={styles.logoContain}>
            <img src={Ticket} alt="" className={styles.logoFoot} />
          </div>
          <p className={styles.powerPhrase}>
            <span className={styles.spanText}> Ticket</span> Admin{" "}
          </p>
        </div>

        <div className={styles.linksFooterContainer}>
          {" "}
          <p className={styles.linkFooterTitle}>Solutions</p>
          <p className={styles.linkFooter}>Marketing</p>
          <p className={styles.linkFooter}>Analytics</p>
          <p className={styles.linkFooter}>Commerce</p>
          <p className={styles.linkFooter}>Insights</p>
        </div>

        <div className={styles.linksFooterContainer}>
          {" "}
          <p className={styles.linkFooterTitle}>Support</p>
          <p className={styles.linkFooter}>Pricing</p>
          <p className={styles.linkFooter}>Documentation</p>
          <p className={styles.linkFooter}>Guides</p>
          <p className={styles.linkFooter}>API Status</p>
        </div>
      </div>
      <div className={styles.dividingLine} />
      <div className={styles.copyRight}>
        <p className={styles.copyRightText}>
          {" "}
          © 2023 Ticket Admin. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
