import { Bell, Menu, Plus, Search } from "lucide-react";

export default function TopNavbar({ onMenuClick,
    searchQuery,
    setSearchQuery }) {
    return (
        <header className="
      fixed top-0 left-0 right-0
      z-50
     pt-4 pb-3 
      bg-bg/90 backdrop-blur
      border-b border-white/10
      flex items-center justify-between
      px-6
    ">
            {/* Left */}
            <div className="flex items-center gap-3">
                {/* Hamburger (mobile) */}
                <button
                    onClick={onMenuClick}
                    className="md:hidden p-2 rounded-lg hover:bg-white/20"
                >
                    <Menu size={22} />
                </button>

                <div>
                    <h1 className="md:px-10 text-[22px] font-bold ">
                        Dashboard
                    </h1>
                </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-3">
                {/* Search (desktop only) */}
                <div className="relative md:block">
                    <Search
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-700"
                    />
                    <input
                        placeholder="Search anything..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-9 pr-3 py-2 rounded-lg bg-slate-100 text-slate-700"
                    />
                </div>

                {/* New button (desktop) */}
                <button className="hidden md:flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700">
                    <Plus size={16} />
                    New
                </button>

                {/* New (mobile icon) */}
                <button className="md:hidden p-2 rounded-lg bg-indigo-600 text-white">
                    <Plus size={18} />
                </button>

                {/* Notifications */}
                <button className="relative p-2 rounded-lg hover:bg-white/20">
                    <Bell size={20} />
                    <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                        3
                    </span>
                </button>

                {/* Profile */}
                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                    </svg>
                    <div className="hidden md:block text-sm">
                        <p className="font-medium ">Alex Johnson</p>
                        <p className="text-xs ">Administrator</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
