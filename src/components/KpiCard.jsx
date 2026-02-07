const colorMap = {
  emerald: "bg-emerald-400",
  sky: "bg-sky-400",
  violet: "bg-violet-400",
  rose: "bg-rose-400",
};

export default function KpiCard({
  title,
  value,
  change,
  progress,
  color = "sky",
}) {
  const isUp = change >= 0;

  return (
    <div className="glass rounded-2xl p-5 space-y-3">
      <p className="text-sm text-white/60">{title}</p>

      <p className="text-2xl font-semibold text-white">
        {value}
      </p>

      <p
        className={`text-sm ${
          isUp ? "text-emerald-400" : "text-red-400"
        }`}
      >
        {isUp ? "↑" : "↓"} {Math.abs(change)}%
      </p>

      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className={`h-full ${colorMap[color]}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}