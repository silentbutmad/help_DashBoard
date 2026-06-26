import api from '../utils/axios';

export const faqApi = {
  getAllFaqs: async (params = {}) => {
    const response = await api.get('/support/faqs', { params });
    return response.data;
  },

  createFaq: async (faqData) => {
    const response = await api.post('/support/faqs', faqData);
    return response.data;
  },

  updateFaq: async (faqId, faqData) => {
    const response = await api.put(`/support/faqs/${faqId}`, faqData);
    return response.data;
  },

  deleteFaq: async (faqId) => {
    const response = await api.delete(`/support/faqs/${faqId}`);
    return response.data;
  },
};