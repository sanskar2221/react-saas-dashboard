import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function RevenueAreaChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <XAxis dataKey="name" tick={{ fill: "#94a3b8" }} />
        <YAxis tick={{ fill: "#94a3b8" }} />
        <Tooltip 
        contentStyle={{
    backgroundColor: "#020617",   
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "8px",
  }}
  labelStyle={{ color: "#fff" }}
  itemStyle={{ color: "#38bdf8" }}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#38bdf8"
          fill="url(#colorRevenue)"
          
        />
        <defs>
          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
          </linearGradient>
        </defs>
      </AreaChart>
    </ResponsiveContainer>
  );
}
