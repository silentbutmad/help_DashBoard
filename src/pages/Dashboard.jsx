import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import {
  Ticket,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  TrendingUp,
  Users,
  UserCheck,
} from 'lucide-react';
import { analyticsApi } from '../services/analyticsApi';
import Card from '../components/ui/Card';
import Loader from '../components/ui/Loader';
import { TICKET_STATUS, PRIORITY } from '../utils/constants';

const StatCard = ({ title, value, icon: Icon, trend, color = 'primary' }) => {
  const colors = {
    primary: 'bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400',
    success: 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400',
    warning: 'bg-yellow-50 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400',
    danger: 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400',
    info: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
  };

  return (
    <Card hover className="relative overflow-hidden">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-2">{value}</p>
          {trend && (
            <p className="text-sm text-green-600 dark:text-green-400 mt-2 flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              {trend}
            </p>
          )}
        </div>
        <div className={`p-3 rounded-xl ${colors[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </Card>
  );
};

const Dashboard = () => {
  const { data: metricsData, isLoading: metricsLoading } = useQuery({
    queryKey: ['dashboardMetrics'],
    queryFn: () => analyticsApi.getDashboardMetrics(),
  });

  const { data: statusData, isLoading: statusLoading } = useQuery({
    queryKey: ['ticketsByStatus'],
    queryFn: () => analyticsApi.getTicketsByStatus(),
  });

  const { data: priorityData, isLoading: priorityLoading } = useQuery({
    queryKey: ['ticketsByPriority'],
    queryFn: () => analyticsApi.getTicketsByPriority(),
  });

  const metrics = metricsData?.data || {};
  const statusDistribution = statusData?.data || [];
  const priorityDistribution = priorityData?.data || [];

  if (metricsLoading) {
    return <Loader text="Loading dashboard..." />;
  }

  const statCards = [
    { title: 'Total Tickets', value: metrics.totalTickets || 0, icon: Ticket, color: 'primary' },
    { title: 'Open Tickets', value: metrics.statusBreakdown?.open || 0, icon: Clock, color: 'info' },
    { title: 'In Progress', value: metrics.statusBreakdown?.inProgress || 0, icon: AlertTriangle, color: 'warning' },
    { title: 'Resolved', value: metrics.statusBreakdown?.resolved || 0, icon: CheckCircle, color: 'success' },
    { title: 'Closed', value: metrics.statusBreakdown?.closed || 0, icon: XCircle, color: 'primary' },
    { title: 'Critical Priority', value: metrics.priorityBreakdown?.critical || 0, icon: AlertTriangle, color: 'danger' },
    { title: 'High Priority', value: metrics.priorityBreakdown?.high || 0, icon: TrendingUp, color: 'warning' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">Welcome back! Here's what's happening with your tickets.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <StatCard {...stat} />
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Tickets by Status</h3>
          {statusLoading ? (
            <div className="h-64 flex items-center justify-center">
              <Loader size="sm" text="Loading..." />
            </div>
          ) : (
            <div className="space-y-3">
              {statusDistribution.map((item) => (
                <div key={item.status} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">{item.status}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full"
                        style={{ width: `${(item.count / (metrics.totalTickets || 1)) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100 w-12 text-right">
                      {item.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Tickets by Priority</h3>
          {priorityLoading ? (
            <div className="h-64 flex items-center justify-center">
              <Loader size="sm" text="Loading..." />
            </div>
          ) : (
            <div className="space-y-3">
              {priorityDistribution.map((item) => (
                <div key={item.priority} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">{item.priority}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-red-600 h-2 rounded-full"
                        style={{ width: `${(item.count / (metrics.totalTickets || 1)) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100 w-12 text-right">
                      {item.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;