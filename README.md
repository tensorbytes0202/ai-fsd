# 🏥 Hospital Patient Management System API

A comprehensive backend API for managing hospital patient records built with Node.js, Express, and MongoDB.

## 📋 Features

✅ Register new patients
✅ View all patient records
✅ View specific patient by ID
✅ Update patient details
✅ Delete patient records
✅ Search patients by name or disease
✅ MongoDB integration with schema validation
✅ Comprehensive error handling
✅ RESTful API design

## 🛠️ Technology Stack

- **Backend:** Node.js + Express.js
- **Database:** MongoDB + Mongoose
- **Environment:** dotenv
- **CORS:** Enabled

## 📦 Installation

```bash
npm install
echo "MONGODB_URI=your_connection_string" > .env
echo "PORT=5000" >> .env
echo "NODE_ENV=development" >> .env
npm run dev
```

## 🚀 API Endpoints

- **POST** `/api/patients` - Register new patient
- **GET** `/api/patients` - Get all patients
- **GET** `/api/patients/:id` - Get patient by ID
- **PUT** `/api/patients/:id` - Update patient
- **DELETE** `/api/patients/:id` - Delete patient
- **GET** `/api/patients/search?name=xyz` - Search patient

## 📞 Support

For issues, contact the development team.

---
**Course:** AI308B - AI Driven Full Stack Development
**Exam:** MSE-1 Practical Examination
