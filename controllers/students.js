// const Student = require('../models/student')
const Lesson = require('../models/lesson')


function index(req, res) {
  if(!req.user){
    res.render('students/index',{ 
    student: req.user,
    flightHours: 0
    }); 
    } else {
      console.log(req.user.id)
      Lesson.find({student:req.user.id})
      .then(lessons => {
        res.render('students/index', { 
          student: req.user,
          lessons,
          flightHours: 0
        });
      });
     }
  }
  



module.exports ={
    index
}
