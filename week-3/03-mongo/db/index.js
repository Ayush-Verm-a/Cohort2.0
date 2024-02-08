const mongoose = require('mongoose');

// Connect to MongoDB
// mongoose.connect('your-mongodb-url');
mongoose.connect(
    "mongodb+srv://vayush2020:AyushVat20@cohortdemo.8hjslu2.mongodb.net/cohortdb",
);

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
});

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    purchasedCourses: [Number]
});

const CourseSchema = new mongoose.Schema({
    username: { type: String, required: true },
    title: { type: String, required: true },
    courseId: { type: Number, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageLink: { type: String, required: true }
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}