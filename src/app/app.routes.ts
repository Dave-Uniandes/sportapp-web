import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardviewComponent } from './views/dashboardview/dashboardview.component';
import { TrainingviewComponent } from './views/trainingview/trainingview.component';
import { ServicesviewComponent } from './views/servicesview/servicesview.component';
import { EventsviewComponent } from './views/eventsview/eventsview.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', 
      component: DashboardComponent,
      children: [
        { path: 'dashboard', component: DashboardviewComponent },
        { path: 'training', component: TrainingviewComponent },
        { path: 'services', component: ServicesviewComponent },
        { path: 'events', component: EventsviewComponent },
      ]
    }
  ]



