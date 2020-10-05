import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectDetailComponent } from './home/components/project-detail/project-detail.component';
import { ProjectFormComponent } from './home/components/project-form/project-form.component';
import { HomeComponent } from './home/home.component';
import { AdminGuard } from './core/guards/admin.guard'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'detail/:project', component: ProjectDetailComponent },
  { path: 'register-project', component: ProjectFormComponent, canActivate: [AdminGuard] },
  { path: 'register-project/:project', component: ProjectFormComponent, canActivate: [AdminGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
