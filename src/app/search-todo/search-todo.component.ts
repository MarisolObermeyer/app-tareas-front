import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs';
import { Todo } from '../todo';
import { faPaperclip, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-search-todo',
  templateUrl: './search-todo.component.html',
  styleUrls: ['./search-todo.component.css']
})
export class SearchTodoComponent implements OnInit {
  todo: Todo = new Todo();
  todoUpdate: Todo = new Todo();
  todoList: Observable<[Todo]>;
  clip=faPaperclip;
  check=faClipboardCheck;
  adj: string;
  
  constructor(private service : TodoService) { }

  ngOnInit() {
  }

  searchTodo() {
    this.todoList = this.service.getTodosByFilter(this.todo);
  }

  ver(str:string){
    this.adj=str;
  }

  updateTodo(id: number) {
    this.todoUpdate = new Todo();
    this.todoUpdate.id = id;
    /* seteo estado a true para indicar que está resuelta */
    this.todoUpdate.estado = "true";
    this.service.updateTodo(id, this.todoUpdate)
      .subscribe(
        data => {
          console.log(data);
          this.searchTodo();
        },
        error => console.log(error));
   
  }

}
