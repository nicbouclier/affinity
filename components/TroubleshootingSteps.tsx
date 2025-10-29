"use client";

import { useState, useEffect } from "react";
import { CheckCircle, Circle, Loader2 } from "lucide-react";

interface Step {
  title: string;
  description: string;
  completed: boolean;
  active: boolean;
}

export function TroubleshootingSteps({ issueType }: { issueType: string }) {
  const [steps, setSteps] = useState<Step[]>([
    { title: "Identifying the issue", description: "Analyzing your connection...", completed: false, active: true },
    { title: "Running diagnostics", description: "Checking network status...", completed: false, active: false },
    { title: "Applying fixes", description: "Implementing solutions...", completed: false, active: false },
    { title: "Verifying resolution", description: "Testing connection...", completed: false, active: false },
  ]);

  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 1;
        if (newProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return newProgress;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 25 && currentStep === 0) {
      setSteps((prev) =>
        prev.map((step, idx) =>
          idx === 0 ? { ...step, completed: true, active: false } : idx === 1 ? { ...step, active: true } : step
        )
      );
      setCurrentStep(1);
    } else if (progress >= 50 && currentStep === 1) {
      setSteps((prev) =>
        prev.map((step, idx) =>
          idx === 1 ? { ...step, completed: true, active: false } : idx === 2 ? { ...step, active: true } : step
        )
      );
      setCurrentStep(2);
    } else if (progress >= 75 && currentStep === 2) {
      setSteps((prev) =>
        prev.map((step, idx) =>
          idx === 2 ? { ...step, completed: true, active: false } : idx === 3 ? { ...step, active: true } : step
        )
      );
      setCurrentStep(3);
    } else if (progress >= 100 && currentStep === 3) {
      setSteps((prev) => prev.map((step, idx) => (idx === 3 ? { ...step, completed: true, active: false } : step)));
    }
  }, [progress, currentStep]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-purple-100 dark:border-purple-900">
      <h2 className="text-xl font-semibold mb-4 text-xfinity-purple">Troubleshooting: {issueType}</h2>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-xfinity-purple to-xfinity-blue h-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              {step.completed ? (
                <CheckCircle className="w-6 h-6 text-green-500" />
              ) : step.active ? (
                <Loader2 className="w-6 h-6 text-xfinity-purple animate-spin" />
              ) : (
                <Circle className="w-6 h-6 text-gray-300 dark:text-gray-600" />
              )}
            </div>
            <div className="flex-1">
              <h3
                className={`font-medium ${
                  step.completed
                    ? "text-green-600 dark:text-green-400"
                    : step.active
                    ? "text-xfinity-purple"
                    : "text-gray-400 dark:text-gray-600"
                }`}
              >
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {progress === 100 && (
        <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
          <p className="text-green-800 dark:text-green-200 font-medium">
            Diagnostics complete! Your issue has been identified and resolved.
          </p>
        </div>
      )}
    </div>
  );
}
