import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs';
import { Todo } from '../todo';
import { faPaperclip,faClipboardCheck,faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todosList: Observable<Todo[]>;
  todo: Todo = new Todo();
  adj:string;
  
  clip=faPaperclip;
  check=faClipboardCheck;
  nuevaTarea = faPlus;

  constructor(private service: TodoService) { }

  
  ngOnInit() {
    this.showList();
  }

  showList(){
      this.todosList = this.service.getAllTodos();
  }

  

  updateTodo(id: number) {
    this.todo = new Todo();
    this.todo.id = id;
    /* seteo estado a true para indicar que está resuelta */
    this.todo.estado = "true";
    this.service.updateTodo(id, this.todo)
      .subscribe(
        data => {
          console.log(data);
          this.showList();
        },
        error => console.log(error));
   
  }

  ver(str:string){
    this.adj=str;
  }

}
