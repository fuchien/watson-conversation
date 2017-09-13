import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsToneComponent } from './settings.component.tone';

describe('SettingsComponent', () => {
  let component: SettingsToneComponent;
  let fixture: ComponentFixture<SettingsToneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsToneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsToneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
