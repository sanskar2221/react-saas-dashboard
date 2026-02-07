export default function ChartCard({ title, children, actions, loading }) {
  return (
    <div
      className={`glass rounded-2xl p-4 sm:p-6 animate-fadeIn ${
        loading ? "opacity-80 pointer-events-none" : ""
      }`}
    >
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
        {actions}
      </div>

      <div className="h-[220px] sm:h-[280px] lg:h-[320px]">
        {children}
      </div>
    </div>
  );
  
}
