import { ReactNode } from "react";
import styles from "./page.module.css"

interface Props {
    children: ReactNode;
  }

const DarkBlurryLayer = ({children}:Props) => {
  return <div className={styles.darkBlurry}>
    {children}
  </div>;
};

export default DarkBlurryLayer;
