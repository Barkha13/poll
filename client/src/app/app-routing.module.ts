import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatePollComponent } from './create-poll/create-poll.component';

const routes: Routes = [
  {path: '', pathMatch:'full', component: LoginComponent},
  {path: "dashboard", pathMatch: 'full', component: DashboardComponent},
  {path: "new_poll", pathMatch: 'full', component: CreatePollComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
