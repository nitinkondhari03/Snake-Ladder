// const jwt = require("jsonwebtoken");

// const verifyToken = (req, res, next) => {
//     const token = req.headers.token;
//     if (token) {
//         const decoded = jwt.verify(token, "snake_ladder");
//         console.log(decoded)
//         if (decoded) {
//             next();
//         } else {
//             res.status(400).send({ msg: "Login required" });
//         }
//     } else {
//         res.status(400).send({ msg: "Login required" });
//     }
// }

// module.exports = { verifyToken };