const Student = require('../models/Student.model')

module.exports.studentsController = {
  getStudents:(req, res) => {
    Student.find().then((data) => {
      res.json(data)
    })
  }, 
  postStudents:(req, res) => {
    Student.create({
      name: req.body.name,
      phone: req.body.phone,
      age: req.body.age // возраст
    }).then((data) => {
      res.json(data)
    })
  }, deleteStudentsId:(req, res) => {
    Student.findByIdAndRemove(req.params.id).then(() => {
      res.json("Cтудент удален")
    })
  }, patchStudentsId: (req, res) => {
    Student.findByIdAndUpdate(req.params.id,{ 
      name: req.body.name,
      phone: req.body.phone,
      age: req.body.age
    }).then(() => {
      res.json("Cтудент изменен")
    })
  }
}