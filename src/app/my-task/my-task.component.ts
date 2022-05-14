import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MyTaskState} from '../enum';
import { TasksData, ChangeData } from '../interface';


@Component({
  selector: 'app-my-task',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.sass'
  ]
})
export class MyTaskComponent implements OnInit {

  @Input() taskAll: TasksData = {name: "", desc: "", taskStatus: MyTaskState.undone};
  @Input() index: number = 0;
  @Output() onDelete = new EventEmitter<number>();
  @Output() onChange = new EventEmitter<ChangeData>();

  nameTask:string = "";
  descTask:string = ""; 
  flagChange:boolean = false;
  buttonChange:string = "Изменить";
  num:number = 0;
  taskStatus:MyTaskState = MyTaskState.undone;
  taskChanged:ChangeData = {name:this.nameTask, desc:this.descTask,index:this.index};

  constructor() {
    this.nameTask = this.taskAll.name;
    this.descTask = this.taskAll.desc;
   }

  changeTask(){
    

    //this.taskAll.name = this.nameTask;
    //this.taskAll.desc = this.descTask; 
    this.taskChanged.name = this.taskAll.name;
    this.taskChanged.desc = this.taskAll.desc;  
    this.taskChanged.index = this.index;
    this.onChange.emit(this.taskChanged);

    this.flagChange = !this.flagChange;
    if(this.buttonChange == "Изменить")
      this.buttonChange = "Сохранить";
    else
      this.buttonChange = "Изменить";
  }

  deleteTask(){
    this.onDelete.emit(this.index);
  }

  dontMakeThisTask(){
    this.taskAll.taskStatus=MyTaskState.cancel;
  }

  doneSuccessfully(){
    this.taskAll.taskStatus=MyTaskState.done;
  }
  
  ngOnInit(): void {
    
  }
}
