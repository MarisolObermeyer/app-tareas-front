import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {
  todo: Todo = new Todo();

  selectedFiles: FileList
  currentFileUpload: File
  progress: { percentage: number } = { percentage: 0 }
  submitted: boolean = false;
  
  constructor(private service: TodoService,private router : Router) { }

  ngOnInit() {
  }

  showNewTodo(){
    this.todo = new Todo();
    
  }

   saveTodo() {
    if(this.selectedFiles && this.selectedFiles.length > 0){
      this.currentFileUpload = this.selectedFiles.item(0);
    }
    this.service.createNewTodo(this.todo, this.currentFileUpload)
      .subscribe(data => {
        console.log(data)
        this.router.navigateByUrl("/lista");
      }, error => console.log(error));
    this.todo = new Todo();
    this.selectedFiles = undefined
  }

  onSubmit() {
    this.submitted = true;
    this.saveTodo();
  }

 /*  newTodo(){
    this.submitted = false;
    this.todo = new Todo();
  } */
  selectFile(event) {
    const file = event.target.files.item(0)
      this.selectedFiles = event.target.files;
  }

}
