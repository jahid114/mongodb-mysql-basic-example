const express = require('express');
const studentController =  require('../controllers/studentControllers');
const router = express.Router();

router.route('/').get(studentController.getAllStudent).post(studentController.addStudent);

router.route('/:id').get(studentController.getStudentByID).put(studentController.updateStudentInfo).delete(studentController.deleteStudentInfo);

module.exports = router;