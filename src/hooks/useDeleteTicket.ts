import { useMutation, useQueryClient } from "@tanstack/react-query";
import TicketService from "../services/TicketService";
import { Ticket } from "../services/APIclient";

const useDeleteTicket = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, number>({
    mutationFn: TicketService.delete,
    onSuccess: (_, ticketId) => {
      queryClient.setQueryData<Ticket[]>(["ticket"], (tickets) =>
        tickets?.filter((ticket) => ticket.id !== ticketId)
      );
    
    },
    onError: (error) => {
      console.error("Error deleting ticket:", error);
    },
  });
};

export default useDeleteTicket;
