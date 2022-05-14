import { Component, OnInit, NgModule } from '@angular/core';



@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass'
    
  ]
})
export class TaskListComponent implements OnInit {
  flagCreate:boolean = false;
  Task:TasksData[] = [{name:"Сделать дело", desc:"Гулять смело", taskStatus:MyTaskState.undone}];
  constructor() { }

  ngOnInit(): void {
  }

  onTaskAdded(flag:boolean){
    this.flagCreate = flag;
  }
  onCreateTask(event:TasksData)
  {
    this.Task.push(event);
  }

  onTaskDeleted(i:number)
  {
    this.Task.splice(i,1);
    
  }

  onAddedTaskInTaskList(t:TasksData){
    this.Task.push(t);
  }

  onChangedData(c:ChangeData){
    this.Task[c.index].name = c.name;
    this.Task[c.index].desc = c.desc;
  }

  loadCreateTask(){
    this.flagCreate = !this.flagCreate;
  }
}
