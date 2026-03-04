import AppLayout from "../Components/layout/AppLayout";
import StatsGrid from "../Components/dashboard/StatsGrid";
import Toolbar from "../Components/dashboard/Toolbar";
import ScanTable from "../Components/dashboard/ScanTable";

const Dashboard = () => {
  return (
    <AppLayout>
      <h1 className="text-2xl lg:text-3xl font-semibold mb-6 lg:mb-8 text-gray-900 dark:text-gray-100">
        Dashboard
      </h1>

      <div className="space-y-6">
        <StatsGrid />
        <Toolbar />
        <ScanTable />
      </div>
    </AppLayout>
  );
};

export default Dashboard;