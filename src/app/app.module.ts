import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BodyNotificationComponent } from './components/body/body-notification/body-notification.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BodyNotificationDetailComponent } from './components/body/body-notification-detail/body-notification-detail.component';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { BodyActivitiesComponent } from './components/body/body-activities/body-activities.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    BodyNotificationComponent,
    PageNotFoundComponent,
    BodyNotificationDetailComponent,
    BodyActivitiesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
