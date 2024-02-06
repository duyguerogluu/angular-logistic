import { DOCUMENT } from '@angular/common';
import { Directive, HostListener, Inject, OnChanges, OnInit } from '@angular/core';


@Directive({
  selector: '[appFullscreenToggle]'
})
export class FullscreenToggleDirective implements OnInit {

  public fullScreen: boolean = false;
  public elem : any;
  idata!: HTMLElement | any;
  idd!: HTMLElement | any;

  constructor(
    @Inject(DOCUMENT) private document: any
  ) {
   
   }

  ngOnInit(){
    this.elem = document.documentElement;
    this.idata = document.documentElement.querySelector('body')?.querySelector('.nav-link.icon.full-screen-link')?.querySelector('i')
    document.addEventListener('fullscreenchange', this.exitHandler);
    document.addEventListener('webkitfullscreenchange', this.exitHandler);
    document.addEventListener('mozfullscreenchange', this.exitHandler);
    document.addEventListener('MSFullscreenChange', this.exitHandler);
  }
  @HostListener('click')
  
  onClick(){
    this.fullScreen = !this.fullScreen;
    if (this.fullScreen) {
      if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen();
        this.idata.classList.add('fe-minimize')
        this.idata.classList.remove('fe-maximize')
      } else if (this.elem.mozRequestFullScreen) {
        /* Firefox */
        this.elem.mozRequestFullScreen();
        this.idata.classList.add('fe-minimize')
        this.idata.classList.remove('fe-maximize')
      } else if (this.elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.elem.webkitRequestFullscreen();
        this.idata.classList.add('fe-minimize')
        this.idata.classList.remove('fe-maximize')
      } else if (this.elem.msRequestFullscreen) {
        /* IE/Edge */
        this.elem.msRequestFullscreen();
        this.idata.classList.add('fe-minimize')
        this.idata.classList.remove('fe-maximize')
      }
    } else {
      
      if (!this.document.exitFullscreen) {
        this.document.exitFullscreen();
        this.idata.classList.remove('fe-minimize')
        this.idata.classList.add('fe-maximize')
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
        this.idata.classList.remove('fe-minimize')
        this.idata.classList.add('fe-maximize')
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
        this.idata.classList.remove('fe-minimize')
        this.idata.classList.add('fe-maximize')
        
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
        this.idata.classList.remove('fe-minimize')
        this.idata.classList.add('fe-maximize')
      }
    }
  }

  exitHandler() {
    
    if (!document.fullscreenElement  ) {
      this.idd = document.querySelector('body')?.querySelector('.nav-link.icon.full-screen-link')?.querySelector('i') 
      this.idd.classList.remove('fe-minimize')
      this.idd.classList.add('fe-maximize')
    }
  }  


}
