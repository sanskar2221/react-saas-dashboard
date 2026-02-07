import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Electronics", value: 45 },
  { name: "Clothing", value: 30 },
  { name: "Books", value: 15 },
  { name: "Other", value: 10 },
];

const COLORS = ["#38bdf8", "#22c55e", "#facc15", "#f97316"];

export default function CategoryDonutChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          innerRadius={55}
          outerRadius={85}
          paddingAngle={4}
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            background: "#020617",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 8,
          }}
            itemStyle={{ color: "#38bdf8" }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
