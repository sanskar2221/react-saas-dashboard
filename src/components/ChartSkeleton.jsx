export default function ChartSkeleton() {
  return (
    <div className="h-full w-full animate-pulse flex flex-col justify-end gap-3">
      {/* Fake bars */}
      <div className="h-6 w-3/4 bg-white/10 rounded" />
      <div className="h-10 w-4/5 bg-white/10 rounded" />
      <div className="h-16 w-full bg-white/10 rounded" />
      <div className="h-12 w-5/6 bg-white/10 rounded" />
      <div className="h-20 w-full bg-white/10 rounded" />
    </div>
  );
}
