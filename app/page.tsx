"use client";

import { CopilotKit } from "@copilotkit/react-core";
import { CopilotSidebar } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import { AffinityChat } from "@/components/AffinityChat";

export default function Home() {
  return (
    <CopilotKit
      runtimeUrl="/api/copilotkit"
      agent="affinity_agent"
    >
      <div className="flex h-screen w-full">
        <CopilotSidebar
          defaultOpen={true}
          clickOutsideToClose={false}
          labels={{
            title: "Affinity Assistant",
            initial: "Hi! I'm Affinity, your AI assistant. How can I help you today?",
          }}
        >
          <AffinityChat />
        </CopilotSidebar>
      </div>
    </CopilotKit>
  );
}
