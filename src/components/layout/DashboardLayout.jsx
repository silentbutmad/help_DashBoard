import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Bell } from 'lucide-react';

const DashboardLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isNotificationDrawerOpen, setIsNotificationDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
        isMobileOpen={isMobileSidebarOpen}
        setIsMobileOpen={setIsMobileSidebarOpen}
      />
      
      <div className={`transition-all duration-300 ${isSidebarCollapsed ? 'lg:pl-20' : 'lg:pl-64'}`}>
        <Navbar
          onMenuClick={() => setIsMobileSidebarOpen(true)}
          onNotificationClick={() => setIsNotificationDrawerOpen(true)}
          notificationCount={3}
        />
        
        <main className="p-4 lg:p-8">
          <Outlet />
        </main>
      </div>

      {/* Notification Drawer */}
      {isNotificationDrawerOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsNotificationDrawerOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-900 shadow-xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Notifications</h2>
              <button
                onClick={() => setIsNotificationDrawerOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                ✕
              </button>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">New ticket assigned</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Ticket #1234 has been assigned to you</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">2 minutes ago</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Ticket status updated</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Ticket #1233 is now resolved</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">1 hour ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;