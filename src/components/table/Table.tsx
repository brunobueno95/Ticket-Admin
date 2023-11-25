import { Ticket } from "../../services/APIclient";
import styles from "./page.module.css";
import { MdDeleteForever } from "react-icons/md";
import useDeleteTicket from "../../hooks/useDeleteTicket";
import { FaEye } from "react-icons/fa";
// import { BiSolidPencil } from "react-icons/bi";
import { TruncateString } from "../../services/TrancateString";
import { ClipLoader, } from "react-spinners";

interface Props {
  data: Ticket[];
  onViewClick: (id: number) => void;
  notify: (message: string) => void;
}

const Table = ({ data, onViewClick, notify }: Props) => {
  const deleteTicket = useDeleteTicket();
  const deleteData = (id: number) => {
    deleteTicket.mutate(id, {
      onSuccess: () => {
        console.log("deleted");
        notify(`Ticket id:${id} was deleted`);
      },
      onError: () => {
        notify(`Error deleting ticket id:${id}`);
      },
    });
  };
  return (
    <table className={styles.fullTable}>
      <thead className={styles.tableHead}>
        <tr className={styles.tableRowHead}>
          <th className={styles.tableHeadName}>Name</th>
          <th className={styles.tableHeadEmail}>Email</th>
          <th className={styles.tableHeadProblem}>Problem</th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {data?.map((ticket, index) => (
          <tr className={styles.tableRowBody} key={index}>
            <td className={styles.tableBodyName}>
              <div className={styles.btnsRow}>
                { deleteTicket.isPending ? <ClipLoader/> :
                 <MdDeleteForever
                 className={styles.deleteBtn}
                 onClick={() => ticket.id && deleteData(ticket.id)}
               /> }
               

                {/* <BiSolidPencil
                  className={styles.editBtn}
                  // onClick={() => ticket.id && onEditClick(ticket.id)}
                /> */}
                <FaEye
                  className={styles.eyeBtn}
                  onClick={() => ticket.id && onViewClick(ticket.id)}
                />
              </div>
              {ticket.name}
            </td>
            <td className={styles.tableBodyEmail}>{ticket.email}</td>
            <td className={styles.tableBodyProblem}>
              {" "}
              {TruncateString(ticket.problem)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
