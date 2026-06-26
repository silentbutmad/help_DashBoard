// Enums
export const TicketStatus = {
  OPEN: 'OPEN',
  IN_PROGRESS: 'IN_PROGRESS',
  RESOLVED: 'RESOLVED',
  CLOSED: 'CLOSED',
};

export const Priority = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL',
};

export const IssueType = {
  PAYMENT: 'PAYMENT',
  LOGIN: 'LOGIN',
  ACCOUNT: 'ACCOUNT',
  EXPENSE: 'EXPENSE',
  BUG: 'BUG',
  FEATURE_REQUEST: 'FEATURE_REQUEST',
  OTHER: 'OTHER',
};

export const UserRole = {
  USER: 'USER',
  SUPPORT_AGENT: 'SUPPORT_AGENT',
  ADMIN: 'ADMIN',
};

// Models
export const User = {
  id: '',
  name: '',
  email: '',
  password: '',
  role: UserRole.USER,
  createdAt: '',
  updatedAt: '',
};

export const Ticket = {
  id: '',
  userId: '',
  title: '',
  description: '',
  issueType: IssueType.OTHER,
  priority: Priority.MEDIUM,
  status: TicketStatus.OPEN,
  assignedAgent: null,
  createdAt: '',
  updatedAt: '',
};

export const Comment = {
  id: '',
  ticketId: '',
  message: '',
  createdAt: '',
};

export const TicketHistory = {
  id: '',
  ticketId: '',
  oldStatus: null,
  newStatus: TicketStatus.OPEN,
  changedBy: '',
  createdAt: '',
};

export const FAQ = {
  id: '',
  question: '',
  answer: '',
  category: '',
  createdAt: '',
  updatedAt: '',
};

// API Response Types
export const ApiResponse = {
  success: true,
  message: '',
  data: null,
};

export const PaginatedResponse = {
  success: true,
  data: [],
  pagination: {
    page: 1,
    limit: 10,
    total: 0,
    pages: 1,
  },
};

// Analytics Types
export const DashboardMetrics = {
  totalTickets: 0,
  statusBreakdown: {
    open: 0,
    inProgress: 0,
    resolved: 0,
    closed: 0,
  },
  priorityBreakdown: {
    critical: 0,
    high: 0,
  },
};

export const StatusDistribution = {
  status: '',
  count: 0,
};

export const PriorityDistribution = {
  priority: '',
  count: 0,
};

export const IssueTypeDistribution = {
  issueType: '',
  count: 0,
};

export const ResolutionTime = {
  averageResolutionTime: 0,
  unit: 'hours',
  totalResolvedTickets: 0,
};

// Help Center
export const HelpCenter = {
  whatsapp: '',
  callUs: '',
  email: '',
  workingHours: '',
  address: '',
  website: '',
};