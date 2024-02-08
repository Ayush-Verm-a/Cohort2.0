const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");

let courseId = 1;

// Admin Routes
router.post('/signup', (req, res) => {
    const { username, password } = req.body;
    const admin = new Admin({
        username, password
    })
    admin.save();
    res.status(200).json({ "message": "Admin created successfully" })
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const { username } = req.headers;
    const { title, description, price, imageLink } = req.body;
    const newprice = parseInt(price);
    const course = new Course({
        username, courseId, title, description, price: newprice, imageLink
    })
    course.save();
    courseId++;
    res.status(200).json({ "message": "Course created successfully" });
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const { username } = req.headers;
    const courses = await Course.find({ username });
    if (!courses) {
        res.status(404).json({ "error": "No courses found" });
    }
    else {
        res.status(200).json(courses)
    }
});

module.exports = router;