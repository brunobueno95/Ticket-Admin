import { useQuery } from "@tanstack/react-query";
import TicketService from "../services/TicketService";
import { Ticket } from "../services/APIclient";

const useGetAllTickets = () => {
  return useQuery<Ticket[], Error>({
    queryKey: ["ticket"],
    queryFn: TicketService.getAll,
    staleTime: 2 * 1000,
  });
};

export default useGetAllTickets;
