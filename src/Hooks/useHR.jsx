import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useHR = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: isHR, isPending: isHRLoading} = useQuery({
        queryKey: [user?.email, 'isHR'],
        enabled: !loading,
        queryFn: async() =>{
            const res = await axiosSecure.get(`/users/hr/${user.email}`)
            return res.data;
        }
    })
    return [isHR, isHRLoading];
};

export default useHR;