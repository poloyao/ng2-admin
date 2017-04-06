import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NgaSidebarService {

  private toggleChanges$ = new Subject<any>();
  private expandChanges$ = new Subject<any>();
  private collapseChanges$ = new Subject<any>();

  toggleChanges: Observable<any> = this.toggleChanges$.asObservable();
  expandChanges: Observable<any> = this.expandChanges$.asObservable();
  collapseChanges: Observable<any> = this.collapseChanges$.asObservable();

  toggle(compact: boolean = false, tag?: string) {
    this.toggleChanges$.next({ compact, tag });
    this.toggleChanges$.complete();
  }

  expand(tag?: string) {
    this.expandChanges$.next({ tag });
    this.toggleChanges$.complete();
  }

  collapse(tag?: string) {
    this.collapseChanges$.next({ tag });
    this.collapseChanges$.complete();
  }

}
