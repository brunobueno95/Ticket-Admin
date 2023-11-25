import { useQuery } from "@tanstack/react-query";
import TicketService from "../services/TicketService";
import { Ticket } from "../services/APIclient";

const useGetTicketById = (id: number) => {
  return useQuery<Ticket, Error>({
    queryKey: ["ticket", id],
    queryFn: () => TicketService.getById(id),
    staleTime: 60 * 1000,
  });
};

export default useGetTicketById;
