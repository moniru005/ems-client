import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSalaries = () => {
    const axiosPublic = useAxiosPublic();
    const { data: salaries = [], isLoading, refetch } = useQuery({
        queryKey: ["salaries"],
        queryFn: async () => {
          const res = await axiosPublic.get("/salaries");
          return res.data;
        },
      });
      return [salaries, isLoading, refetch]
};

export default useSalaries;