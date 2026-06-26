import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Ticket,
  Users,
  UserCog,
  FolderOpen,
  BarChart3,
  FileText,
  Bell,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { ROUTES } from '../../utils/constants';

const Sidebar = ({ isCollapsed, setIsCollapsed, isMobileOpen, setIsMobileOpen }) => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const isAdmin = user?.role === 'ADMIN';

  const adminMenuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: ROUTES.DASHBOARD },
    { 
      icon: Ticket, 
      label: 'Ticket Management',
      children: [
        { label: 'All Tickets', path: ROUTES.TICKETS },
        { label: 'Open Tickets', path: `${ROUTES.TICKETS}?status=OPEN` },
        { label: 'In Progress', path: `${ROUTES.TICKETS}?status=IN_PROGRESS` },
        { label: 'Resolved', path: `${ROUTES.TICKETS}?status=RESOLVED` },
        { label: 'Closed', path: `${ROUTES.TICKETS}?status=CLOSED` },
      ]
    },
    { icon: Users, label: 'Users', path: ROUTES.USERS },
    { icon: UserCog, label: 'Agents', path: ROUTES.AGENTS },
    { icon: FolderOpen, label: 'Categories', path: ROUTES.CATEGORIES },
    { icon: BarChart3, label: 'Reports', path: ROUTES.REPORTS },
    { icon: FileText, label: 'Analytics', path: ROUTES.ANALYTICS },
    { icon: Bell, label: 'Notifications', path: ROUTES.NOTIFICATIONS },
    { icon: Settings, label: 'Activity Logs', path: ROUTES.ACTIVITY_LOGS },
  ];

  const commonMenuItems = [
    { icon: Settings, label: 'Settings', path: ROUTES.SETTINGS },
    { icon: LayoutDashboard, label: 'Profile', path: ROUTES.PROFILE },
  ];

  const menuItems = isAdmin ? [...adminMenuItems, ...commonMenuItems] : commonMenuItems;

  const isActive = (path) => {
    if (path.includes('?')) {
      const [basePath] = path.split('?');
      return location.pathname === basePath;
    }
    return location.pathname === path;
  };

  const handleLogout = () => {
    logout();
  };

  const sidebarContent = (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <Ticket className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-gray-900 dark:text-gray-100">
              HelpDesk
            </span>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden lg:flex p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400"
        >
          {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
        <button
          onClick={() => setIsMobileOpen(false)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 scrollbar-thin">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.children ? (
                <div>
                  <div className={`sidebar-link ${isCollapsed ? 'justify-center' : ''} text-gray-700 dark:text-gray-300`}>
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    {!isCollapsed && <span>{item.label}</span>}
                  </div>
                  {!isCollapsed && (
                    <ul className="ml-8 mt-1 space-y-1">
                      {item.children.map((child, childIndex) => (
                        <li key={childIndex}>
                          <Link
                            to={child.path}
                            className={`sidebar-link ${isActive(child.path) ? 'sidebar-link-active' : 'sidebar-link-inactive'}`}
                            onClick={() => setIsMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`sidebar-link ${isActive(item.path) ? 'sidebar-link-active' : 'sidebar-link-inactive'}`}
                  onClick={() => setIsMobileOpen(false)}
                  title={isCollapsed ? item.label : ''}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {!isCollapsed && <span>{item.label}</span>}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <button
          onClick={handleLogout}
          className={`sidebar-link sidebar-link-inactive text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 ${isCollapsed ? 'justify-center' : ''}`}
          title={isCollapsed ? 'Logout' : ''}
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile sidebar backdrop */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 lg:hidden"
          >
            {sidebarContent}
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-30 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800
          transition-all duration-300 hidden lg:block
          ${isCollapsed ? 'w-20' : 'w-64'}
        `}
      >
        {sidebarContent}
      </aside>
    </>
  );
};

export default Sidebar;