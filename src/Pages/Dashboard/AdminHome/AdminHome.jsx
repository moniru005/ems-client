import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

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

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
  ];
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="w-full">
      <h2 className="text-3xl">
        <span>Hi, Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>

      <div>
        <div className="grid grid-cols-2 lg:grid-cols-4  gap-1  mt-10 font-workSans">
          <div className="w-48 h-24 pt-24px pt-2 gap-2 text-center bg-gradient-to-r from-white to-green-500 rounded-lg">
            <div className="p-0  text-xl font-semibold text-gray-800">
              Employee
            </div>
            <div className="text-5xl font-semibold ">
              {stats?.users}
            </div>
          </div>

          <div className="w-48 h-24 pt-24px pt-2  gap-2 text-center bg-gradient-to-r from-gray-100 to-purple-500 rounded-lg">
            <div className=" text-xl font-semibold text-gray-800">
              Tasks
            </div>
            <div className="text-5xl font-semibold">0</div>
          </div>

          <div className="w-48 h-24 pt-24px pt-2  gap-2 text-center bg-gradient-to-r from-gray-100 to-deep-orange-300 rounded-lg">
            <div className=" text-xl font-semibold text-gray-800">
              Employee
            </div>
            <div className="text-5xl font-semibold">0</div>
          </div>

          <div className="w-48 h-24 pt-24px pt-2  gap-2 text-center bg-gradient-to-r from-gray-100 to-deep-purple-500 rounded-lg">
            <div className=" text-xl font-semibold text-gray-800">
              {" "}
              Paid
            </div>
            <div className="text-5xl font-semibold">0</div>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-12">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 50,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="uv" fill="#8884d8" label={{ position: "top" }}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
