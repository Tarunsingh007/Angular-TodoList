import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTodosComponent } from './add-todos/add-todos.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {path:"addTodo",component:AddTodosComponent},
  {path:"viewTodo",component:TodoListComponent},
  {path:"",redirectTo:'/',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
