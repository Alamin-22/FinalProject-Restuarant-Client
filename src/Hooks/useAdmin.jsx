import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useAdmin = () => {
    const { user } = useAuth();
    const axiosSecure = useAxios();
    const { data: isAdmin, isPending: adminLoading } = useQuery({
        queryKey: [user?.email, "isAdmin"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            console.log(res.data);
            return res.data?.admin;
        }

    });
    return [isAdmin, adminLoading]
};

export default useAdmin;