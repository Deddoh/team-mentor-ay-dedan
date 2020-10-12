import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  sideBarOpen =true;
  view:any[] = [600, 380] ;
  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };
  animations=true;
  showXAxis = true;
  showYAxis = true;
  gradient=false;
  showLegend = true;
  showXAxisLabel=true;
  xAxisLabel = 'Year';
  showYAxisLabel = true;
  yAxisLabel = 'Total Amount';
  timeline= true;

  public single = [
    {
      "name":"2017/2018",
      "value": 5000
    },
    {
      "name":"2018/2019",
      "value": 1000
    },
    {
      "name":"2019/2020",
      "value": 8000
    },
    {
      "name":"2019/202",
      "value": 1000
    },
    {
      "name":"2019/220",
      "value": 10000
    },
    {
      "name":"2019/200",
      "value": 5000
    },
    {
      "name":"2019/020",
      "value": 5000
    },
    {
      "name":"201/2020",
      "value": 4000
    },
    {
      "name":"209/2020",
      "value": 5000
    },
    {
      "name":"219/200",
      "value": 2000
    },
    {
      "name":"209/200",
      "value": 4000
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }
  toggleSideBar(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}
