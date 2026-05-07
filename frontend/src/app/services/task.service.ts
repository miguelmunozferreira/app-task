import { inject, Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private http: HttpClient = inject(HttpClient);
  private url: string = environment.apiUrl + 'task';

  getAllTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.url, task);
  }

  updateTask(id: string, task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.url}/${id}`, {
      ...task,
      state: !task.state,
    });
  }

  deleteTask(id: string): Observable<void> {
    console.log('El ID es: ' + id);
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
