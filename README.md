# Help & Support Dashboard

A modern, enterprise-grade React dashboard for managing help & support tickets.

## Features

- **Admin Dashboard** - Complete ticket management and analytics
- **Ticket Management** - View, filter, search, and manage support tickets
- **Real-time Analytics** - Dashboard metrics and charts
- **Dark/Light Theme** - Toggle between themes
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Authentication** - Secure JWT-based login
- **Modern UI** - Built with Tailwind CSS and Framer Motion

## Tech Stack

- React 19
- Vite
- React Router
- Tailwind CSS
- Axios
- React Query (TanStack Query)
- React Hook Form + Zod
- Lucide React Icons
- Framer Motion
- Context API

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file:
```bash
cp .env.example .env
```

3. Update the API URL in `.env` if needed:
```
VITE_API_URL=https://expense-api-gateway.onrender.com
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   └── layout/          # Layout components (Sidebar, Navbar)
├── contexts/            # React contexts (Auth, Theme)
├── pages/               # Page components
├── services/            # API services
├── utils/               # Utilities and constants
├── types/               # Type definitions
├── App.jsx
└── main.jsx
```

## API Integration

The frontend connects to the backend API at:
- Auth: `/auth/*`
- Support: `/support/*`

## Features Implemented

- ✅ Login page with validation
- ✅ Admin dashboard with statistics
- ✅ Ticket listing with filters
- ✅ Dark/Light theme toggle
- ✅ Responsive sidebar navigation
- ✅ Profile management
- ✅ Settings page
- ✅ Protected routes
- ✅ Loading states and error handling

## Notes

- Only admin role is currently supported
- Backend API documentation is in `SERVICE_DOCUMENTATION.md`
- All API fields are dynamically connected (no hardcoding)