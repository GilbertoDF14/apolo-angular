import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeluserComponent } from './deluser.component';

describe('DeluserComponent', () => {
  let component: DeluserComponent;
  let fixture: ComponentFixture<DeluserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeluserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
