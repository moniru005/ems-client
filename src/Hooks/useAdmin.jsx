// ... (previous imports remain the same)

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: isAdminAndHR, isPending: isAdminAndHRLoading } = useQuery({
        queryKey: [user?.email, 'isAdminAndHR'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            console.log(res.data);
            return res.data; // Retrieve both admin and HR status from the backend
        }
    });

    // Extract isAdmin and isHR from the response data
    const isAdmin = isAdminAndHR?.admin || false;
    const isHR = isAdminAndHR?.isHR || false;

    return [isAdmin, isHR, isAdminAndHRLoading]; // Return both admin and HR status
};

export default useAdmin;