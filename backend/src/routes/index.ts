import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const clearFileName = (fileName: string): string | undefined => {
  return fileName.split(".").shift();
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = clearFileName(fileName);
  if (cleanName !== "index") {
    import(`./${cleanName}`).then((module) => {
      router.use(`/${cleanName}`, module.router);
    });
  }
});

export { router };
