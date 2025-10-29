"use client";

import { useState } from "react";
import { Activity, Download, Upload, Wifi } from "lucide-react";

export function SpeedTest() {
  const [testing, setTesting] = useState(false);
  const [results, setResults] = useState<{
    download: number;
    upload: number;
    ping: number;
  } | null>(null);

  const runSpeedTest = () => {
    setTesting(true);
    setResults(null);

    // Simulate speed test
    setTimeout(() => {
      setResults({
        download: Math.random() * 200 + 50,
        upload: Math.random() * 50 + 10,
        ping: Math.random() * 30 + 5,
      });
      setTesting(false);
    }, 3000);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-purple-100 dark:border-purple-900">
      <h2 className="text-xl font-semibold mb-4 text-xfinity-purple flex items-center gap-2">
        <Activity className="w-5 h-5" />
        Speed Test
      </h2>

      <div className="space-y-4">
        {!results && !testing && (
          <button
            onClick={runSpeedTest}
            className="w-full py-8 bg-gradient-to-r from-xfinity-purple to-xfinity-blue text-white rounded-xl hover:opacity-90 transition-all text-lg font-semibold shadow-lg hover:shadow-xl"
          >
            Start Speed Test
          </button>
        )}

        {testing && (
          <div className="py-8 text-center">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-xfinity-purple mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Testing your connection...</p>
          </div>
        )}

        {results && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-3 mb-2">
                  <Download className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-sm font-medium text-green-800 dark:text-green-200">Download</span>
                </div>
                <div className="text-3xl font-bold text-green-700 dark:text-green-300">
                  {results.download.toFixed(1)} <span className="text-lg">Mbps</span>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-3 mb-2">
                  <Upload className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-medium text-blue-800 dark:text-blue-200">Upload</span>
                </div>
                <div className="text-3xl font-bold text-blue-700 dark:text-blue-300">
                  {results.upload.toFixed(1)} <span className="text-lg">Mbps</span>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-3 mb-2">
                  <Wifi className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm font-medium text-purple-800 dark:text-purple-200">Ping</span>
                </div>
                <div className="text-3xl font-bold text-purple-700 dark:text-purple-300">
                  {results.ping.toFixed(0)} <span className="text-lg">ms</span>
                </div>
              </div>
            </div>

            <button
              onClick={runSpeedTest}
              className="w-full py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
            >
              Run Again
            </button>
          </div>
        )}

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            Speed test results are estimates and may vary based on network conditions
          </p>
        </div>
      </div>
    </div>
  );
}
