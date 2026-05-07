import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import * as TaskService from "../services/task.service";
import { RequestExtend } from "../interfaces/requestextend.interface";

const getTasks = async ({ body, userId }: RequestExtend, res: Response) => {
  try {
    const responseTasks = await TaskService.getTasks(userId);
    res.send(responseTasks);
  } catch (e) {
    handleHttp(res, "ERROR_GET_TASKS");
  }
};

const getTask = async ({ params }: Request, res: Response) => {
  try {
    const responseTask = await TaskService.getTask(params.id);
    if (responseTask == null) res.status(404).send("NOT FOUND");
    else res.send(responseTask);
  } catch (e) {
    handleHttp(res, "ERROR_GET_TASKS");
  }
};

const addTask = async ({ body, userId }: RequestExtend, res: Response) => {
  try {
    const responseTask = await TaskService.insertTask(body, userId);
    res.send(responseTask);
  } catch (e) {
    handleHttp(res, "ERROR_ADD_TASK");
  }
};

const updateTask = async ({ params, body }: Request, res: Response) => {
  try {
    const responseTask = await TaskService.updateTask(params.id, body);
    res.send(responseTask);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_TASK");
  }
};

const deleteTask = async ({ params }: Request, res: Response) => {
  try {
    const responseTask = await TaskService.deleteTask(params.id);
    res.send(responseTask);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_TASK");
  }
};

export { getTasks, getTask, addTask, updateTask, deleteTask };
