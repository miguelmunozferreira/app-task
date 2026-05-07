import { Schema, Types, model, Model } from "mongoose";
import { Task } from "../interfaces/task.interface";

const TaskSchema = new Schema<Task>(
  {
    name: {
      type: String,
      required: true,
    },
    state: {
      type: Boolean,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const TaskModel = model("tasks", TaskSchema);
export default TaskModel;
