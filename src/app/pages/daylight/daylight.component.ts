import {Component} from '@angular/core';

import { DaylightService } from './daylight.service';
import 'style-loader!./daylight.scss';

@Component({
  selector: 'daylight',
  //template: `<strong>My page content here</strong>`
  templateUrl: './daylight.component.html'
})
export class DaylightComponent {

  public daylightConfiguration:any;
  private _daylight:Object;
  
  constructor(private _daylightService:DaylightService) {
    this.daylightConfiguration = this._daylightService.getData();
    this.daylightConfiguration.select = (start,end) =>this._onSelect(start,end);
    this.daylightConfiguration.titleFormat = { month:'YYYY年M月'};
    this.daylightConfiguration.dayNames = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    this.daylightConfiguration.dayNamesShort = ["日", "一", "二", "三", "四", "五", "六"];
  }


  public onCalendarReady(calender):void{
    this._daylight = calender;
  }


  private _onSelect(start,end):void{
    if(this._daylight != null){
      let title = prompt('日程名称:');
      let eventData;
      if(title){
        eventData = {
          title: title,
          start: start,
          end: end
        };
        jQuery(this._daylight).fullCalendar('renderEvent',eventData,true);
      }
      jQuery(this._daylight).fullCalendar('unselect');
    }
  }

}