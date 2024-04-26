import jwt from "jsonwebtoken";
export const verifyToken = (req, res, next) => {
    const token = JSON.parse(req.cookies.jwt);
    if (!token) return res.status(401).send("you are not authenticad")
    console.log(typeof token);
    jwt.verify(token.jwt, process.env.jwt_KEY, async(err, payload) => {
        if (err) return res.status(403).send("Token is not valid ")
        req.userID = payload ? .userID;
        next();
    })

};