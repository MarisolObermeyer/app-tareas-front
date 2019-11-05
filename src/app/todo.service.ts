import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  private baseUrl = '/restApi/v1/todos';

  constructor(private http: HttpClient){  }

  
  getTodoById(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getAllTodos(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  
  getTodosByFilter(todo: Todo): Observable<any> {
    let params = new HttpParams();
    if(todo != undefined){
      if(todo.id != undefined){params = params.set('id', todo.id+'')}
      if(todo.estado != undefined){params = params.set('estado', todo.estado+'')}
      if(todo.descripcion != undefined){params = params.set('descripcion', todo.descripcion);}
console.log(todo);
      return this.http.get(`${this.baseUrl}/filter`, {params});
    }else{
      console.log("no se filtra");
      return this.http.get(`${this.baseUrl}`); // No se filtra

    }
  }
 
  createNewTodo(todo: Todo, file: File): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('descripcion', todo.descripcion);
    formdata.append('file', file);
 
    const req = new HttpRequest('POST', `${this.baseUrl}`, formdata, {
      reportProgress: true,
      responseType: 'text'
    });
 
    return this.http.request(req);
  }

  updateTodo(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
 

}
