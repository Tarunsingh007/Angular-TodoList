import { Component, OnInit } from '@angular/core';
import { TodosService } from '../service/todos.service'

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.css']
})
export class AddTodosComponent implements OnInit {
  todoText="";
  confirmationMessage:string="";
  emptyMessage:string="";
  todo;
  send(){
    this.todo=this.service.addTodo(this.todoText);
    if(this.todo)
    this.confirmationMessage="Todo Added";
    else{
      this.emptyMessage="Please Type Something"
    }
    
    this.todoText="";
  }
  constructor(private service:TodosService) { }

  ngOnInit(): void {
  }
}
