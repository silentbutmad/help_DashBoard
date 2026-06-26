import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import DashboardLayout from './components/layout/DashboardLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Tickets from './pages/Tickets';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Loader from './components/ui/Loader';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <Loader text="Loading..." />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const PublicRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <Loader text="Loading..." />;
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="tickets" element={<Tickets />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="users" element={<div className="text-center py-12 text-gray-500">Users page - Coming soon</div>} />
        <Route path="agents" element={<div className="text-center py-12 text-gray-500">Agents page - Coming soon</div>} />
        <Route path="categories" element={<div className="text-center py-12 text-gray-500">Categories page - Coming soon</div>} />
        <Route path="reports" element={<div className="text-center py-12 text-gray-500">Reports page - Coming soon</div>} />
        <Route path="analytics" element={<div className="text-center py-12 text-gray-500">Analytics page - Coming soon</div>} />
        <Route path="notifications" element={<div className="text-center py-12 text-gray-500">Notifications page - Coming soon</div>} />
        <Route path="activity-logs" element={<div className="text-center py-12 text-gray-500">Activity Logs page - Coming soon</div>} />
      </Route>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ThemeProvider>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </ThemeProvider>
      </Router>
    </QueryClientProvider>
  );
};

export default App;