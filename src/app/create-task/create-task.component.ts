import { Component, OnInit, Output, EventEmitter, Input, NgModule} from '@angular/core';
import { MyTaskState} from '../enum';
import { TasksData, ChangeData } from '../interface';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.sass'
  ]
})
export class CreateTaskComponent implements OnInit {

  @Output() addedTask = new EventEmitter<boolean>();
  @Output() addedTaskInTaskList = new EventEmitter<TasksData>();

  newData:TasksData = {name:"",desc:"",taskStatus:MyTaskState.undone};
  n:string = "";
  d:string = "";
  constructor() { }
  
  ngOnInit(): void {
  }

  addTask(){
    this.newData.name = this.n;
    this.newData.desc = this.d;
    this.addedTask.emit(false);
    
    this.addedTaskInTaskList.emit(this.newData);
    
  }
  

}
