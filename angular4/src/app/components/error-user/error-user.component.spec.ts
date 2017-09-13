import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorUserComponent } from './error-user.component';

describe('ErrorUserComponent', () => {
  let component: ErrorUserComponent;
  let fixture: ComponentFixture<ErrorUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
