import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';


@Component({
  selector: 'app-bursary-application',
  templateUrl: './bursary-application.component.html',
  styleUrls: ['./bursary-application.component.css'],
  providers: [{
    provide:STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class BursaryApplicationComponent implements OnInit, AfterViewInit {
locationDetails: FormGroup;
schoolDetails: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.locationDetails = this.fb.group({
      sub_county: new FormControl(''),
      ward: new FormControl(''),
      village: new FormControl(''),
      year: new FormControl(''),
    });
    this.schoolDetails = this.fb.group({
      last_name: new FormControl(''),
      first_name: new FormControl(''),
      middle_name: new FormControl(''),
      value: new FormControl(''),
      dob: new FormControl(''),
      name: new FormControl(''),
      institution: new FormControl(''),
      course: new FormControl(''),
      university_reg_no: new FormControl(''),
      university_year: new FormControl(''),
      total_university_fee: new FormControl(''),
      paid_university_fee: new FormControl(''),
      outstanding_university_fee: new FormControl(''),
      secondary_school_name: new FormControl(''),
      school_type: new FormControl(''),

    });
    
  }

  ngAfterViewInit(){
    $('#school_category').css('display', 'none');
    $( "#uni").on("click", function(){
      $( "#campus").css('display', 'inline');
      $('#secondary').css('display', 'none');
      $('#school_category').css('display', 'inline');
      

    });

    $('#seco').on('click', function(){
      $('#campus').css('display', 'none');
      $('#secondary').css('display', 'inline');
      $('#school_category').css('display', 'inline');
    });

  
    
  }


}
