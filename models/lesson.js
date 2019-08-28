const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const planeSchema = new Schema({
    plane: {
        type: String,
        enum: ['Cessna 152', 'Cessna 172']
    }
});


const lessonSchema = new Schema ({
    student: {
        type: Schema.Types.ObjectId,
        ref: 'Student'
    },
    category: String,
    date: {
        type: Date,
    },
    instructor: String,
    hours: {
       type: Number, 
    } ,
    planes: [planeSchema],
    description: String,
    weightAndBalance: Number
},{
timestamps: true
});


module.exports =  mongoose.model('Lesson', lessonSchema)