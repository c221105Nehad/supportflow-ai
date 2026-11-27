
import {
  BarChart3,
  ChevronDown,
  CircleHelp,
  Headset,
  Inbox,
  Settings2,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { UserAvatar } from "@/components/common/user-avatar";
import { NavLink } from "react-router";

interface AppSidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
}

const mainNavigation = [
  {
    label: "Inbox",
    path: "/inbox",
    icon: Inbox,
    count: "12",
  },
  {
    label: "AI assistant",
    path: "/ai",
    icon: Sparkles,
    badge: "BETA",
  },
  {
    label: "Customers",
    path: "/customers",
    icon: Users,
  },
  {
    label: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
];

export function AppSidebar({
  mobileOpen,
  onClose,
}: AppSidebarProps) {
  return (
    <div
      className={`fixed inset-0 z-40 ${mobileOpen ? "visible" : "invisible"
        } lg:visible lg:relative lg:inset-auto lg:z-0 lg:w-64 lg:shrink-0`}
    >
      {/* Mobile overlay */}
      <button
        type="button"
        aria-label="Close navigation"
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/30 lg:hidden"
      />

      <aside
        className={`absolute inset-y-0 left-0 flex w-[260px] flex-col border-r border-slate-200 bg-white transition-transform duration-200 lg:sticky lg:top-0 lg:h-screen lg:w-64 lg:translate-x-0 ${mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Brand */}
        <div className="flex h-16 items-center justify-between border-b border-slate-100 px-5">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm shadow-indigo-600/20">
              <Headset size={20} strokeWidth={2.2} />
            </div>

            <div>
              <h1 className="text-[15px] font-bold tracking-tight text-slate-900">
                SupportFlow
              </h1>
              <p className="text-[10px] font-medium tracking-wider text-slate-400">
                AI WORKSPACE
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close sidebar"
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 lg:hidden"
          >
            <X size={18} />
          </button>
        </div>

        {/* Workspace selector */}
        <div className="px-4 pb-5 pt-5">
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-xs font-bold text-indigo-700">
              AC
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-slate-800">
                Acme Support
              </p>
              <p className="text-xs text-slate-400">
                Free workspace
              </p>
            </div>

            <ChevronDown size={16} className="text-slate-400" />
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex-1 px-3">
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
            Workspace
          </p>

          <nav className="space-y-1" aria-label="Main navigation">
            {mainNavigation.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex h-10 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors ${isActive
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`
                  }
                >
                  <Icon size={18} strokeWidth={1.8} />

                  <span className="flex-1">{item.label}</span>

                  {item.count && (
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-500">
                      {item.count}
                    </span>
                  )}

                  {item.badge && (
                    <span className="rounded bg-violet-50 px-1.5 py-0.5 text-[9px] font-bold tracking-wide text-violet-600">
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Settings */}
          <div className="mt-8">
            <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
              Preferences
            </p>

            <NavLink
              to="/settings"
              onClick={onClose}
              className={({ isActive }) =>
                `flex h-10 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors ${isActive
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`
              }
            >
              <Settings2 size={18} strokeWidth={1.8} />
              Settings
            </NavLink>
          </div>
        </div>

        {/* Help center */}
        <div className="mx-4 mb-4 rounded-xl bg-slate-50 p-3">
          <div className="mb-2 flex items-center gap-2 text-slate-700">
            <CircleHelp size={17} />
            <span className="text-xs font-semibold">
              Need a hand?
            </span>
          </div>

          <p className="text-[11px] leading-relaxed text-slate-500">
            Visit our help center to learn more about SupportFlow.
          </p>
        </div>

        {/* User profile */}
        <UserAvatar
          name="Alex Morgan"
          size="default"
          className="size-9 shrink-0"
          fallbackClassName="bg-slate-800 text-white"
        />
      </aside>
    </div>
  );
}
