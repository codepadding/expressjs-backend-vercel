# Express.js Backend for Vercel

A serverless Express.js application configured for deployment on Vercel.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run locally with Vercel CLI:
```bash
npm run dev
```

## Deployment

Deploy to Vercel:

```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Project Structure

```
.
├── api/
│   └── index.js          # Main Express app entry point
├── vercel.json           # Vercel configuration
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## API Endpoints

- `GET /` - Root endpoint with API info
- `GET /api/health` - Health check endpoint
- `POST /api/data` - Example POST endpoint

## Adding Routes

Add your routes in `api/index.js`:

```javascript
app.get('/api/your-route', (req, res) => {
  res.json({ message: 'Your response' });
});
```

