// Middleware for handling auth
const { Admin } = require('../db/index')
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const { username, password } = req.headers;
    const user = await Admin.findOne({ username, password });
    if (!user) {
        res.status(404).send({ "error": "No admin found" });
    }
    else {
        next();
    }

}

module.exports = adminMiddleware;