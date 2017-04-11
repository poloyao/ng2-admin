import { Routes, RouterModule } from '@angular/router';
import { DaylightComponent } from './daylight.component';

const routes: Routes = [
  { path:'',
    component:DaylightComponent  
 },
];

export const DaylightRoutes = RouterModule.forChild(routes);
