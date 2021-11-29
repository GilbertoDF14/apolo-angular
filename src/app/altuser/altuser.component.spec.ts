import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltuserComponent } from './altuser.component';

describe('AltuserComponent', () => {
  let component: AltuserComponent;
  let fixture: ComponentFixture<AltuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
