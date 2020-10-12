import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [{
    provide:STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class RegisterComponent implements OnInit {
basicDetails: FormGroup;
locationDetails: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.basicDetails = this.fb.group({
      first_name: new FormControl('', [Validators.required]),
      middle_name: new FormControl('', []),
      last_name: new FormControl('', []),
      id: new FormControl('', []),
      email: new FormControl('', []),
      phone: new FormControl('', []),
      dob: new FormControl('', []),
    });

    this.locationDetails = this.fb.group({
      county: new FormControl({value:'Kiambu', disabled:true}),
      ward: new FormControl('', [Validators.required]),
      zip: new FormControl('', [Validators.required]),
      kra: new FormControl('', [Validators.required]),
    })

  }

}
