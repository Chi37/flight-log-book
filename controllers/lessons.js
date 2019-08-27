const Lesson = require('../models/lesson');
const Student = require('../models/student');

module.exports = {
    new: newLesson,
    create,
    show,
    editView,
    update
}

//CRUD-less new form 
function newLesson(req, res){
    console.log(req.user)
    let planes = Lesson.schema.path('plane').enumValues;
    res.render('lessons/new',{
        planes,
        student: true,
        flightHours: 0
    });
}

function create(req,res) {
    //default Date to today
    for (let key in req.body){
        if(req.body[key] === '') delete req.body[key];
    };
    
    let lesson = new Lesson(req.body);
    console.log(req.body)
    lesson.save()
    .then(res.redirect('/students'))
    .catch( e => {res.status(400).send('unable to save to db');
    });
}

function show (req,res){
    let id = req.params.id
    Lesson.findById(id)
    .then((lesson) => {

        res.render('lessons/show', {
            lesson,
            lessonId: id,
            student: true,
        });
    })
    .catch(e=>{
        res.render('/students',{
            message: e
        });
    });
}







function editView(req,res){
   console.log( Student.find({}))
    let id = req.params.id
    Lesson.findById(id, function(e, lesson){
        res.render('lessons/edit',{
            lesson,
            lessonIdx: id,
            student: true,
            flightHours: 0
        });
    });
}

function update(req,res){
    console.log(req.params.id)
    console.log(req.body)
    Lesson.update(req.params.id, req.body)
    .then(res.redirect('/students'))
    .catch(e => {res.status(400).send('unable to save to db')
    });
}