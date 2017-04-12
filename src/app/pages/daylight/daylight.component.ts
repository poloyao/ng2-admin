import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';


import { DaylightService } from './daylight.service';
import 'style-loader!./daylight.scss';

@Component({
  selector: 'daylight',
  //template: `<strong>My page content here</strong>`
  //styleUrls: ['./daylight.scss'],
  //moduleId:module.id,
  templateUrl: './daylight.component.html'
})
export class DaylightComponent {

  @ViewChild('childModal') public childModal: ModalDirective;

  public showChildModal(): void {
    this.childModal.show();
  }

  public hideChildModal(): void {
    this.childModal.hide();
  }
  dialogTitile;

  public daylightConfiguration: any;
  private _daylight: Object;

  constructor(private _daylightService: DaylightService ) 
  {
    this.daylightConfiguration = this._daylightService.getData();
    this.daylightConfiguration.select = (start, end) => this._onSelect(start, end);
    //this.daylightConfiguration.titleFormat = { month: 'YYYY年M月' };
    //this.daylightConfiguration.dayNames = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    //this.daylightConfiguration.dayNamesShort = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    //this.daylightConfiguration.dayRender(new Date().getDate(),new HTMLTableDataCellElement() );
  }

  public onCalendarReady(calender): void {
    this._daylight = calender;
  }

  private _onSelect(start, end): void {
    if (this._daylight != null) {
      this.name = '';
      this.dialogTitile = start;
      this._start = start;
      this._end = end;
      this.childModal.show();
    }
  }
  name;
  _start;
  _end;
  public onSaveDialog(): void {
    let eventData;
    eventData = {
      title: this.name,
      start: this._start,
      end: this._end
    };
    //console.log(eventData);
    jQuery(this._daylight).fullCalendar('renderEvent', eventData, true);
    this.childModal.hide();
  }



}