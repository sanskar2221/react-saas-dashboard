export default function StatusBadge({ status }) {

  const styles = {
    Completed: "bg-emerald-500/20 text-emerald-400",
    Pending: "bg-yellow-500/20 text-yellow-400",
    Cancelled: "bg-rose-500/20 text-rose-400",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs ${styles[status]}`}>
      {status}
    </span>
  );
}
