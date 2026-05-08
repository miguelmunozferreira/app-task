import { Request, response, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth.service";
import { handleHttp } from "../utils/error.handle";

/** Registers a new user account and returns the created user. */
const registrerCtrl = async ({ body }: Request, res: Response) => {
  try {
    const responseUser = await registerNewUser(body);
    res.send(responseUser);
  } catch (e: any) {
    handleHttp(res, e.message);
  }
};

/** Authenticates a user with email and password, returning a JWT on success. */
const loginCtrl = async ({ body }: Request, res: Response) => {
  const { email, password } = body;
  const responseUser = await loginUser({ email, password });
  res.send(responseUser);
};

export { loginCtrl, registrerCtrl };
