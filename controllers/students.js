// const Student = require('../models/student')
const Lesson = require('../models/lesson')

module.exports ={
  index
}

// checks if someone logged in through OAuth and displays lessons associated to user
function index(req, res) {
  if(!req.user){
    res.render('students/index',{ 
    student: req.user,
    }); 
    } else {
      Lesson.find({student:req.user.id})
      .then(lessons => {
        let hours = 0;
       lessons.forEach( l => { hours += l.hours})
        res.render('students/index', { 
          student: req.user,
          lessons,
          hours
        });
      })
      .catch(e => {
        res.status(400).send('unable to find user')
      })
     }
  }
  


// function addStudentHours(userId){
//   let hours = 0;
//   Lesson.find({student: userId})
//   .then(lessons => {
//     lessons.forEach(l => {})
//   })

// }