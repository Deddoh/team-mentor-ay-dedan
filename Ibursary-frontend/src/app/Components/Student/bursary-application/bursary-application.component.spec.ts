import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BursaryApplicationComponent } from './bursary-application.component';

describe('BursaryApplicationComponent', () => {
  let component: BursaryApplicationComponent;
  let fixture: ComponentFixture<BursaryApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BursaryApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BursaryApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
