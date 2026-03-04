import StatusBadge from "./StatusBadge";
import VulnerabilityBadges from "./VulnerabilityBadges";
import { useNavigate } from "react-router-dom";


const scans = [
  {
    id: 1,
    name: "Production API Scan",
    type: "Full Scan",
    status: "Completed",
    critical: 3,
    high: 5,
    medium: 8,
    low: 12,
    lastScan: "2 hours ago",
  },
  {
    id: 2,
    name: "Auth Service",
    type: "Quick Scan",
    status: "Failed",
    critical: 6,
    high: 2,
    medium: 4,
    low: 5,
    lastScan: "1 day ago",
  },
  {
    id: 1,
    name: "Production API Scan",
    type: "Full Scan",
    status: "Completed",
    critical: 3,
    high: 5,
    medium: 8,
    low: 12,
    lastScan: "2 hours ago",
  },
  {
    id: 2,
    name: "Auth Service",
    type: "Quick Scan",
    status: "Failed",
    critical: 6,
    high: 2,
    medium: 4,
    low: 5,
    lastScan: "1 day ago",
  },
  {
    id: 1,
    name: "Production API Scan",
    type: "Full Scan",
    status: "Completed",
    critical: 3,
    high: 5,
    medium: 8,
    low: 12,
    lastScan: "2 hours ago",
  },
  {
    id: 2,
    name: "Auth Service",
    type: "Quick Scan",
    status: "Failed",
    critical: 6,
    high: 2,
    medium: 4,
    low: 5,
    lastScan: "1 day ago",
  },
  
];

const ScanTable = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl shadow-sm border  border-gray-200 dark:border-gray-800 overflow-hidden">
       <div className="overflow-x-auto">
      <table className="min-w-[700px] w-full text-sm">
        <thead className="bg-gray-50 text-left text-gray-600">
          <tr>
            <th className="px-6 py-4">Scan Name</th>
            <th className="px-6 py-4">Type</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Vulnerabilities</th>
            <th className="px-6 py-4">Last Scan</th>
          </tr>
        </thead>

        <tbody>
          {scans.map((scan) => (
            <tr
              key={scan.id}
              onClick={() => navigate("/scan/1")}
              className="cursor-pointer hover:bg-gray-50 dark:hover:bg-[#1F1F1F] transition"

            >
              <td className="px-6 py-4 font-medium">{scan.name}</td>
              <td className="px-6 py-4">{scan.type}</td>
              <td className="px-6 py-4">
                <StatusBadge status={scan.status} />
              </td>
              <td className="px-6 py-4">
                <VulnerabilityBadges
                  critical={scan.critical}
                  high={scan.high}
                  medium={scan.medium}
                  low={scan.low}
                />
              </td>
              <td className="px-6 py-4 text-gray-500">
                {scan.lastScan}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default ScanTable;