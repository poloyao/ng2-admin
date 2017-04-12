import { Injectable } from '@angular/core';
import {BaThemeConfigProvider} from '../../theme';

@Injectable()
export class DaylightService {

constructor(private _baConfig:BaThemeConfigProvider) { }

getData(){
    let dashboardColors = this._baConfig.get().colors.dashboard;
     return {
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
        //right: 'next today'
      },
      //defaultDate: '2016-03-08',
      titleFormat: { month: 'YYYY年M月' },
      dayNames:["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
      dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      selectable: true,
      selectHelper: true,
      editable: true,
      eventLimit: true,
    };
}

}