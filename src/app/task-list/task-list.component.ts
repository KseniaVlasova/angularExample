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
  task:TasksData[] = [{name:"Сделать дело", desc:"Гулять смело", taskStatus:MyTaskState.undone}];
  constructor(private dataService: DataService) {
    this.task = this.dataService.getData();
   }

  ngOnInit(): void {
  }

  onTaskAdded(flag:boolean){
    this.flagCreate = flag;
  }
  onCreateTask(event:TasksData)
  {
    this.task.push(event);
    this.dataService.addData(this.task);
  }

  onTaskDeleted(i:number)
  {
    this.task.splice(i,1);
    this.dataService.addData(this.task);
  }

  onAddedTaskInTaskList(t:TasksData){
    this.task.push(t);
    this.dataService.addData(this.task);
  }

  onChangedData(c:ChangeData){
    this.task[c.index].name = c.name;
    this.task[c.index].desc = c.desc;
    this.dataService.addData(this.task);
  }

  loadCreateTask(){
    this.flagCreate = !this.flagCreate;
  }
}
