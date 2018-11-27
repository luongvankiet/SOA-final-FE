import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyNotificationComponent } from './body-notification.component';

describe('BodyNotificationComponent', () => {
  let component: BodyNotificationComponent;
  let fixture: ComponentFixture<BodyNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
