// const Student = require('../models/student')
const Lesson = require('../models/lesson')

// checks if someone logged in through OAuth and displays lessons associated to user
function index(req, res) {
  if(!req.user){
    res.render('students/index',{ 
    student: req.user,
    }); 
    } else {
      Lesson.find({student:req.user.id})
      .then(lessons => {
        res.render('students/index', { 
          student: req.user,
          lessons,
          flightHours: 0
        });
      })
      .catch(e => {
        res.status(400).send('unable to find user')
      })
     }
  }
  



module.exports ={
    index
}
