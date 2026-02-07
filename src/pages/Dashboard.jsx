import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";

import TableSection from "../components/table/TableSection";
import ChartCard from "../components/ChartCard";
import RevenueAreaChart from "../components/RevenueAreaChart";
import StatsBarChart from "../components/StatsBarChart";
import CategoryDonutChart from "../components/CategoryDonutChart";
import KpiCard from "../components/KpiCard";
import KpiSkeleton from "../components/KpiSkeleton";
import RecentOrdersTable from "../components/table/RecentOrdersTable";

import {
  transformRevenueData,
  transformCategoryData,
} from "../utils/transformChartData";

import { transformOrdersData } from "../utils/transformOrdersData";

export default function Dashboard({ searchQuery = "" }) {

  /* ---------------- STATE ---------------- */

  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [kpis, setKpis] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [range, setRange] = useState("monthly");

  /* ---------------- FETCH DATA ---------------- */

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchProducts()
      .then((res) => {
        const productData = res?.products || [];

        setProducts(productData);
        setOrders(transformOrdersData(productData));

        /* KPI Generation */
        const generatedKpis = [
          {
            title: "Revenue",
            value: `$${(productData[0]?.price * 100 || 0).toLocaleString()}`,
            change: 12.5,
            progress: 75,
            color: "emerald",
          },
          {
            title: "Active Users",
            value: productData.length * 120,
            change: 8.2,
            progress: 60,
            color: "sky",
          },
          {
            title: "Orders",
            value: productData.length * 32,
            change: 15.3,
            progress: 80,
            color: "violet",
          },
          {
            title: "Growth",
            value: "18%",
            change: -2.1,
            progress: 35,
            color: "rose",
          },
        ];

        setKpis(generatedKpis);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load dashboard data");
        setLoading(false);
      });
  }, []);

  /* ---------------- DERIVED DATA ---------------- */

  const revenueData = transformRevenueData(products);
  const categoryData = transformCategoryData(products);

  const filteredRevenue =
    range === "weekly"
      ? revenueData.slice(0, 4)
      : revenueData;

  /* GLOBAL SEARCH FILTER */
  const filteredOrders = orders.filter((order) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;

    return (
      order.id.toLowerCase().includes(query) ||
      order.product.toLowerCase().includes(query) ||
      order.status.toLowerCase().includes(query) ||
      order.date.toLowerCase().includes(query) ||
      String(order.amount).includes(query)
    );
  });

  /* ---------------- UI ---------------- */

  return (
    <div className="space-y-6 px-4 sm:px-6 lg:px-0">

      {/* KPI SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <KpiSkeleton key={i} />
            ))
          : kpis.map((kpi, i) => (
              <KpiCard key={i} {...kpi} />
            ))}
      </div>

      {/* ERROR */}
      {error && (
        <div className="glass p-6 rounded-xl text-red-400">
          {error}
        </div>
      )}

      {/* CHARTS */}
      {!loading && !error && (
        <>
          <ChartCard
            title="Revenue Overview"
            actions={
              <div className="flex gap-2">
                <button
                  onClick={() => setRange("weekly")}
                  className={`px-3 py-1 rounded-md text-sm ${
                    range === "weekly"
                      ? "bg-sky-500 text-white"
                      : "bg-white/10 text-slate-300"
                  }`}
                >
                  Weekly
                </button>

                <button
                  onClick={() => setRange("monthly")}
                  className={`px-3 py-1 rounded-md text-sm ${
                    range === "monthly"
                      ? "bg-sky-500 text-white"
                      : "bg-white/10 text-slate-300"
                  }`}
                >
                  Monthly
                </button>
              </div>
            }
          >
            <RevenueAreaChart data={filteredRevenue} />
          </ChartCard>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard title="Monthly Orders">
              <StatsBarChart data={revenueData} />
            </ChartCard>

            <ChartCard title="Sales by Category">
              <CategoryDonutChart data={categoryData} />
            </ChartCard>
          </div>

          {/* RECENT ORDERS TABLE */}
          <TableSection title="Recent Orders">
            <RecentOrdersTable orders={filteredOrders} />
          </TableSection>
        </>
      )}
    </div>
  );
}
