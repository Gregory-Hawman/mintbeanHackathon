require('dotenv').config();

module.exports = {
    jwtSecret: process.env.JWT_SECRET,
    rounds: 10,
    PORT: process.env.PORT || 5000
};