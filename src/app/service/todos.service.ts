import { Injectable } from '@angular/core';
import { todoSchema } from '../schema/todoSchema'

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  id:number=2;
  date=new Date;
  todo:string;
  todoId:number;
  newtodo;
  completed:boolean=false;
  d=this.date.toString().split(" ");
  todos=[{todoId:1,completed:this.completed,todo:"asdasd",date:`${this.d[0]} ${this.d[1]} ${this.d[2]} ${this.d[3]} at ${this.d[4]}`},{todoId:2,completed:this.completed,todo:"asdlllasd",date:`${this.d[0]} ${this.d[1]} ${this.d[2]} ${this.d[3]} at ${this.d[4]}`}];

  constructor() { }

  getTodos=()=>{
    if(this.todos.length>0)
    return this.todos;
  }

  addTodo=(todoText)=>{
    this.newtodo={
      date:`${this.d[0]} ${this.d[1]} ${this.d[2]} ${this.d[3]} at ${this.d[4]}`,
      todo:todoText,
      todoId:(this.id)++,
      completed:this.completed
    }
    if(this.newtodo.todo!==""){
      this.todos.push(this.newtodo)
      return this.newtodo
    }
  }
}
