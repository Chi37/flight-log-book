const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Student = require('../models/student');
require('./config/database');
require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({ 
    clientID: process.env.GOOGLE_CLIENT_ID, 
    clientSecret: process.env.GOOGLE_SECRET, 
    callbackURL: process.env.GOOGLE_CALLBACK 
    }, 
function(accessToken, refreshToken, profile, cb) { // a user has logged in with OAuth... 
    Student.findOne({'googleId': profile.id}, (e,student)=>{
        if (e) return cb(e);
        if(student) {
            return cb(null, student);
            } else {
            let newStudent = new Student({
                name: profile.displayName,
                email: profile.emails[0].value,
                avatar: profile.photos[0].value,
                googleId: profile.id
            });
            newStudent.save((e)=> { 
            if(e) return cb(e);
            return cb(null, newStudent);
            });
            }
        });
    }  
));



//give passport the nugget of data to put into the session for the authenticated user
passport.serializeUser((student,done)=> done(null,student.id));

passport.deserializeUser((id, done) => { 
    Student.findById(id, (err, student) => { 
        done(err, student); 
    }); 
});

router.get('/logout', (req, res)=>{ 
    req.logout(); res.redirect('/students');});