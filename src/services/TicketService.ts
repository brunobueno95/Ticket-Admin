import APIClient from "./APIclient";
import { Ticket } from "./APIclient";

export default new APIClient<Ticket>("/ticket");
