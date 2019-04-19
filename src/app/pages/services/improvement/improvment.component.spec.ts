import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovmentComponent } from './improvment.component';

describe('ImprovmentComponent', () => {
  let component: ImprovmentComponent;
  let fixture: ComponentFixture<ImprovmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprovmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprovmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
