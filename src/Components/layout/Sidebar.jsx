import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Sidebar = () => {
  const { toggleTheme } = useTheme();

  const linkStyle =
    "block w-full px-3 py-2 rounded-lg text-sm transition";

  const navClass = ({ isActive }) =>
    `${linkStyle} ${isActive
      ? "bg-gray-100 dark:bg-[#1F1F1F] font-medium"
      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#1F1F1F]"
    }`;

  return (
    <div className="w-64 bg-white dark:bg-[#141414] border-r border-gray-200 dark:border-gray-800 min-h-screen flex flex-col p-6">

      <div className="flex items-center gap-3 mb-10">

        <div className="w-10 h-10 rounded-4xl bg-teal-500 flex items-center justify-center text-white font-bold text-lg">
          🫵🏻
        </div>

        <span className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          aps
        </span>

      </div>

      <nav className="flex flex-col gap-2 flex-1">

        <NavLink to="/dashboard" className={navClass}>
          Dashboard
        </NavLink>

        <NavLink to="/projects" className={navClass}>
          Projects
        </NavLink>

        <NavLink to="/scan/1" className={navClass}>
          Scans
        </NavLink>

        <NavLink to="/schedule" className={navClass}>
          Schedule
        </NavLink>

        <NavLink to="/notifications" className={navClass}>
          Notifications
        </NavLink>

        <NavLink to="/settings" className={navClass}>
          Settings
        </NavLink>

        <NavLink to="/support" className={navClass}>
          Support
        </NavLink>

      </nav>

      <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3 mb-4">

          {/* Profile Avatar */}
          <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-sm font-semibold text-gray-700 dark:text-gray-200">
            SL
          </div>

          {/* User Info */}
          <div className="flex flex-col text-sm">
            <span className="font-medium text-gray-900 dark:text-gray-100">
              admin@gmail.com
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-xs">
              Security Lead
            </span>
          </div>

        </div>
        <button
          onClick={toggleTheme}
          className="w-full px-3 py-2 rounded-lg bg-gray-100 dark:bg-[#1F1F1F] text-sm"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default Sidebar;