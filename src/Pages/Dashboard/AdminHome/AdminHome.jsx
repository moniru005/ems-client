import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
} from "recharts";

import useSalaries from "../../../Hooks/useSalary";
import useTask from "../../../Hooks/useTask";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [salaries] = useSalaries();
  const [tasks] = useTask();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  // custom shape pie chart
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = tasks.map((data) => {
    return { name: data.tasksCategory, value: parseInt(data.hours) };
  });

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
            <div className="text-4xl pt-2 font-semibold ">{stats?.users}</div>
          </div>

          <div className="w-48 h-24 pt-24px pt-2  gap-2 text-center bg-gradient-to-r from-gray-100 to-purple-500 rounded-lg">
            <div className=" text-xl font-semibold text-gray-800">Tasks</div>
            <div className="text-4xl pt-2 font-semibold">
              {stats?.totalTask}
            </div>
          </div>

          <div className="w-48 h-24 pt-24px pt-2  gap-2 text-center bg-gradient-to-r from-gray-100 to-deep-orange-300 rounded-lg">
            <div className=" text-xl font-semibold text-gray-800">
              Subscribed
            </div>
            <div className="text-4xl pt-2 font-semibold">
              {stats?.totalContacts}
            </div>
          </div>

          <div className="w-48 h-24 pt-24px pt-2  gap-2 text-center bg-gradient-to-r from-gray-100 to-deep-purple-500 rounded-lg">
            <div className=" text-xl font-semibold text-gray-800">Paid</div>
            <div className="text-4xl pt-2 font-semibold">
              {stats?.PaidSalary}
            </div>
          </div>
        </div>
      </div>
      
      {/* BarChart */}
      <div className="flex">
        <div className="mt-12">
          <BarChart
            width={500}
            height={300}
            data={salaries}
            margin={{
              top: 20,
              right: 50,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="month" />
            <YAxis />
            <Bar dataKey="salary" fill="#8884d8" label={{ position: "top" }}>
              {salaries?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        
        {/* PieChart */}
        <div className="w-1/2">
          <PieChart width={300} height={285}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
          </PieChart>
        </div>
      </div>
      
    </div>
  );
};

export default AdminHome;
