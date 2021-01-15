import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulatorViewComponent } from './simulator-view.component';

describe('SimulatorViewComponent', () => {
  let component: SimulatorViewComponent;
  let fixture: ComponentFixture<SimulatorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulatorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulatorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
