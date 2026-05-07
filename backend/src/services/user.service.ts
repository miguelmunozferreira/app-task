import UserModel from "../models/user.model";

export const getUsers = async () => {
  const res = await UserModel.find().select("-password");
  return res;
};

export const getUser = async (id: string) => {
  const res = await UserModel.findById(id).select("-password");
  return res;
};
