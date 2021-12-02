import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificatemacComponent } from './modificatemac.component';

describe('ModificatemacComponent', () => {
  let component: ModificatemacComponent;
  let fixture: ComponentFixture<ModificatemacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificatemacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificatemacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
