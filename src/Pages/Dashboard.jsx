import AppLayout from "../Components/layout/AppLayout";
import StatsGrid from "../Components/dashboard/StatsGrid";
import Toolbar from "../Components/dashboard/Toolbar";
import ScanTable from "../Components/dashboard/ScanTable";

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