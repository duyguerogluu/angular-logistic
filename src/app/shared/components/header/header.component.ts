import { Component, OnInit, AfterViewInit , Inject, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from '../../services/layout.service';
import { NavService } from '../../services/nav.service';
import { SwitcherService } from '../../services/switcher.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isCollapsed = true;
  
  constructor(
    private layoutService: LayoutService,
    public navServices: NavService,
    private switcherService: SwitcherService,
  ) {}
  
  ngOnInit(): void {
  }

  toggleSidebar(){
    if ((this.navServices.collapseSidebar = !this.navServices.collapseSidebar)) {
      document.querySelector('.app')?.classList.add('sidenav-toggled');
    }
    else {
      document.querySelector('.app')?.classList.remove('sidenav-toggled');
    }
  }

  toggleSidebarNotification() {
    if(document.querySelector('.sidebar-right')?.classList.contains('sidebar-open')) {
      this.layoutService.emitSidebarNotifyChange(false);
    }else{
      this.layoutService.emitSidebarNotifyChange(true);
    }
  }
  
  toggleSwitcher() {    
    if(document.querySelector('.demo_changer')?.classList.contains('active')) {
      this.switcherService.emitSwitcherChange(false);
    }else{
      this.switcherService.emitSwitcherChange(true);
    }
  }
}
