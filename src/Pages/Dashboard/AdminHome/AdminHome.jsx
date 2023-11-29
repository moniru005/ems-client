import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });




  return (
    <div className="w-full">
      <h2 className="text-3xl">
        <span>Hi, Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>

      <div>
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x  shadow mt-10">
          <div className="stat gap-2">
            <div className="stat-title text-center text-xl">Employee</div>
            <div className="stat-value text-3xl">{ stats?.users}</div>
          </div>
          <div className="stat gap-2">
            <div className="stat-title text-center text-xl">HR</div>
            <div className="stat-value text-3xl">{ stats?.users}</div>
          </div>


          <div className="stat">
            <div className="stat-figure text-secondary"></div>

            <div className="stat-title text-xl">Payments</div>
            <div className="stat-value text-3xl">{stats?.menuItems}</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default AdminHome;
