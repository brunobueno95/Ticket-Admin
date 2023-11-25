import styles from "./page.module.css";
import useGetAllTickets from "../../hooks/useGetAllTickets";

import LayoutMain from "../../layouts/LayoutMain";
import Table from "../../components/table/Table";
import { useState } from "react";
import BoxTicketId from "../../components/boxTicketId/BoxTicketId";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const { data, isLoading, error } = useGetAllTickets();
  const [openSeeTicket, setOpenSeeTicket] = useState(false);
  const [ticketId, setTicketId] = useState<number>();
  // const [openEditTicket, setOpenEditTicket] = useState(false)

  const notify = (message: string) =>
    toast(message, { progressStyle: { background: "#E47C6E" } });

  const openTicketId = (id: number) => {
    setOpenSeeTicket(true);
    setTicketId(id);
    console.log(openSeeTicket);
    console.log(ticketId);
    // console.log("this is rendering");
  };

  const closeTicket = () => {
    setOpenSeeTicket(false);
  };

  return (
    <div>
      {" "}
      <LayoutMain>
        <div className={styles.container}>
          {error && (
            <div>
              <h1>{error.message}</h1>
            </div>
          )}
          {isLoading && (
            <div>
              <h1>Loading...</h1>
            </div>
          )}
          {data && (
            <Table data={data} onViewClick={openTicketId} notify={notify} />
          )}
          {openSeeTicket && ticketId && (
            <BoxTicketId id={ticketId} onClose={closeTicket} notify={notify} />
          )}
        </div>
        <ToastContainer
          toastStyle={{
            backgroundColor: "#F7D881",
            color: "black",
            border: "3px black solid",
            borderBottom: "7px black solid",
            borderRadius: "15px",
            height: "100px",
            textAlign: "center",
            fontWeight: "700",
            fontSize: "18px",
          }}
        />
      </LayoutMain>
    </div>
  );
};

export default Home;
