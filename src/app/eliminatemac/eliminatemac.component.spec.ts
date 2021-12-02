import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminatemacComponent } from './eliminatemac.component';

describe('EliminatemacComponent', () => {
  let component: EliminatemacComponent;
  let fixture: ComponentFixture<EliminatemacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminatemacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminatemacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
