require('../models/student')




function index(req, res, next) { 
     res.render('index', 
    { 
        students, 
        name: req.query.name, 
        sortKey 
    }); 
}

module.exports =
{
    index
}