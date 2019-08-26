const Student = require('../models/student')
const Lesson = require('../models/lesson')


function index(req, res, next) {
    Lesson.find({})

    .then(lessons => {
        console.log(lessons[1])
        res.render('students/index', { 
          student: req.user,
          lessons,
          flightHours: 0
        });
    })
  }
  



module.exports ={
    index

}
