import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StressSliderComponent } from './stress-slider.component';

describe('StressSliderComponent', () => {
  let component: StressSliderComponent;
  let fixture: ComponentFixture<StressSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StressSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StressSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
