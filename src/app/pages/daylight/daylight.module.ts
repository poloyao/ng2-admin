import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaylightComponent } from './daylight.component';
import { DaylightRoutes } from './daylight.routing';
import { NgaModule } from '../../theme/nga.module';
import { DaylightService} from './daylight.service';

@NgModule({
  imports: [
    CommonModule,
    DaylightRoutes,
    NgaModule
  ],
  declarations: [DaylightComponent],
  providers:[DaylightService]
})
export class DaylightModule { }