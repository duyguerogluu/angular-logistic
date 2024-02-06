import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appSidemenuToggle]'
})
export class SidemenuToggleDirective {
  private body:any = document.querySelector('body');
  constructor() { }

  @HostListener('click') toggleSidemenu(){
    if (this.body !=  !this.body) {
    //  if(innerWidth >= 992){
      document.querySelector('body')?.classList.toggle('sidenav-toggled');
    // }
    }
  }
}
