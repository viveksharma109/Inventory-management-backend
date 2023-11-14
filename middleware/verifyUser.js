const verifyToken = require("../utils/verifyToken");

const verifyUser = (req, res, next) => {
    const token = req.headers.authorization;
    
    if (!token) {
        return res.status(401).json({ message: "Token is missing" });
    }

    // Verify the token using the verifyToken function
    const decoded = verifyToken(token);

    if (!decoded) {
        return res.status(401).json({ message: "Token is invalid" });
    }

    // Attach the decoded user ID to the request object
    req.user = {
        username: decoded.username,
    };

    // Call the next middleware or route handler
    next();
};

module.exports = verifyUser;
