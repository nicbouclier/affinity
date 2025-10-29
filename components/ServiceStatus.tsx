"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, MapPin } from "lucide-react";

export function ServiceStatus() {
  const [zipCode, setZipCode] = useState("");
  const [status, setStatus] = useState<{
    checked: boolean;
    operational: boolean;
    message: string;
  } | null>(null);

  const checkStatus = () => {
    // Simulate API call
    setTimeout(() => {
      setStatus({
        checked: true,
        operational: Math.random() > 0.2, // 80% chance of operational
        message: "All services operating normally in your area",
      });
    }, 1000);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-purple-100 dark:border-purple-900">
      <h2 className="text-xl font-semibold mb-4 text-xfinity-purple flex items-center gap-2">
        <MapPin className="w-5 h-5" />
        Service Status
      </h2>

      <div className="space-y-4">
        <div>
          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Enter your ZIP code
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              id="zipCode"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              placeholder="12345"
              maxLength={5}
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-xfinity-purple focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
            <button
              onClick={checkStatus}
              disabled={zipCode.length !== 5}
              className="px-6 py-2 bg-gradient-to-r from-xfinity-purple to-xfinity-blue text-white rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Check
            </button>
          </div>
        </div>

        {status?.checked && (
          <div
            className={`p-4 rounded-lg border ${
              status.operational
                ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
            }`}
          >
            <div className="flex items-start gap-3">
              {status.operational ? (
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
              )}
              <div>
                <h3
                  className={`font-medium ${
                    status.operational ? "text-green-800 dark:text-green-200" : "text-red-800 dark:text-red-200"
                  }`}
                >
                  {status.operational ? "All Systems Operational" : "Service Disruption Detected"}
                </h3>
                <p
                  className={`text-sm mt-1 ${
                    status.operational ? "text-green-700 dark:text-green-300" : "text-red-700 dark:text-red-300"
                  }`}
                >
                  {status.message}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="text-2xl font-bold text-xfinity-purple">99.9%</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Uptime</div>
          </div>
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="text-2xl font-bold text-xfinity-blue">24/7</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}
