
import { Badge } from "@/components/ui/badge";

import type { ConversationStatus } from "../types";

interface ConversationStatusBadgeProps {
  status: ConversationStatus;
}

const statusStyles: Record<ConversationStatus, string> = {
  "Needs reply":
    "border-amber-200 bg-amber-50 text-amber-700",

  Open:
    "border-indigo-200 bg-indigo-50 text-indigo-700",

  Resolved:
    "border-emerald-200 bg-emerald-50 text-emerald-700",
};

export function ConversationStatusBadge({
  status,
}: ConversationStatusBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${statusStyles[status]}`}
    >
      {status}
    </Badge>
  );
}
