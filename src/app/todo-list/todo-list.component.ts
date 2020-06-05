import { Component, OnInit } from '@angular/core';
import { TodosService } from '../service/todos.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todosList=[];
  constructor(private service:TodosService) { }

  ngOnInit(): void {
    this.todosList=this.service.getTodos();
  }

  checkTodo=(todo)=>{
    this.todosList.forEach(e=>{
      if(e.todoId===todo.todoId){
        e.completed=!e.completed;
        console.log(e.completed)
      }
    })
  }

  deleteTodo(id:number):void {
    this.todosList=this.todosList.filter(todo=>todo.todoId!==id);
  }

}
