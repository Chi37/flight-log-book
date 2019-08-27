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
    let planes = Lesson.schema.path('plane').enumValues;
    res.render('lessons/new',{
        planes,
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
    let id = req.params._id
    res.render('lessons/show', {
        lesson: Lesson.findById(id),
        lessonId: id
    });
}


function editView(req,res){

    let id = req.params.id
    Lesson.findById(id, function(e, lesson){
        console.log(lesson)

        res.render(`lessons/edit`,{
            lesson,
            lessonIdx: id,
            student: true
        });
    });
   
}

function update(req,res){
    console.log(req)
    res.send('updated view here')
}