import { Component, OnInit, NgModule } from '@angular/core';
import { TasksData, ChangeData } from '../interface';
import { MyTaskState } from '../enum';
import { DataService } from '../data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass'
    
  ],
  providers:[DataService]
  
})
export class TaskListComponent implements OnInit {
  flagCreate:boolean = false;
  Task:TasksData[] = [{name:"Сделать дело", desc:"Гулять смело", taskStatus:MyTaskState.undone}];
  constructor(private dataService: DataService) {
    this.Task = this.dataService.getData();
   }

  ngOnInit(): void {
  }

  onTaskAdded(flag:boolean){
    this.flagCreate = flag;
  }
  onCreateTask(event:TasksData)
  {
    this.Task.push(event);
    this.dataService.addData(this.Task);
  }

  onTaskDeleted(i:number)
  {
    this.Task.splice(i,1);
    this.dataService.addData(this.Task);
  }

  onAddedTaskInTaskList(t:TasksData){
    this.Task.push(t);
    this.dataService.addData(this.Task);
  }

  onChangedData(c:ChangeData){
    this.Task[c.index].name = c.name;
    this.Task[c.index].desc = c.desc;
    this.dataService.addData(this.Task);
  }

  loadCreateTask(){
    this.flagCreate = !this.flagCreate;
  }
}
