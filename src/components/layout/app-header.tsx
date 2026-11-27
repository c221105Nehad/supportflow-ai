
import { useState } from "react";
import { Bell, Menu } from "lucide-react";

interface AppHeaderProps {
  title: string;
  onMenuClick: () => void;
}

export function AppHeader({
  title,
  onMenuClick,
}: AppHeaderProps) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
      {/* Left side */}
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open navigation"
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
        >
          <Menu size={20} />
        </button>

        <div>
          <p className="hidden text-[11px] font-medium text-slate-400 sm:block">
            Acme Support / Workspace
          </p>

          <h2 className="text-sm font-semibold text-slate-900">
            {title}
          </h2>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Notifications */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setNotificationsOpen((open) => !open)}
            aria-label="Toggle notifications"
            aria-expanded={notificationsOpen}
            className="relative rounded-lg border border-slate-200 p-2 text-slate-600 transition-colors hover:bg-slate-50"
          >
            <Bell size={18} />

            <span className="absolute right-1.5 top-1.5 size-2 rounded-full border-2 border-white bg-indigo-600" />
          </button>

          {notificationsOpen && (
            <div
              role="status"
              className="absolute right-0 top-12 z-50 w-64 rounded-xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/10"
            >
              <p className="text-sm font-semibold text-slate-900">
                Notifications
              </p>

              <p className="mt-1 text-xs leading-relaxed text-slate-500">
                You're all caught up. New workspace updates will appear here.
              </p>
            </div>
          )}
        </div>

        {/* Profile avatar */}
        <div
          className="flex size-9 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700"
          aria-label="User profile: Alex Morgan"
          title="Alex Morgan"
        >
          AM
        </div>
      </div>
    </header>
  );
}
