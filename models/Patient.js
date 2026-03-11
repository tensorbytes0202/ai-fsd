const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema(
  {
    patientID: {
      type: String,
      unique: true,
      required: true,
      default: () => `PAT-${Date.now()}`
    },

    fullName: {
      type: String,
      required: [true, '❌ Full name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters long']
    },

    email: {
      type: String,
      required: [true, '❌ Email is required'],
      unique: [true, 'Email already exists'],
      lowercase: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
    },

    phoneNumber: {
      type: String,
      required: [true, '❌ Phone number is required'],
      match: [/^\d{10}$/, 'Phone number must be 10 digits']
    },

    age: {
      type: Number,
      required: [true, '❌ Age is required'],
      min: [0, 'Age cannot be negative'],
      max: [150, 'Age seems invalid']
    },

    gender: {
      type: String,
      enum: {
        values: ['Male', 'Female', 'Other'],
        message: 'Gender must be Male, Female, or Other'
      },
      required: true
    },

    disease: {
      type: String,
      required: [true, '❌ Disease/Diagnosis is required'],
      trim: true
    },

    doctorAssigned: {
      type: String,
      required: [true, '❌ Doctor assigned is required'],
      trim: true
    },

    admissionDate: {
      type: Date,
      default: Date.now
    },

    roomNumber: {
      type: String,
      required: [true, '❌ Room number is required'],
      trim: true
    },

    patientType: {
      type: String,
      enum: {
        values: ['Inpatient', 'Outpatient'],
        message: 'Patient type must be Inpatient or Outpatient'
      },
      required: true
    },

    status: {
      type: String,
      enum: {
        values: ['Admitted', 'Discharged'],
        message: 'Status must be Admitted or Discharged'
      },
      default: 'Admitted'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Patient', patientSchema);
