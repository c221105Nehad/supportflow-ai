
import { Navigate, createBrowserRouter } from "react-router";

import App from "@/App";
import { PlaceholderPage } from "@/app/placeholder-page";
import { InboxPage } from "@/features/inbox/pages/inbox-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/inbox" replace />,
      },
      {
        path: "inbox",
        element: <InboxPage />,
      },
      {
        path: "ai",
        element: (
          <PlaceholderPage
            title="AI Assistant"
            description="AI-powered response suggestions, conversation summaries, and intelligent support tools will live here."
          />
        ),
      },
      {
        path: "customers",
        element: (
          <PlaceholderPage
            title="Customer Management"
            description="Manage customer profiles, interaction history, and customer information."
          />
        ),
      },
      {
        path: "analytics",
        element: (
          <PlaceholderPage
            title="Analytics"
            description="Monitor support performance, response times, resolution rates, and customer satisfaction."
          />
        ),
      },
      {
        path: "settings",
        element: (
          <PlaceholderPage
            title="Workspace Settings"
            description="Manage your workspace, team members, preferences, and integrations."
          />
        ),
      },
    ],
  },
]);
