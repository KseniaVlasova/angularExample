import { MyTaskState} from './enum';

export interface TasksData{
    name:string;
    desc:string;
    taskStatus : MyTaskState; 
  }
  
  export interface ChangeData{
    name:string;
    desc:string;
    index : number; 
  }
  