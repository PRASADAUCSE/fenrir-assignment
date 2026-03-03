import AppLayout from "../components/layout/AppLayout";
import StatsGrid from "../components/dashboard/StatsGrid";
import Toolbar from "../components/dashboard/Toolbar";
import ScanTable from "../components/dashboard/ScanTable";

const Dashboard = () => {
  return (
    <AppLayout>
      <h1 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-gray-100">
        Dashboard
      </h1>

      <StatsGrid />
      <Toolbar />
      <ScanTable />
    </AppLayout>
  );
};

export default Dashboard;