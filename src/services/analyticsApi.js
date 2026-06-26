import api from '../utils/axios';

export const analyticsApi = {
  getTotalTickets: async () => {
    const response = await api.get('/support/analytics/total');
    return response.data;
  },

  getTicketsByStatus: async () => {
    const response = await api.get('/support/analytics/status');
    return response.data;
  },

  getTicketsByPriority: async () => {
    const response = await api.get('/support/analytics/priority');
    return response.data;
  },

  getTicketsByIssueType: async () => {
    const response = await api.get('/support/analytics/issue-type');
    return response.data;
  },

  getAverageResolutionTime: async () => {
    const response = await api.get('/support/analytics/resolution-time');
    return response.data;
  },

  getDashboardMetrics: async () => {
    const response = await api.get('/support/analytics/dashboard');
    return response.data;
  },
};