import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertemaComponent } from './vertema.component';

describe('VertemaComponent', () => {
  let component: VertemaComponent;
  let fixture: ComponentFixture<VertemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VertemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VertemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
