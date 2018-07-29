import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllflashhostComponent } from './allflashhost.component';

describe('AllflashhostComponent', () => {
  let component: AllflashhostComponent;
  let fixture: ComponentFixture<AllflashhostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllflashhostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllflashhostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
