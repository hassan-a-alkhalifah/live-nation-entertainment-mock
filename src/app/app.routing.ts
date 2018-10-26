import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ConcertsComponent } from './concerts/concerts.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'concerts',
    component: ConcertsComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
