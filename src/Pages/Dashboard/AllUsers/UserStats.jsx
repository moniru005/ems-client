import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import useSalaries from '../../../Hooks/useSalary';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];



const UserStats = () => {
  const [salaries] = useSalaries();

  return (
    <div>
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
      <Bar dataKey="salary" fill="#8884d8"  label={{ position: 'top' }}>
        {salaries.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    </div>
  );
};

export default UserStats;
