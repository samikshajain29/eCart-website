import jwt from "jsonwebtoken";

const isAuth = (req, res, next) => {
  try {
    let { token } = req.cookies;
    if (!token) {
      res.status(400).json({ message: "user does not have token" });
    }
    let verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!verifyToken) {
      res.status(400).json({ message: "user does not have a valid token" });
    }
    req.userId = verifyToken.userId;
    next();
  } catch (error) {
    console.log("isAuth error");
    return res.status(500).json({ message: `isAuth error ${error}` });
  }
};
export default isAuth;
