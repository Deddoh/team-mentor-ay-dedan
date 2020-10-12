import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  sideBarOpen = true;

  // options for the chart
  // view: any[] = [600, 400];
  animations=true;
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Total Amount';
  showYAxisLabel = true;
  yAxisLabel = 'Ward';
  timeline = true;
  title = "Bursary fund allocation per Ward"

  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };

  
  // data goes here
public single = [
  {
    "name": "Kabete",
    "value": 300000
  },
  {
    "name": "Muguga",
    "value": 112600
  },
  {
    "name": "Githunguri",
    "value": 296215
  },
  {
    "name": "Wangige",
    "value": 257363
  },
  {
    "name": "Ruku",
    "value": 196750
  },
  {
    "name": "Kiambaa",
    "value": 204617
  }
];

  // end of charts options
  constructor() { }

  ngOnInit(): void {
    
      $('#applications-table').css('display', 'inline');
      $('#reports-table').css('display', 'none');
      
 
  }

  toggleSideBar(){
    this.sideBarOpen = !this.sideBarOpen;
  }
  ngAfterViewInit(){
    $('#applications-button').on('click', function(){
      $('#applications-table').css('display', 'inline');
      $('#reports-table').css('display', 'none');
     });
     $('#reports-button').on('click', function(){
      $('#applications-table').css('display', 'none');
      $('#reports-table').css('display', 'inline');
     });

  }
  
 
}
