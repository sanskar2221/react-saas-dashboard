
export default function TableSection({ title, children }) {
  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>

      {children}
    </div>
  );
}
