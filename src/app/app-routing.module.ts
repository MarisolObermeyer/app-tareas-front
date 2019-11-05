import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SearchTodoComponent } from './search-todo/search-todo.component';


const routes: Routes = [
  { path: '', redirectTo: 'lista', pathMatch:'prefix' }, 
  { path: 'lista', component: TodoListComponent },    
  { path: 'new', component: NewTodoComponent },
  { path: 'busqueda', component: SearchTodoComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
