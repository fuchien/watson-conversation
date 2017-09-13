import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BallonsComponent } from './ballons.component';

describe('BallonsComponent', () => {
  let component: BallonsComponent;
  let fixture: ComponentFixture<BallonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
