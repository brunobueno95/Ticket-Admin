import axios from "axios";

export interface Ticket {
  id?: number;
  name: string;
  email: string;
  problem: string;
}

const axiosInstance = axios.create({
  baseURL: "https://bruno.moreservice.no/",
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (): Promise<T[]> => {
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  };

  create = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };
  getById = (id: number): Promise<T> => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${id}`)
      .then((res) => res.data);
  };
  delete = (id: number): Promise<void> => {
    return axiosInstance
      .delete(`${this.endpoint}/${id}`)
      .then((res) => res.data);
  };
}

export default APIClient;
