
import { useState } from "react";
import { Outlet, useLocation } from "react-router";

import { AppHeader } from "./app-header";
import { AppSidebar } from "./app-sidebar";

const pageTitles: Record<string, string> = {
  "/inbox": "Inbox",
  "/ai": "AI Assistant",
  "/customers": "Customers",
  "/analytics": "Analytics",
  "/settings": "Settings",
};

export function AppShell() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  const pageTitle = pageTitles[location.pathname] ?? "Inbox";

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900">
      <AppSidebar
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <AppHeader
          title={pageTitle}
          onMenuClick={() => setMobileOpen(true)}
        />

        <main className="min-h-0 flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-[1440px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
