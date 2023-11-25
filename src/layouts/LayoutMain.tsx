import { ReactNode } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
interface Props {
  children: ReactNode;
}

const LayoutMain = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}

      <Footer />
    </>
  );
};

export default LayoutMain;
