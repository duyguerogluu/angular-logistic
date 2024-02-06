import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Renderer2,
} from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { Subscription } from 'rxjs';
import { SwitcherService } from '../../services/switcher.service';
import { checkHoriMenu } from '../sidemenu/sidemenu';
import * as switcher from './switcher';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss'],
})
export class SwitcherComponent implements OnInit, AfterViewInit {
  body = document.querySelector('body');
  layoutSub: Subscription;

  @ViewChild('switcher', { static: false }) switcher!: ElementRef;

  constructor(
    public renderer: Renderer2,
    public switcherService: SwitcherService
  ) {
    this.layoutSub = switcherService.SwitcherChangeEmitted.subscribe(
      (value) => {
        if (value) {
          this.renderer.addClass(this.switcher.nativeElement, 'active');
          this.renderer.setStyle(this.switcher.nativeElement, 'right', '0px');
          value = true;
        } else {
          this.renderer.removeClass(this.switcher.nativeElement, 'active');
          this.renderer.setStyle(
            this.switcher.nativeElement,
            'right',
            '-270px'
          );
          value = false;
        }
      }
    );
  }

  ngAfterViewInit() {
    new PerfectScrollbar('.sidebar-right1', {
      useBothWheelAxes: true,
      suppressScrollX: true,
    });
  }

  ngOnInit(): void {
    switcher.localStorageBackUp();
    switcher.customClickFn();
    switcher.updateChanges();
    switcher.checkOptions();
  }
  reset() {
    sessionStorage.clear();
    let html: any = document.querySelector('html');
    let body = document.querySelector('body');
    
    let styleId = document.querySelector('#style');
    let lightBtn = document.getElementById('myonoffswitch6') as HTMLInputElement;
    let ltr = document.querySelector('#myonoffswitch4')  as HTMLInputElement;
    let vertical = document.querySelector('#myonoffswitch1') as HTMLInputElement;
    let mainContent = document.querySelector('.main-content');
    let mainContainer = document.querySelectorAll('.main-container');
    let header = document.querySelector('.header');
    let appSidebar = document.querySelector('.app-sidebar');
    let mainSidemenu = document.querySelector('.main-sidemenu');

    html.style = '';
    // body?.classList.add('light-header');
    // body?.classList.add('dark-menu');

    body?.classList.remove('dark-mode');
    body?.classList.remove('transparent-mode');
    body?.classList.remove('bg-img1');
    body?.classList.remove('bg-img2');
    body?.classList.remove('bg-img3');
    body?.classList.remove('bg-img4');
    body?.classList.remove('light-header');
    body?.classList.remove('dark-header');
    body?.classList.remove('color-header');
    body?.classList.remove('gradient-header');
    body?.classList.remove('dark-menu');
    body?.classList.remove('light-menu');
    body?.classList.remove('color-menu');
    body?.classList.remove('gradient-menu');
    body?.classList.remove('layout-boxed');
    body?.classList.remove('scrollable-layout');
    switcher.updateChanges();
    switcher.checkOptions();
    let primaryColorVal = getComputedStyle(document.documentElement).getPropertyValue('--primary-bg-color').trim();
    document.querySelector('html')?.style.setProperty('--primary-bg-color', primaryColorVal);
    // horizontal to vertical
      //add
      body?.classList.add('sidebar-mini');
      mainContent?.classList.add('app-content');
      mainContainer.forEach((e,i)=>{
        e?.classList.add('container-fluid');
      })
      header?.classList.add('app-header');
      //remove
      body?.classList.remove('horizontal');
      body?.classList.remove('horizontal-hover');
      mainContent?.classList.remove('hor-content');
      mainContainer.forEach((e,i)=>{
        e?.classList.remove('container');
      })
      header?.classList.remove('hor-header');
      appSidebar?.classList.remove('horizontal-main');
      mainSidemenu?.classList.remove('container');

      document.querySelector('.slide-left')?.classList.add('d-none');
      document.querySelector('.slide-right')?.classList.add('d-none');


    // rtl to ltr
      body?.classList.add('ltr');
      html?.setAttribute('dir', 'ltr');
      styleId?.setAttribute( 'href', './assets/bootstrap/bootstrap.css');
      //remove
      body?.classList.remove('rtl');
      checkHoriMenu();

    vertical.checked = true;
    lightBtn.checked = true;
    ltr.checked = true;
    let defaultLayout = document.getElementById('myonoffswitch16') as HTMLInputElement;
    defaultLayout.checked = true;
    let defaultPosition = document.getElementById('myonoffswitch18') as HTMLInputElement;
    defaultPosition.checked = true;
  }


  public color1: string = '#6259ca';
  public color2: string = '#6259ca';
  public color3: string = '#6259ca';
  public color4: string = '#6259ca';
  public color5: string = '#6259ca';

  public dynamicLightPrimary(data: any): void {
    this.color1 = data.color;

    const dynamicPrimaryLight = document.querySelectorAll(
      'input.color-primary-light'
    );

    switcher.dynamicLightPrimaryColor(dynamicPrimaryLight, this.color1);

    sessionStorage.setItem('Zanexlight-primary-color', this.color1);
    sessionStorage.setItem('Zanexlight-primary-hover', this.color1);
    sessionStorage.setItem('Zanexlight-primary-border', this.color1);
    let light = document.getElementById('myonoffswitch6') as HTMLInputElement;
    light.checked = true;

    // Adding
    this.body?.classList.add('light-mode');
    sessionStorage.setItem('ZanexLightTheme', 'true');

    // removing
    sessionStorage.removeItem('ZanexDarkTheme');
    sessionStorage.removeItem('ZanexTransparentTheme');
    this.body?.classList.remove('dark-mode');
    this.body?.classList.remove('transparent-mode');
    this.body?.classList.remove('bg-img1');
    this.body?.classList.remove('bg-img2');
    this.body?.classList.remove('bg-img3');
    this.body?.classList.remove('bg-img4');

    sessionStorage.removeItem('Zanexdark-primary-color');
    sessionStorage.removeItem('Zanextransparent-primary-color');
    sessionStorage.removeItem('Zanextransparent-bg-color');
    sessionStorage.removeItem('Zanextransparent-bgImg-primary-color');
    sessionStorage.removeItem('ZanexBgImage');
    switcher.checkOptions();
    switcher.updateChanges();
  }
  public dynamicDarkPrimary(data: any): void {
    this.color2 = data.color;

    const dynamicPrimaryDark = document.querySelectorAll(
      'input.color-primary-dark'
    );

    switcher.dynamicDarkPrimaryColor(dynamicPrimaryDark, this.color2);

    sessionStorage.setItem('Zanexdark-primary-color', this.color2);
    let dark = document.getElementById('myonoffswitch7') as HTMLInputElement;
    dark.checked = true;

    // Adding
    this.body?.classList.add('dark-mode');
    sessionStorage.setItem('ZanexDarkTheme', 'true');

    // removing
    sessionStorage.removeItem('ZanexLightTheme');
    sessionStorage.removeItem('ZanexTransparentTheme');
    this.body?.classList.remove('light-mode');
    this.body?.classList.remove('transparent-mode');
    this.body?.classList.remove('bg-img1');
    this.body?.classList.remove('bg-img2');
    this.body?.classList.remove('bg-img3');
    this.body?.classList.remove('bg-img4');

    sessionStorage.removeItem('Zanexlight-primary-color');
    sessionStorage.removeItem('Zanexlight-primary-hover');
    sessionStorage.removeItem('Zanexlight-primary-border');
    sessionStorage.removeItem('Zanextransparent-primary-color');
    sessionStorage.removeItem('Zanextransparent-bg-color');
    sessionStorage.removeItem('Zanextransparent-bgImg-primary-color');
    sessionStorage.removeItem('ZanexBgImage');
    switcher.checkOptions();
    switcher.updateChanges();
  }
  public dynamicTranparentPrimary(data: any): void {
    this.color3 = data.color;

    const dynamicPrimaryTrasnsparent = document.querySelectorAll(
      'input.color-primary-transparent'
    );

    switcher.dynamicTrasnsparentPrimaryColor(
      dynamicPrimaryTrasnsparent,
      this.color3
    );
    sessionStorage.setItem('Zanextransparent-primary-color', this.color3);
    let transparent = document.getElementById(
      'myonoffswitchTransparent'
    ) as HTMLInputElement;
    transparent.checked = true;

    // Adding
    this.body?.classList.add('transparent-mode');
    sessionStorage.setItem('ZanexTransparentTheme', 'true');

    // Removing
    sessionStorage.removeItem('ZanexDarkTheme');
    sessionStorage.removeItem('ZanexLightTheme');
    this.body?.classList.remove('light-mode');
    this.body?.classList.remove('dark-mode');
    this.body?.classList.remove('bg-img1');
    this.body?.classList.remove('bg-img2');
    this.body?.classList.remove('bg-img3');
    this.body?.classList.remove('bg-img4');
    this.body?.classList.remove('light-header');
    this.body?.classList.remove('dark-header');
    this.body?.classList.remove('color-header');
    this.body?.classList.remove('gradient-header');
    this.body?.classList.remove('light-menu');
    this.body?.classList.remove('color-menu');
    this.body?.classList.remove('dark-menu');
    this.body?.classList.remove('gradient-menu');

    sessionStorage.removeItem('Zanexlight-primary-color');
    sessionStorage.removeItem('Zanexlight-primary-hover');
    sessionStorage.removeItem('Zanexlight-primary-border');
    sessionStorage.removeItem('Zanexdark-primary-color');
    sessionStorage.removeItem('Zanextransparent-bg-color');
    sessionStorage.removeItem('Zanextransparent-bgImg-primary-color');
    sessionStorage.removeItem('ZanexBgImage');
    switcher.removeForTransparent();
    switcher.updateChanges();
  }
  public dynamicTranparentBgPrimary(data: any): void {
    this.color4 = data.color;

    const dynamicPrimaryBgTrasnsparent = document.querySelectorAll(
      'input.color-bg-transparent'
    );

    switcher.dynamicBgTrasnsparentPrimaryColor(
      dynamicPrimaryBgTrasnsparent,
      this.color4
    );
    sessionStorage.setItem('Zanextransparent-bg-color', this.color4);
    let transparent = document.getElementById(
      'myonoffswitchTransparent'
    ) as HTMLInputElement;
    transparent.checked = true;

    // Adding
    this.body?.classList.add('transparent-mode');
    sessionStorage.setItem('ZanexTransparentTheme', 'true');

    // Removing
    sessionStorage.removeItem('ZanexDarkTheme');
    sessionStorage.removeItem('ZanexLightTheme');
    this.body?.classList.remove('light-mode');
    this.body?.classList.remove('dark-mode');
    this.body?.classList.remove('bg-img1');
    this.body?.classList.remove('bg-img2');
    this.body?.classList.remove('bg-img3');
    this.body?.classList.remove('bg-img4');
    this.body?.classList.remove('light-header');
    this.body?.classList.remove('dark-header');
    this.body?.classList.remove('color-header');
    this.body?.classList.remove('gradient-header');
    this.body?.classList.remove('light-menu');
    this.body?.classList.remove('color-menu');
    this.body?.classList.remove('dark-menu');
    this.body?.classList.remove('gradient-menu');

    sessionStorage.removeItem('Zanexlight-primary-color');
    sessionStorage.removeItem('Zanexlight-primary-hover');
    sessionStorage.removeItem('Zanexlight-primary-border');
    sessionStorage.removeItem('Zanexdark-primary-color');
    sessionStorage.removeItem('Zanextransparent-bgImg-primary-color');
    sessionStorage.removeItem('ZanexBgImage');
    switcher.removeForTransparent();
    switcher.updateChanges();
  }
  public dynamicTranparentImgPrimary(data: any): void {
    this.color5 = data.color;

    const dynamicPrimaryBgImgTrasnsparent = document.querySelectorAll(
      'input.color-primary-transparent-img'
    );

    switcher.dynamicBgImgTrasnsparentPrimaryColor(
      dynamicPrimaryBgImgTrasnsparent,
      this.color5
    );

    sessionStorage.setItem('Zanextransparent-bgImg-primary-color', this.color5);
    let transparent = document.getElementById(
      'myonoffswitchTransparent'
    ) as HTMLInputElement;
    transparent.checked = true;

    if (
      document.querySelector('body')?.classList.contains('bg-img1') == false &&
      document.querySelector('body')?.classList.contains('bg-img2') == false &&
      document.querySelector('body')?.classList.contains('bg-img3') == false &&
      document.querySelector('body')?.classList.contains('bg-img4') == false
    ) {
      document.querySelector('body')?.classList.add('bg-img1');
      sessionStorage.setItem('ZanexBgImage', 'bg-img1');
    }
    // Adding
    this.body?.classList.add('transparent-mode');
    sessionStorage.setItem('ZanexTransparentTheme', 'true');

    // Removing
    sessionStorage.removeItem('ZanexDarkTheme');
    sessionStorage.removeItem('ZanexLightTheme');
    this.body?.classList.remove('light-mode');
    this.body?.classList.remove('dark-mode');
    this.body?.classList.remove('light-header');
    this.body?.classList.remove('dark-header');
    this.body?.classList.remove('color-header');
    this.body?.classList.remove('gradient-header');
    this.body?.classList.remove('light-menu');
    this.body?.classList.remove('color-menu');
    this.body?.classList.remove('dark-menu');
    this.body?.classList.remove('gradient-menu');

    sessionStorage.removeItem('Zanexlight-primary-color');
    sessionStorage.removeItem('Zanexlight-primary-hover');
    sessionStorage.removeItem('Zanexlight-primary-border');
    sessionStorage.removeItem('Zanexdark-primary-color');
    sessionStorage.removeItem('Zanextransparent-primary-color');
    sessionStorage.removeItem('Zanextransparent-bg-color');
    switcher.removeForTransparent();
    switcher.updateChanges();
  }

  bgImage(e: any) {
    let transparent = document.getElementById(
      'myonoffswitchTransparent'
    ) as HTMLInputElement;
    transparent.checked = true;

    let img = e.parentElement.classList[0];
    sessionStorage.setItem('ZanexBgImage', img);
    // this.body?.classList.add(img);
    let allImg = document.querySelectorAll('.bg-img');
    allImg.forEach((el, i) => {
      let ele = el.classList[0];
      this.body?.classList.remove(ele);
      this.body?.classList.add(img);
    });

    // Adding
    this.body?.classList.add('transparent-mode');
    sessionStorage.setItem('ZanexTransparentTheme', 'true');

    // Removing
    sessionStorage.removeItem('ZanexDarkTheme');
    sessionStorage.removeItem('ZanexLightTheme');
    this.body?.classList.remove('light-mode');
    this.body?.classList.remove('dark-mode');
    this.body?.classList.remove('light-header');
    this.body?.classList.remove('dark-header');
    this.body?.classList.remove('color-header');
    this.body?.classList.remove('gradient-header');
    this.body?.classList.remove('light-menu');
    this.body?.classList.remove('color-menu');
    this.body?.classList.remove('dark-menu');
    this.body?.classList.remove('gradient-menu');
    sessionStorage.removeItem('Zanexlight-primary-color');
    sessionStorage.removeItem('Zanexlight-primary-hover');
    sessionStorage.removeItem('Zanexlight-primary-border');
    sessionStorage.removeItem('Zanexdark-primary-color');
    sessionStorage.removeItem('Zanextransparent-primary-color');
    sessionStorage.removeItem('Zanextransparent-bg-color');
    switcher.removeForTransparent();
    switcher.updateChanges();
  }
}
