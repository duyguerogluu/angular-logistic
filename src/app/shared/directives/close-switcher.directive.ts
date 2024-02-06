import { Directive, HostListener } from '@angular/core';
import { LayoutService } from '../services/layout.service';
import { SwitcherService } from '../services/switcher.service';

@Directive({
  selector: '[appCloseSwitcher]'
})
export class CloseSwitcherDirective {

  constructor(public switcherService: SwitcherService, public layoutService: LayoutService) { }

  @HostListener('click', [])
  onBodyClick(){    
    this.switcherService.emitSwitcherChange(false);
    this.layoutService.emitSidebarNotifyChange(false);
  }
  
}
