import { ForgotComponent } from './components/forgot/forgot.component';
import { LoginComponent } from './components/login/login.component';
import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ComicListComponent } from './components/comic-list/comic-list.component';
import { ComicDetailsComponent } from './components/comic-details/comic-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'reset-password', component: ForgotComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: HomeComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'comics',
        component: ComicListComponent,
      },
      {
        path: 'comics/:comicId',
        component: ComicDetailsComponent,
      },
      {
        path: 'favoritos',
        component: HomeComponent,
      },

    ],
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];
