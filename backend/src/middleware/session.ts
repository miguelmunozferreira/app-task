import { Response, NextFunction, request } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExtend } from "../interfaces/requestextend.interface";

const checkJwt = (req: RequestExtend, res: Response, next: NextFunction) => {
  try {
    const jwtUser = req.headers.authorization || null;
    const jwt = jwtUser?.split(" ").pop();
    const user = verifyToken(`${jwt}`);
    if (user && typeof user === "object" && "id" in user) {
      req.userId = user.id;
      next();
    } else {
      res.status(403).send();
    }
  } catch (error) {
    res.status(403).send("SESSION INVALID");
  }
};

export { checkJwt };
