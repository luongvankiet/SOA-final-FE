import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './services/auth-guard.service';
import { RedirectIfAuthenticatedService } from './services/redirect-if-authenticated.service';
import { BodyNotificationComponent } from './components/body/body-notification/body-notification.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BodyNotificationDetailComponent } from './components/body/body-notification-detail/body-notification-detail.component';
import { BodyActivitiesComponent } from './components/body/body-activities/body-activities.component';

const routes: Routes = [
  { path: '', redirectTo: 'tb', pathMatch: 'full' },
  {
    path: '', component: HomeComponent, canActivate: [AuthGuardService],
    children: [
      { path: 'tb', component: BodyNotificationComponent },
      { path: 'tb/:id', component: BodyNotificationDetailComponent },
      { path: 'hdpt', component: BodyActivitiesComponent }
    ]
  },
  { path: 'login', component: LoginComponent, canActivate: [RedirectIfAuthenticatedService] },
  { path: '**', component: PageNotFoundComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
