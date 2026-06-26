export const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://expense-api-gateway.onrender.com';

export const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  TICKETS: '/dashboard/tickets',
  TICKET_DETAILS: '/dashboard/tickets/:id',
  USERS: '/dashboard/users',
  AGENTS: '/dashboard/agents',
  CATEGORIES: '/dashboard/categories',
  REPORTS: '/dashboard/reports',
  ANALYTICS: '/dashboard/analytics',
  NOTIFICATIONS: '/dashboard/notifications',
  ACTIVITY_LOGS: '/dashboard/activity-logs',
  PROFILE: '/dashboard/profile',
  SETTINGS: '/dashboard/settings',
};

export const TICKET_STATUS = {
  OPEN: 'OPEN',
  IN_PROGRESS: 'IN_PROGRESS',
  RESOLVED: 'RESOLVED',
  CLOSED: 'CLOSED',
};

export const PRIORITY = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL',
};

export const ISSUE_TYPE = {
  PAYMENT: 'PAYMENT',
  LOGIN: 'LOGIN',
  ACCOUNT: 'ACCOUNT',
  EXPENSE: 'EXPENSE',
  BUG: 'BUG',
  FEATURE_REQUEST: 'FEATURE_REQUEST',
  OTHER: 'OTHER',
};

export const USER_ROLE = {
  USER: 'USER',
  SUPPORT_AGENT: 'SUPPORT_AGENT',
  ADMIN: 'ADMIN',
};

export const STATUS_COLORS = {
  [TICKET_STATUS.OPEN]: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  [TICKET_STATUS.IN_PROGRESS]: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  [TICKET_STATUS.RESOLVED]: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  [TICKET_STATUS.CLOSED]: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400',
};

export const PRIORITY_COLORS = {
  [PRIORITY.LOW]: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400',
  [PRIORITY.MEDIUM]: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  [PRIORITY.HIGH]: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
  [PRIORITY.CRITICAL]: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
};

export const ISSUE_TYPE_LABELS = {
  [ISSUE_TYPE.PAYMENT]: 'Payment',
  [ISSUE_TYPE.LOGIN]: 'Login',
  [ISSUE_TYPE.ACCOUNT]: 'Account',
  [ISSUE_TYPE.EXPENSE]: 'Expense',
  [ISSUE_TYPE.BUG]: 'Bug',
  [ISSUE_TYPE.FEATURE_REQUEST]: 'Feature Request',
  [ISSUE_TYPE.OTHER]: 'Other',
};

export const STATUS_LABELS = {
  [TICKET_STATUS.OPEN]: 'Open',
  [TICKET_STATUS.IN_PROGRESS]: 'In Progress',
  [TICKET_STATUS.RESOLVED]: 'Resolved',
  [TICKET_STATUS.CLOSED]: 'Closed',
};

export const PRIORITY_LABELS = {
  [PRIORITY.LOW]: 'Low',
  [PRIORITY.MEDIUM]: 'Medium',
  [PRIORITY.HIGH]: 'High',
  [PRIORITY.CRITICAL]: 'Critical',
};