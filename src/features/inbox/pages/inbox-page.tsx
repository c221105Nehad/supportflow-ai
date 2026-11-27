
import { useState } from "react";

import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Inbox,
  MessageSquareText,
  Search,
  Sparkles,
  Users,
} from "lucide-react";

import { UserAvatar } from "@/components/common/user-avatar";
import { Input } from "@/components/ui/input";

import { ConversationStatusBadge } from "../components/conversation-status-badge";
import type { ConversationStatus } from "../types";

type Conversation = {
  id: number;
  name: string;
  initials: string;
  subject: string;
  preview: string;
  time: string;
  status: ConversationStatus;
  avatar: string;
};

const conversations: Conversation[] = [
  {
    id: 1,
    name: "Emily Carter",
    initials: "EC",
    subject: "Order #2048 hasn't arrived yet",
    preview: "I've been waiting since Tuesday. Could you check the delivery?",
    time: "4m ago",
    status: "Needs reply",
    avatar: "bg-rose-100 text-rose-700",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    initials: "MJ",
    subject: "Unable to update my payment method",
    preview: "The save button keeps giving me an unexpected error.",
    time: "18m ago",
    status: "Open",
    avatar: "bg-blue-100 text-blue-700",
  },
  {
    id: 3,
    name: "Olivia Chen",
    initials: "OC",
    subject: "Question about the Pro plan",
    preview: "Could you clarify whether the annual plan includes priority support?",
    time: "42m ago",
    status: "Needs reply",
    avatar: "bg-amber-100 text-amber-700",
  },
  {
    id: 4,
    name: "Noah Williams",
    initials: "NW",
    subject: "Thanks for resolving the login issue",
    preview: "That fixed it. I appreciate your help!",
    time: "1h ago",
    status: "Resolved",
    avatar: "bg-emerald-100 text-emerald-700",
  },
];

const stats = [
  {
    label: "Open conversations",
    value: "24",
    change: "+8.2%",
    note: "vs. last week",
    icon: Inbox,
    iconStyle: "bg-indigo-50 text-indigo-600",
  },
  {
    label: "Waiting on your team",
    value: "08",
    change: "3 urgent",
    note: "need attention",
    icon: Clock3,
    iconStyle: "bg-amber-50 text-amber-600",
  },
  {
    label: "Resolved today",
    value: "36",
    change: "+12.5%",
    note: "vs. yesterday",
    icon: CheckCircle2,
    iconStyle: "bg-emerald-50 text-emerald-600",
  },
];

const filters = ["All", "Needs reply", "Open", "Resolved"] as const;

type Filter = (typeof filters)[number];

export function InboxPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConversations = conversations.filter((conversation) => {
    const matchesFilter =
      activeFilter === "All" || conversation.status === activeFilter;

    const query = searchQuery.trim().toLowerCase();

    const matchesSearch =
      !query ||
      conversation.name.toLowerCase().includes(query) ||
      conversation.subject.toLowerCase().includes(query);

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-7">
      {/* Page introduction */}
      <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            WORKSPACE ACTIVE
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Your inbox at a glance
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Keep track of customer conversations and what needs your attention.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Users size={15} />
          Your support team
        </div>
      </section>

      {/* Summary cards */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <article
              key={stat.label}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/[0.02]"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-slate-500">
                  {stat.label}
                </p>

                <div className={`flex size-9 items-center justify-center rounded-lg ${stat.iconStyle}`}>
                  <Icon size={18} />
                </div>
              </div>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-bold tracking-tight text-slate-900">
                  {stat.value}
                </span>

                <ArrowUpRight size={15} className="text-emerald-600" />
                <span className="text-[11px] font-semibold text-emerald-600">
                  {stat.change}
                </span>
              </div>

              <p className="mt-1 text-[11px] text-slate-400">
                {stat.note}
              </p>
            </article>
          );
        })}
      </section>

      {/* Conversations */}
      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm shadow-slate-900/[0.02]">
        <div className="flex flex-col gap-4 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-sm font-bold text-slate-900">
              Recent conversations
            </h2>
            <p className="mt-1 text-xs text-slate-400">
              A quick look at your latest customer activity.
            </p>
          </div>

          <div className="relative w-full sm:w-64">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <Input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search conversations..."
              aria-label="Search conversations"
              className="h-9 w-full border-slate-200 bg-slate-50 pl-9 text-xs text-slate-700 focus-visible:bg-white"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-5 overflow-x-auto border-b border-slate-100 px-5">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`relative shrink-0 py-3 text-xs font-semibold transition-colors ${activeFilter === filter
                  ? "text-indigo-700"
                  : "text-slate-400 hover:text-slate-700"
                }`}
            >
              {filter}

              {activeFilter === filter && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-indigo-600" />
              )}
            </button>
          ))}
        </div>

        {/* Conversation list */}
        <div>
          {filteredConversations.length > 0 ? (
            filteredConversations.map((conversation) => (
              <article
                key={conversation.id}
                className="flex flex-col gap-3 border-b border-slate-100 px-5 py-4 last:border-b-0 sm:flex-row sm:items-center"
              >
                <UserAvatar
                  name={conversation.name}
                  size="default"
                  className="size-10 shrink-0"
                  fallbackClassName={`text-xs font-bold ${conversation.avatar}`}
                />

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xs font-semibold text-slate-900">
                      {conversation.name}
                    </h3>

                    <span className="text-[10px] text-slate-400">
                      {conversation.time}
                    </span>
                  </div>

                  <p className="mt-1 truncate text-xs font-medium text-slate-700">
                    {conversation.subject}
                  </p>

                  <p className="mt-1 truncate text-[11px] text-slate-400">
                    {conversation.preview}
                  </p>
                </div>

                <div className="flex shrink-0 items-center sm:justify-end">
                  <ConversationStatusBadge status={conversation.status} />
                </div>
              </article>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center px-5 py-14 text-center">
              <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
                <MessageSquareText size={20} />
              </div>

              <p className="text-sm font-semibold text-slate-700">
                No conversations found
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Try changing the filters or search query.
              </p>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/70 px-5 py-3">
          <span className="text-[11px] text-slate-400">
            Showing {filteredConversations.length} of {conversations.length} sample conversations
          </span>

          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-indigo-600">
            <Sparkles size={13} />
            AI-assisted workspace
          </span>
        </div>
      </section>
    </div>
  );
}
