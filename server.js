require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const patientRoutes = require('./routes/patients');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Initialize database connection (non-blocking)
connectDB().catch(err => console.error('DB Error:', err));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: '✅ Server is running!',
    timestamp: new Date().toISOString()
  });
});

app.use('/api', patientRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: '❌ Route not found'
  });
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`
  ╔════════════════════════════════════════════════════╗
  ║   🏥 HOSPITAL PATIENT MANAGEMENT API               ║
  ║   Server Running on Port: ${PORT}                       ║
  ║   Environment: ${process.env.NODE_ENV || 'development'}             ║
  ║   Health Check: http://localhost:${PORT}/api/health    ║
  ╚════════════════════════════════════════════════════╝
  `);
});

module.exports = app;
