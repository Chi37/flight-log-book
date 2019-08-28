// const Student = require('../models/student')
const Lesson = require('../models/lesson')


function index(req, res) {
    Lesson.find({})
    .then(lessons => {
      res.render('students/index', { 
        student: req.user,
        lessons,
        flightHours: 0
      });
    });
  }
  



module.exports ={
    index
}
