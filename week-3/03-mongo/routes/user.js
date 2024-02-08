const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index")

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const { username, password } = req.body;
    const user = new User({
        username, password, purchasedCourses: []
    })
    user.save();
    res.status(200).json({ "message": "User created successfully" })
});

router.get('/courses', userMiddleware, async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    if (!courses) {
        res.status(404).json({ "error": "No courses found" });
    }
    else {
        res.status(200).json(courses)
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    let courseId = req.params.courseId;
    courseId = parseInt(courseId)
    const course = await Course.findOne({ courseId });
    if (!course) {
        res.status(404).json({ "error": "No course found" });
    }
    else {
        // Implement the updation of the purchased courses list in mongo db
        const { username } = req.headers;
        await User.findOneAndUpdate({ username }, { $push: { purchasedCourses: courseId } });
        res.status(200).json({ "msg": "Course purchased successfully" })
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const { username } = req.headers;
    const user = await User.findOne({ username });
    const pCourses = await Course.find({ courseId: { $in: user.purchasedCourses } });
    if (!pCourses) {
        res.status(404).json({ "error": "No course purchased" });
    }
    else {
        res.status(200).json(pCourses);
    }
});

module.exports = router