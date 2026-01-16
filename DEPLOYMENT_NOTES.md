# Deployment Notes

## Important: Backend API Considerations

Your application includes an Express.js backend server (`server/index.js`) with API endpoints and MySQL database connections. 

### Option 1: Full Vercel Deployment (Recommended for Simplicity)

For Vercel deployment, you have two approaches:

#### A. Frontend-only on Vercel + Backend on Separate Service
- Deploy frontend (static files) to Vercel ✅
- Deploy backend (Express server) to a separate service like:
  - Render.com
  - Railway.app
  - Fly.io
  - Or keep it on your existing Hostinger server

Then update your frontend API calls to point to the backend URL.

#### B. Convert Backend to Vercel Serverless Functions
This requires refactoring your Express routes into individual Vercel serverless functions. Each API endpoint (`/api/contact`, `/api/request`, etc.) would become a separate function in the `api/` directory.

### Current Setup

The current configuration (`vercel.json`) is set up for **Option A** (frontend deployment). The CI/CD pipeline will:
- ✅ Build the frontend
- ✅ Deploy static files to Vercel
- ✅ Backend needs separate deployment

### Environment Variables

Make sure to set these in Vercel Dashboard → Settings → Environment Variables:
- Database connection strings
- Email service credentials
- CORS origins
- Any other environment variables your app needs

### Testing the Deployment

1. **Frontend**: Should work immediately after deployment
2. **Backend API**: Make sure your frontend's API calls point to the correct backend URL
   - Update any hardcoded `localhost:4000` references
   - Use environment variables for API base URL in production

## Next Steps

1. Complete the Vercel setup (see `.github/SETUP.md`)
2. Decide on backend deployment strategy
3. Test the full flow: Frontend (Vercel) → Backend API (your chosen service)
4. Update environment variables as needed
