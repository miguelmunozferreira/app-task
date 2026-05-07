import { User } from "./user.interface";

export interface Task {
  id: string;
  name: string;
  state: boolean;
  createdBy: User;
}
