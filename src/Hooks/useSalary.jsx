import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSalaries = () => {
    const axiosPublic = useAxiosPublic();
    const { data: salaries = [], refetch } = useQuery({
        queryKey: ["salaries"],
        queryFn: async () => {
          const res = await axiosPublic.get("/salaries");
          return res.data;
        },
      });
      return [salaries, refetch]
};

export default useSalaries;