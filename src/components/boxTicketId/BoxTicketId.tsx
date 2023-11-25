import useGetTicketById from "../../hooks/useGetTicketById";
import DarkBlurryLayer from "../darkBlurryLayer/DarkBlurryLayer";
import Ticket from "../ticket/Ticket";
import styles from "./page.module.css";
import { MdEmail } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
// import { BiSolidPencil } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import useDeleteTicket from "../../hooks/useDeleteTicket";
import { ClipLoader, } from "react-spinners";

interface BoxProps {
  id: number;
  onClose: () => void;
  notify: (message: string) => void;
}

const BoxTicketId = ({ id, onClose, notify }: BoxProps) => {
  const deleteTicket = useDeleteTicket();
  const deleteData = (id: number) => {
    console.log("rendering?");
    deleteTicket.mutate(id, {
      onSuccess: () => {
        console.log("deleted");
        onClose();
        notify(`Ticket id:${id} was deleted`);
      },
      onError: () => {
        console.log(error?.message);
        notify(`Error deleting ticket id:${id}`);
      },
    });
  };
  console.log("boxId being rendered");
  const { data, isLoading, error } = useGetTicketById(id);

  return (
    <DarkBlurryLayer>
      <Ticket userName={data?.name} closingNeeded={true} onClose={onClose}>
        {error && (
          <div className={styles.infoContent}>
            <h1>{error.message}</h1>
          </div>
        )}
        {isLoading && (
          <div className={styles.infoContent}>
            <ClipLoader/>
          </div>
        )}
        {data && (
          <div className={styles.infoContent}>
            <div className={styles.emailField}>
              {" "}
              <MdEmail className={styles.icon} />
              <p className={styles.text}>{data.email}</p>
            </div>
            <div className={styles.messageField}>
              <RiMessage2Fill className={styles.icon} />{" "}
              <p className={styles.textMessage}>{data.problem}</p>
            </div>
            <div className={styles.btnsContainer}>
              {" "}
              {/* <button className={styles.BtnEdit}>
            {" "}
            <BiSolidPencil className={styles.btnIconEdit} />
          </button> */}
          {deleteTicket.isPending ? (
           <>  <ClipLoader/></>
          ) : <button
          className={styles.deleteBtn}
          onClick={() => data && data.id && deleteData(data.id)}
        >
          <MdDeleteForever className={styles.btnIconDelete} />
        </button> }   
            </div>
          </div>
        )}
      </Ticket>
    </DarkBlurryLayer>
  );
};

export default BoxTicketId;
