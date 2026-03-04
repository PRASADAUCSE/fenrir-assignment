import Sidebar from "./Sidebar";

const AppLayout = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#F5F5F5] dark:bg-[#111111] transition-colors duration-300 overflow-x-hidden">
      
      <Sidebar />

      <main className="flex-1 p-6 lg:p-10 text-gray-900 dark:text-gray-100 overflow-y-auto">
        {children}
      </main>

    </div>
  );
};

export default AppLayout;