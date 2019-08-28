const Lesson = require('../models/lesson');
const Student = require('../models/student');


module.exports = {
    new: newLesson,
    create,
    show,
    editView,
    update,
    remove
}

//CRUD-less new form 
function newLesson(req, res){
    let planes = Lesson.schema.path('planes').schema.path('plane').enumValues
    res.render('lessons/new',{
        student: req.user,
        flightHours: 0,
        planes
    });
}

function create(req,res) {
    //default Date to today
    for (let key in req.body){
        if(req.body[key] === '') delete req.body[key];
    };
    //assign Lesson.student to student id
    req.body.student = req.user.id;
    console.log(req.body.student)
    let lesson = new Lesson(req.body);
    lesson.save()
    .then(res.redirect('/students'))
    .catch( e => {res.status(400).send('unable to save to db');
    });
}

function show (req,res){
    // console.log(req.user.id)
    // Student.findById(req.user.id)
    // .then(student => {
    //     Lesson.find({student: student._id})
    //     .then(lesson =>{
    //         res.render('lessons/show', {
    //         lesson,
    //         student,
            
    //     })
    // })
    //     .catch(e=> {
    //         res.redirect('/students',{
    //             message: e
    //         });
    //     })
    // })
    // .catch (e => {
    //     res.redirect('/students', {
    //         message: e
    //     });
    // })


    
        let id = req.params.id
        console.log(req.user.id); //user id
        console.log(id); //lesson id 
        Student.findById(req.user.id, (e,student)=>{
            Lesson.find({student: student._id}, (e,lesson)=>{
                console.log(lesson)
                res.render('lessons/show',{
                    lesson,
                    student
                });
            })
        })
}




function editView(req,res){
   console.log( Student.find({}))
    let id = req.params.id
    Lesson.findById(id, function(e, lesson){
        res.render('lessons/edit',{
            lesson,
            lessonIdx: id,
            student: req.user,
            flightHours: 0
        });
    });
}

function update(req,res){
    Lesson.findOneAndUpdate({_id: req.params.id}, req.body)
    .then(res.redirect('/students'))
    .catch(e => {res.status(400).send('unable to save to db')
    });
}

function remove(req,res){

    Lesson.findOneAndDelete({_id: req.params.id})
    .then(res.redirect('/students'))
    .catch(e=>{ res.status(400).send('unable to delete')
    });

}


