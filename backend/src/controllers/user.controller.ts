import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import * as UserService from "../services/user.service";

const getUsersCtrl = async (req: Request, res: Response) => {
  try {
    const responseUsers = await UserService.getUsers();
    res.send(responseUsers);
  } catch (e) {
    handleHttp(res, "ERROR_GET_USERS");
  }
};

export { getUsersCtrl };
