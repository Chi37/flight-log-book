const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    totalHours: { 
        type: Number,
        default: 10
    },
    avatar: String,
    email: String,
    googleId: String
    },{
    timestamps: true
    });

 

module.exports = mongoose.model('Student', studentSchema);



studentSchema.method.getAllHours = function getAllHours(cb) {
    let today = new Date();
    Lesson.find({student: student._id,  date: {$lt: today}}, (lessons)=>
    {
        return this.totalHours = lessons.reduce((total, lessons) => total += lessons.hours, 0)
    })

}

