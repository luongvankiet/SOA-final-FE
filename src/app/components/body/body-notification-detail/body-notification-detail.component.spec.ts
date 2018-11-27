import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyNotificationDetailComponent } from './body-notification-detail.component';

describe('BodyNotificationDetailComponent', () => {
  let component: BodyNotificationDetailComponent;
  let fixture: ComponentFixture<BodyNotificationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyNotificationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyNotificationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
