import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridhostComponent } from './hybridhost.component';

describe('HybridhostComponent', () => {
  let component: HybridhostComponent;
  let fixture: ComponentFixture<HybridhostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HybridhostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridhostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
