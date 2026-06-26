import api from '../utils/axios';

export const supportApi = {
  // Tickets
  createTicket: async (ticketData) => {
    const response = await api.post('/support/tickets', ticketData);
    return response.data;
  },

  getUserTickets: async (userId, params = {}) => {
    const response = await api.get(`/support/tickets/user/${userId}`, { params });
    return response.data;
  },

  getTicketById: async (ticketId) => {
    const response = await api.get(`/support/tickets/${ticketId}`);
    return response.data;
  },

  updateTicketStatus: async (ticketId, status) => {
    const response = await api.patch(`/support/tickets/${ticketId}/status`, { status });
    return response.data;
  },

  assignTicket: async (ticketId, agentId) => {
    const response = await api.patch(`/support/tickets/${ticketId}/assign`, { agentId });
    return response.data;
  },

  // Comments
  addComment: async (ticketId, message) => {
    const response = await api.post(`/support/tickets/${ticketId}/comments`, { message });
    return response.data;
  },

  getComments: async (ticketId, params = {}) => {
    const response = await api.get(`/support/tickets/${ticketId}/comments`, { params });
    return response.data;
  },

  // Help Center
  getHelpCenter: async () => {
    const response = await api.get('/support/help');
    return response.data;
  },
};