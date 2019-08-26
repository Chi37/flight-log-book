const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lessonSchema = new Schema ({
    category: String,
    date: {
        type: Date,
   
    },
    hobbsTime: {
       type: Number, 
    } ,
    plane: {
        type: String,
        enum: ['Cessna172', 'Cessna152']
    },
    description: String,
    weightAndBalance: Number

},{
timestamps: true
});


module.exports =  mongoose.model('Lesson', lessonSchema)