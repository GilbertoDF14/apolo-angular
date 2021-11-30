import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditartemaComponent } from './editartema.component';

describe('EditartemaComponent', () => {
  let component: EditartemaComponent;
  let fixture: ComponentFixture<EditartemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditartemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditartemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
