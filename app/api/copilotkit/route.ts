import {
  CopilotRuntime,
  AnthropicAdapter,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";
import { NextRequest } from "next/server";

const runtime = new CopilotRuntime({
  actions: [
    {
      name: "diagnose_internet",
      description: "Diagnose internet connectivity issues and provide troubleshooting steps",
      parameters: [
        {
          name: "issue_type",
          type: "string",
          description: "Type of internet issue: slow, disconnected, intermittent, or other",
          required: true,
        },
      ],
      handler: async ({ issue_type }) => {
        // Simulate internet diagnostics
        const troubleshootingSteps = {
          slow: [
            "Check your internet speed at speedtest.net",
            "Restart your modem and router",
            "Move closer to the router or use an ethernet cable",
            "Check for bandwidth-heavy applications",
            "Consider upgrading your internet plan",
          ],
          disconnected: [
            "Check if the modem lights are on",
            "Restart your modem and router (wait 30 seconds)",
            "Check cable connections",
            "Verify account is active and bill is paid",
            "Contact support if issue persists",
          ],
          intermittent: [
            "Check for signal interference",
            "Update router firmware",
            "Change WiFi channel",
            "Check for loose cable connections",
            "Monitor connection during different times of day",
          ],
          other: [
            "Describe your issue in more detail",
            "Run a basic connectivity test",
            "Check device-specific settings",
            "Try connecting another device",
          ],
        };

        return {
          issue_type,
          steps: troubleshootingSteps[issue_type as keyof typeof troubleshootingSteps] || troubleshootingSteps.other,
          estimated_time: "5-15 minutes",
        };
      },
    },
    {
      name: "check_service_status",
      description: "Check the status of services in a specific area",
      parameters: [
        {
          name: "zip_code",
          type: "string",
          description: "ZIP code to check service status",
          required: true,
        },
      ],
      handler: async ({ zip_code }) => {
        // Simulate service status check
        return {
          zip_code,
          status: "operational",
          message: "All services are operating normally in your area.",
          last_outage: "None in the past 30 days",
        };
      },
    },
  ],
});

const serviceAdapter = new AnthropicAdapter({
  apiKey: process.env.ANTHROPIC_API_KEY,
  model: "claude-3-haiku-20240307",
});

export const POST = async (req: NextRequest) => {
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    serviceAdapter,
    endpoint: "/api/copilotkit",
  });

  return handleRequest(req);
};
