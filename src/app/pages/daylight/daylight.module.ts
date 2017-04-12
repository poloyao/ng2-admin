import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaylightComponent } from './daylight.component';
import { DaylightRoutes } from './daylight.routing';
import { NgaModule } from '../../theme/nga.module';
import { DaylightService} from './daylight.service';
import { DropdownModule, ModalModule } from 'ng2-bootstrap';
import { FormsModule as AngularFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DaylightRoutes,
    NgaModule,
    DropdownModule.forRoot(),
    ModalModule.forRoot(),
    AngularFormsModule
  ],
  declarations: [DaylightComponent],
  providers:[DaylightService]
})
export class DaylightModule { }