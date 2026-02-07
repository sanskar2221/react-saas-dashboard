import StatusBadge from "../table/StatusBadge";

export default function RecentOrdersTable({ orders }) {

  if (!orders || orders.length === 0) {
    return (
      <div className="text-slate-400 text-center py-6">
        No orders found
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="text-slate-400 border-b border-white/10">
          <tr>
            <th className="text-left py-3">Order ID</th>
            <th className="text-left py-3">Product</th>
            <th className="text-left py-3">Amount</th>
            <th className="text-left py-3">Status</th>
            <th className="text-left py-3">Date</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b border-white/5 hover:bg-white/5">
              <td className="py-3">{order.id}</td>
              <td>{order.product}</td>
              <td>{order.amount}</td>
              <td>
                <StatusBadge status={order.status} />
              </td>
              <td>{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
