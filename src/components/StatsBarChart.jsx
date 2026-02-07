import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Jan", value: 40 },
  { name: "Feb", value: 55 },
  { name: "Mar", value: 48 },
  { name: "Apr", value: 62 },
  { name: "May", value: 38 },
  { name: "Jun", value: 80 },
];

export default function StatsBarChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <XAxis dataKey="name" tick={{ fill: "#94a3b8" }} />
        <YAxis tick={{ fill: "#94a3b8" }} />
        <Tooltip
        cursor={{ fill: "#020617" }}
          contentStyle={{
            background: "#020617",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 8,
          }}
        />
        <Bar
          dataKey="value"
          fill="#38bdf8"
          radius={[6, 6, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
