const express = require('express');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware (optional - adjust as needed)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Express.js API is running on Vercel Updated',
    timestamp: new Date().toISOString()
  });
});

// Example API routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',
    service: 'expressjs-backend-vercel',
    timestamp: new Date().toISOString()
  });
});

// Example POST endpoint
app.post('/api/data', (req, res) => {
  res.json({ 
    message: 'Data received',
    data: req.body,
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Not Found',
    path: req.path
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Internal Server Error',
    message: err.message
  });
});

// Export the Express app for Vercel
module.exports = app;

