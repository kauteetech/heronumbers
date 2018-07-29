import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkloadprofileComponent } from './workloadprofile.component';

describe('WorkloadprofileComponent', () => {
  let component: WorkloadprofileComponent;
  let fixture: ComponentFixture<WorkloadprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkloadprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkloadprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
