const { Router } = require('express');
const { studentsController } = require('../controllers/students.controller');


const router = Router();

router.get('/students', studentsController.getStudents)
router.post('/students', studentsController.postStudents)
router.delete('/students/:id', studentsController.deleteStudentsId )
router.patch('/students/:id', studentsController.patchStudentsId)

module.exports = router