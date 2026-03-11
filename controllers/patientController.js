const Patient = require('../models/Patient');

exports.createPatient = async (req, res, next) => {
  try {
    console.log('📝 Creating new patient...');
    const patient = await Patient.create(req.body);
    console.log('✅ Patient created successfully');
    res.status(201).json({
      success: true,
      message: '✅ Patient registered successfully',
      data: patient
    });
  } catch (error) {
    console.error('❌ Error creating patient:', error.message);
    next(error);
  }
};

exports.getAllPatients = async (req, res, next) => {
  try {
    console.log('📋 Fetching all patients...');
    const patients = await Patient.find();
    console.log(`✅ Found ${patients.length} patients`);
    res.status(200).json({
      success: true,
      count: patients.length,
      data: patients
    });
  } catch (error) {
    console.error('❌ Error fetching patients:', error.message);
    next(error);
  }
};

exports.getPatientById = async (req, res, next) => {
  try {
    console.log(`🔍 Fetching patient with ID: ${req.params.id}`);
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      console.log('❌ Patient not found');
      return res.status(404).json({
        success: false,
        message: '❌ Patient not found'
      });
    }
    console.log('✅ Patient found');
    res.status(200).json({
      success: true,
      data: patient
    });
  } catch (error) {
    console.error('❌ Error fetching patient:', error.message);
    next(error);
  }
};

exports.updatePatient = async (req, res, next) => {
  try {
    console.log(`✏️  Updating patient with ID: ${req.params.id}`);
    const patient = await Patient.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );
    if (!patient) {
      console.log('❌ Patient not found');
      return res.status(404).json({
        success: false,
        message: '❌ Patient not found'
      });
    }
    console.log('✅ Patient updated successfully');
    res.status(200).json({
      success: true,
      message: '✅ Patient updated successfully',
      data: patient
    });
  } catch (error) {
    console.error('❌ Error updating patient:', error.message);
    next(error);
  }
};

exports.deletePatient = async (req, res, next) => {
  try {
    console.log(`🗑️  Deleting patient with ID: ${req.params.id}`);
    const patient = await Patient.findByIdAndDelete(req.params.id);
    if (!patient) {
      console.log('❌ Patient not found');
      return res.status(404).json({
        success: false,
        message: '❌ Patient not found'
      });
    }
    console.log('✅ Patient deleted successfully');
    res.status(200).json({
      success: true,
      message: '✅ Patient deleted successfully',
      data: {}
    });
  } catch (error) {
    console.error('❌ Error deleting patient:', error.message);
    next(error);
  }
};

exports.searchPatient = async (req, res, next) => {
  try {
    const { name, disease } = req.query;
    console.log(`🔎 Searching patients... Name: ${name}, Disease: ${disease}`);

    let query = {};
    if (name) {
      query.fullName = { $regex: name, $options: 'i' };
    }
    if (disease) {
      query.disease = { $regex: disease, $options: 'i' };
    }

    if (!name && !disease) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name or disease to search'
      });
    }

    const patients = await Patient.find(query);
    console.log(`✅ Found ${patients.length} matching patients`);
    res.status(200).json({
      success: true,
      count: patients.length,
      data: patients
    });
  } catch (error) {
    console.error('❌ Error searching patients:', error.message);
    next(error);
  }
};
