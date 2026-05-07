import { User } from "../interfaces/user.interface";
import { Auth } from "../interfaces/auth.interface";
import UserModel from "../models/user.model";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, name }: User) => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "ALREADY_USER";
  const passhash = await encrypt(password);
  const registerNewUser = await UserModel.create({ email, password: passhash, name });
  return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const user = await UserModel.findOne({ email });
  if (!user) return "USER NOT EXIST";
  if (!(await verified(password, user.password))) return "PASSWORD INCORRECT";
  const token = generateToken(user._id.toString());
  const data = {
    token,
    user: user,
  };
  return data;
};

export { registerNewUser, loginUser };
