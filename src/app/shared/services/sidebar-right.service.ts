import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarRightService {

  constructor() { }

  private emitChangeSource = new Subject<any>();
  changeEmitted = this.emitChangeSource.asObservable();
  emitChange(change: any){
    this.emitChangeSource.next(change);
  }

  //Sidebar Notification
  private emitSidebarNofitSource = new Subject<any>();
  SidebarNotifyChangeEmitted = this.emitSidebarNofitSource.asObservable();
  emitSidebarNotifyChange(change: any) {
    this.emitSidebarNofitSource.next(change);
  }
}
