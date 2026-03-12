# 🚀 Deployment Guide - Render

This guide will help you deploy the Hospital Patient Management API to Render.

## Prerequisites

- GitHub account with the repository pushed
- Render account (https://render.com)
- MongoDB Atlas account with connection string

## Step-by-Step Deployment

### 1. Prepare Your Repository

Ensure your repository has these files (already created):
- `Procfile` - Specifies how to start the app
- `render.yaml` - Render-specific configuration
- `.env.example` - Template for environment variables
- `package.json` - Node.js dependencies

### 2. Create Render Web Service

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click **New +** → **Web Service**
3. Connect your GitHub repository
4. Fill in the service details:
   - **Name:** `hospital-patient-api`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free (or select your preference)

### 3. Configure Environment Variables

In the Render dashboard:
1. Go to **Environment**
2. Add these variables:

```
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster_name.mongodb.net/?appName=Cluster0
```

**Important:** Replace the MongoDB URI with your actual Atlas connection string.

### 4. Allow Render IP in MongoDB Atlas

1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Navigate to **Network Access**
3. Click **Add IP Address**
4. Select **Allow Access from Anywhere** (recommended for Render)
   - Or manually add Render's IP range: `0.0.0.0/0`

### 5. Deploy

1. Click **Create Web Service**
2. Render will automatically:
   - Clone your repository
   - Install dependencies
   - Start the application
   - Assign a public URL

### 6. Verify Deployment

Once deployed, test your API:

```bash
curl https://your-service-name.onrender.com/api/health
```

Expected response:
```json
{
  "success": true,
  "message": "✅ Server is running!",
  "timestamp": "2026-03-11T12:00:00.000Z"
}
```

## Troubleshooting

### Build Fails
- Check `npm install` completes without errors
- Verify all dependencies are in `package.json`
- Check the Build Logs in Render dashboard

### App Crashes
- Check the App Logs in Render dashboard
- Verify `MONGODB_URI` is correct
- Ensure MongoDB IP whitelist includes `0.0.0.0/0`

### Database Connection Issues
1. Test MongoDB connection string locally
2. Verify IP whitelist in MongoDB Atlas
3. Check credentials are correct

## Auto-Deploy on Push

Render automatically redeploys when you push to your connected GitHub branch. No manual deployment needed!

## Useful Links

- [Render Documentation](https://render.com/docs)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com)
- [Node.js Best Practices](https://nodejs.org/en/docs/guides/nodejs-web-app/)

---

**Deployed at:** `https://your-service-name.onrender.com`
