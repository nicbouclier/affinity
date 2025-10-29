"use client";

import { useCopilotReadable, useCopilotAction } from "@copilotkit/react-core";
import { useState } from "react";
import { TroubleshootingSteps } from "./TroubleshootingSteps";
import { ServiceStatus } from "./ServiceStatus";
import { SpeedTest } from "./SpeedTest";

export function AffinityChat() {
  const [userContext, setUserContext] = useState({
    location: "",
    deviceType: "desktop",
    issueType: "",
  });

  // Make user context readable to the AI
  useCopilotReadable({
    description: "User's current context and device information",
    value: userContext,
  });

  // Define custom actions
  useCopilotAction({
    name: "show_troubleshooting_ui",
    description: "Display an interactive troubleshooting interface with step-by-step instructions",
    parameters: [
      {
        name: "steps",
        type: "object[]",
        description: "Array of troubleshooting steps to display",
      },
      {
        name: "issue_type",
        type: "string",
        description: "Type of issue being diagnosed",
      },
    ],
    handler: async ({ steps, issue_type }) => {
      setUserContext((prev) => ({ ...prev, issueType: issue_type }));
      return { success: true, message: "Troubleshooting steps displayed" };
    },
  });

  useCopilotAction({
    name: "run_speed_test",
    description: "Run a simulated internet speed test",
    parameters: [],
    handler: async () => {
      // Simulate speed test
      const mockResults = {
        download: Math.random() * 100 + 50,
        upload: Math.random() * 50 + 10,
        ping: Math.random() * 30 + 5,
      };
      return mockResults;
    },
  });

  return (
    <div className="flex flex-col h-full w-full bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-purple-950 dark:to-gray-900">
      <header className="bg-gradient-to-r from-xfinity-purple to-xfinity-blue text-white p-6 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Affinity</h1>
          <p className="text-purple-100">Your intelligent assistant for support and troubleshooting</p>
        </div>
      </header>

      <main className="flex-1 overflow-auto p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-purple-100 dark:border-purple-900">
            <h2 className="text-xl font-semibold mb-4 text-xfinity-purple">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="p-4 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all shadow-md hover:shadow-lg">
                Internet Issues
              </button>
              <button className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg">
                Check Service Status
              </button>
              <button className="p-4 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all shadow-md hover:shadow-lg">
                Speed Test
              </button>
            </div>
          </div>

          {userContext.issueType && (
            <TroubleshootingSteps issueType={userContext.issueType} />
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceStatus />
            <SpeedTest />
          </div>
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-800 border-t border-purple-100 dark:border-purple-900 p-4 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>Powered by Claude AI | Affinity Assistant v0.1</p>
      </footer>
    </div>
  );
}
