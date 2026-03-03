import AppLayout from "../Components/layout/AppLayout";
import { useState } from "react";

const ScanDetail = () => {
  const [activeTab, setActiveTab] = useState("activity");
  const [currentStep] = useState(0);

  return (
    <AppLayout>
      {/* Page Title */}
      <h1 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
        Active Scan
      </h1>

      {/* ================= TOP PROGRESS SECTION ================= */}
      <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 mb-8">

        <div className="flex items-center justify-between mb-6">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-6">

            {/* Circular Progress */}
            <div className="relative w-20 h-20">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="40"
                  cy="40"
                  r="35"
                  stroke="#2d2d2d"
                  strokeWidth="6"
                  fill="none"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="35"
                  stroke="#0CC8A8"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray="220"
                  strokeDashoffset="220"
                  strokeLinecap="round"
                />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-900 dark:text-gray-100">
                0%
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Status
              </p>
              <h2 className="text-lg font-semibold text-teal-600">
                In Progress
              </h2>
            </div>
          </div>

          {/* STEP TRACKER */}
          <div className="flex items-center gap-8 text-sm">
            {["Spidering", "Mapping", "Testing", "Validating", "Reporting"].map(
              (step, index) => {
                const isActive = index === currentStep;

                return (
                  <div key={step} className="flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        isActive
                          ? "bg-teal-500"
                          : "bg-gray-300 dark:bg-gray-700"
                      }`}
                    />
                    <span
                      className={`${
                        isActive
                          ? "text-teal-600 font-medium"
                          : "text-gray-400 dark:text-gray-500"
                      }`}
                    >
                      {step}
                    </span>
                  </div>
                );
              }
            )}
          </div>
        </div>

        {/* METADATA */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-sm text-gray-600 dark:text-gray-400">
          <p>Scan Type: Full Scan</p>
          <p>Targets: 3</p>
          <p>Started At: 10:45 AM</p>
          <p>Credentials: Yes</p>
          <p>Files: 2</p>
          <p>Checklists: 5</p>
        </div>
      </div>

      {/* ================= BOTTOM SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* CONSOLE */}
        <div className="lg:col-span-2 bg-white dark:bg-[#1A1A1A] rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">

          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#141414]">
            <div className="flex gap-6 text-sm font-medium">
              <button
                onClick={() => setActiveTab("activity")}
                className={`pb-1 ${
                  activeTab === "activity"
                    ? "text-teal-600 border-b-2 border-teal-500"
                    : "text-gray-400 dark:text-gray-500 hover:text-gray-600"
                }`}
              >
                Activity Log
              </button>

              <button
                onClick={() => setActiveTab("verification")}
                className={`pb-1 ${
                  activeTab === "verification"
                    ? "text-teal-600 border-b-2 border-teal-500"
                    : "text-gray-400 dark:text-gray-500 hover:text-gray-600"
                }`}
              >
                Verification Loops
              </button>
            </div>

            <button className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700">
              Export Report
            </button>
          </div>

          {/* Terminal */}
          <div className="bg-[#0F0F0F] text-gray-300 font-mono text-xs p-6 h-96 overflow-y-auto space-y-2">
            {activeTab === "activity" && (
              <>
                <p>[10:45:02] Starting scan...</p>
                <p>[10:45:05] Spidering /auth/login</p>
                <p>[10:45:09] Header anomaly detected</p>
              </>
            )}

            {activeTab === "verification" && (
              <>
                <p>[10:46:01] Verifying response hash</p>
                <p>[10:46:05] Cross-checking validation rules</p>
                <p>[10:46:09] Integrity confirmed</p>
              </>
            )}
          </div>
        </div>

        {/* FINDING LOG */}
        <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 h-96 overflow-y-auto">
          <h2 className="text-sm font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Finding Log
          </h2>

          <div className="space-y-4">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-4 hover:shadow-sm transition">
              <div className="flex justify-between mb-2">
                <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                  Critical
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  10:45:12
                </span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                Authorization Header Misconfiguration
              </h3>
              <p className="text-xs text-teal-600 mb-1">/auth/login</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Sensitive token exposed through improperly validated header configuration.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= STATUS BAR ================= */}
      <div className="mt-8 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-800 rounded-xl px-6 py-4 flex justify-between text-sm text-gray-600 dark:text-gray-400">
        <p>Sub-agents: 4</p>
        <p>Parallel Executions: 12</p>
        <p>Operations: 187</p>
        <p>
          Critical: <span className="text-red-500 font-medium">3</span> |
          High: <span className="text-orange-500 font-medium">5</span> |
          Medium: <span className="text-yellow-500 font-medium">8</span>
        </p>
      </div>
    </AppLayout>
  );
};

export default ScanDetail;