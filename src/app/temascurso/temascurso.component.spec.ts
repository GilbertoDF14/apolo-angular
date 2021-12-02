import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemascursoComponent } from './temascurso.component';

describe('TemascursoComponent', () => {
  let component: TemascursoComponent;
  let fixture: ComponentFixture<TemascursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemascursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemascursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
