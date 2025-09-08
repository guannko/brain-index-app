# Brain Index GEO Platform

🚀 **Full Stack AI Visibility Analytics Platform**

## 🎯 Features

- **Multi-AI Analysis**: Track visibility across ChatGPT, Claude, Gemini, and more
- **Real-time Monitoring**: Get instant alerts when AI systems update
- **Admin Dashboard**: Complete control panel for platform management
- **User Dashboard**: Personal analytics and subscription management
- **OAuth Integration**: Google sign-in ready
- **Payment System**: Stripe-ready payment forms
- **Responsive Design**: Works on all devices

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Authentication**: JWT, Google OAuth
- **Charts**: Chart.js (placeholder)
- **Icons**: Heroicons
- **Deployment**: Railway/Vercel ready

## 📁 Project Structure

```
brain-index-app/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Landing page
│   │   ├── projects/          # Our projects showcase
│   │   ├── pricing/           # Pricing plans
│   │   ├── login/             # Authentication
│   │   ├── register/          # Registration with OAuth
│   │   ├── admin/             # Admin panel
│   │   └── dashboard/         # User dashboard
│   ├── lib/
│   │   ├── auth.ts           # JWT authentication
│   │   └── api.ts            # API client
│   └── middleware.ts         # Route protection
├── public/
├── package.json
└── next.config.js
```

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Production

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🔧 Environment Variables

Create `.env.local` file:

```env
# App
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# Google OAuth (optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# API Backend (when ready)
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## 📊 Pages Overview

### Public Pages
- `/` - Landing page with GEO platform intro
- `/projects` - Showcase of Brain Index projects
- `/pricing` - Subscription plans (Free, Starter, Pro, Enterprise)
- `/login` - Sign in with email or Google
- `/register` - Create account with OAuth option

### Protected Pages
- `/admin` - Admin dashboard with statistics
- `/dashboard` - User personal cabinet
- `/dashboard/subscription` - Manage subscription

## 🎨 Features Status

- ✅ UI/UX Complete
- ✅ Responsive Design
- ✅ Google OAuth UI
- ✅ Admin Panel Interface
- ✅ User Dashboard Interface
- ⏳ Backend Integration
- ⏳ Real Database Connection
- ⏳ Payment Processing
- ⏳ API Endpoints

## 🚢 Deployment

### Railway

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Create project
railway new

# Deploy
railway up
```

### Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

## 📝 Notes

This is a demo version with static data. For production:
1. Connect to backend API (brain-index-geo-monolith)
2. Setup PostgreSQL database
3. Configure Stripe payments
4. Enable Google OAuth
5. Setup monitoring

## 🤝 Team

- **Brain Index** - AI-powered business solutions
- **Jean Claude** - AI CTO
- **Boris** - CEO & Founder

## 📄 License

Private - Brain Index © 2025

---

**Status**: 🟢 Ready for deployment
**Version**: 1.0.0
