import { TasksData } from './interface';
import { MyTaskState } from './enum';
export class DataService{
  
    private data: TasksData[] = [{name:"Сделать дело", desc:"Гулять смело", taskStatus:MyTaskState.undone}];
      
    getData(): TasksData[] {
          
        let temp =  localStorage.getItem("TaskData");
        if (temp != null){
            this.data = JSON.parse(temp);
          } 
        return this.data;
    }
    addData(tasks: TasksData[]){
          
        localStorage.setItem("TaskData", JSON.stringify(tasks))
    }
}