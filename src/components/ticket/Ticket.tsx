import { ReactNode } from "react";
import styles from "./page.module.css";
import { IoCloseCircle } from "react-icons/io5";


interface Props {
  children: ReactNode;
  userName?: string;
  closingNeeded?: boolean;
  onClose:()=> void;
}

const Ticket = ({ userName, children, closingNeeded , onClose}: Props) => {
  return (
    <div className={styles.fullTicket}>
      <div className={styles.fTLedft}></div>
      <div className={styles.fTRight}>
        {closingNeeded && (
          <div className={styles.cancel}>
            <IoCloseCircle className={styles.closeIcon} onClick={onClose} />
          </div>
        )}
        {userName && <h1 className={styles.titleTicket}>{userName}</h1>}
        {children}
      </div>
    </div>
  );
};

export default Ticket;
