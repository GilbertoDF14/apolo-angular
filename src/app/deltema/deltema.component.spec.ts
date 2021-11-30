import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeltemaComponent } from './deltema.component';

describe('DeltemaComponent', () => {
  let component: DeltemaComponent;
  let fixture: ComponentFixture<DeltemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeltemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeltemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
