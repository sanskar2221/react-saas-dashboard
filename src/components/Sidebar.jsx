import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart3,
  Users as UsersIcon,
  FileText,
  Plug,
  X,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Analytics", path: "/analytics", icon: BarChart3 },
  { name: "Users", path: "/users", icon: UsersIcon },
  { name: "Reports", path: "/reports", icon: FileText },
  { name: "Integrations", path: "/integrations", icon: Plug },
];

export default function Sidebar({ open, setOpen }) {
  return (
    <>
      {/* Overlay (mobile only) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

<aside
  className={`
    fixed mt-4 top-16 left-2 w-64 
    z-40
    glass p-6
    transition-transform duration-300
    ${open ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0
  `}
>
        {/* Mobile close button */}
        <div className="flex items-center justify-between md:hidden">
          <h2 className="text-lg font-semibold">Welcome Back, Alex!</h2>
          <button onClick={() => setOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {/* Desktop title */}
        <h2 className="text-lg font-semibold hidden md:block">
           Welcome Back, Alex!
        </h2>

        <nav className="p-3 sm:p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg transition-all
                   ${isActive
                    ? "bg-sky-500/50 text-white"
                    : "hover:bg-white/10 text-white"
                  }`
                }
              >
                <Icon size={18} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
