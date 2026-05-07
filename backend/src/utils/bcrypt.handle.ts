import { hash, compare } from "bcryptjs";

const encrypt = async (pass: string) => {
  const passhash = await hash(pass, 8);
  return passhash;
};

const verified = async (pass: string, passhash: string) => {
  const isCorrect = await compare(pass, passhash);
  return isCorrect;
};

export { encrypt, verified };
