import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.sass'
    
  ]
})
export class StartPageComponent implements OnInit {
  flagStart:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  loadTaskList(){
    this.flagStart = true;
    console.log("nagala");
  }

}
