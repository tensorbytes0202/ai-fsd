const express = require('express');
const {
  createPatient,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient,
  searchPatient
} = require('../controllers/patientController');

const router = express.Router();

router.post('/patients', createPatient);
router.get('/patients/search', searchPatient);
router.get('/patients', getAllPatients);
router.get('/patients/:id', getPatientById);
router.put('/patients/:id', updatePatient);
router.delete('/patients/:id', deletePatient);

module.exports = router;
