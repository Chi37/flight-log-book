const Lesson = require('../models/lesson');

module.exports = {
    new: newLesson,
    create,
    show
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
    let id = req.params.id
    res.render('lessons/show', {
        lesson: Lesson.getOne(id),
        lessonId: id
    });
}
