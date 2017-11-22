import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { PollComponent } from './poll/poll.component';

const routes: Routes = [
  {path: '', pathMatch:'full', component: LoginComponent},
  {path: "dashboard", pathMatch: 'full', component: DashboardComponent},
  {path: "new_poll", pathMatch: 'full', component: CreatePollComponent},
  {path: "poll/:id", pathMatch: 'full', component:PollComponent},
  {path: "delete/:d_id", pathMatch: 'full', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
