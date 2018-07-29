import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadynodeComponent } from './readynode.component';

describe('ReadynodeComponent', () => {
  let component: ReadynodeComponent;
  let fixture: ComponentFixture<ReadynodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadynodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadynodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
