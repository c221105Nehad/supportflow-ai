
import { Bell, Menu } from "lucide-react";
import { Link } from "react-router";

import { UserAvatar } from "@/components/common/user-avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface AppHeaderProps {
  title: string;
  onMenuClick: () => void;
}

export function AppHeader({
  title,
  onMenuClick,
}: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur-xl sm:px-6 lg:px-8">

      {/* Left section */}
      <div className="flex items-center gap-3">
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

      {/* Right section */}
      <div className="flex items-center gap-3">

        {/* Notifications dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger
            type="button"
            aria-label="Notifications"
            className="relative flex size-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50"
          >
            <Bell size={18} />

            <span className="absolute right-1.5 top-1.5 size-2 rounded-full border-2 border-white bg-indigo-600" />
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-72">
            <DropdownMenuGroup>
              <DropdownMenuLabel>
                Notifications
              </DropdownMenuLabel>

              <DropdownMenuItem disabled>
                You're all caught up. New workspace updates will appear here.
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User profile dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger
            type="button"
            aria-label="Open user menu"
            className="rounded-full outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <UserAvatar
              name="Alex Morgan"
              size="default"
              className="size-9"
              fallbackClassName="bg-indigo-100 text-indigo-700"
            />
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-52">
            <DropdownMenuGroup>
              <DropdownMenuLabel>
                Alex Morgan

                <span className="block text-xs font-normal text-muted-foreground">
                  Workspace administrator
                </span>
              </DropdownMenuLabel>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuItem render={<Link to="/settings" />}>
                Account settings
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </header>
  );
}
