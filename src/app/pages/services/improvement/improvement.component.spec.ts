import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovementComponent } from './improvement.component';

describe('ImprovmentComponent', () => {
  let component: ImprovementComponent;
  let fixture: ComponentFixture<ImprovementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprovementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
