// const Student = require('../models/student')
const Lesson = require('../models/lesson');
const Student = require('../models/student');

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
        Student.findById({_id:req.user.id})
        .then(student=>{
          console.log(student )
          student.getAllHours((e, stu) =>{
            if (e) return;
          });
        })
        .catch(e=>{console.log(e)})
      
        // student.getAllHours(function (e, hours){
        //   console.log(e);
        //  })
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
      });
     }
  }

  // lessons.getAllHours(function (e, hours){
  //   console.log(hours);
  //  })
   


// function addStudentHours(userId){
//   let hours = 0;
//   Lesson.find({student: userId})
//   .then(lessons => {
//     lessons.forEach(l => {})
//   })

// }

function totalHours(){
  Student.find(req.params.id)
}