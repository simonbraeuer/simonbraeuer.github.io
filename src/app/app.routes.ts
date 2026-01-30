import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'about', component: AppComponent },
      { path: 'skills', component: AppComponent },
      { path: 'portfolio', component: AppComponent },
      { path: 'contact', component: AppComponent },
      { path: 'imprint', component: AppComponent },
      { path: '', redirectTo: 'about', pathMatch: 'full' }
    ]
  }
];
