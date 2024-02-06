import { fromEvent } from 'rxjs';

export function switcherArrowFn() {
  // used to remove show class and remove class on clicking arrow buttons
  function slideClick() {
    let NavItem = document.querySelectorAll<HTMLElement>('.nav-item');
    let sideMenu = document.querySelectorAll<HTMLElement>('.nav-sub');
    NavItem.forEach((element, index) => {
      if (element.classList.contains('show') == true) {
        element.classList.remove('show');
      }
    });
    sideMenu.forEach((element, index) => {
      if (element.classList.contains('open') == true) {
        element.classList.remove('open');
        element.style.display = 'none';
      }
    });
  }

  checkHoriMenu();

  let slideLeft: HTMLElement | any = document.querySelector('.slide-left');
  let slideRight: HTMLElement | any = document.querySelector('.slide-right');

  fromEvent(slideLeft, 'click').subscribe(() => {

    let sideMenu: any = document.querySelector<HTMLElement>('.side-menu');
    let mainSidemenu: any =
      document.querySelector<HTMLElement>('.main-sidemenu');
    let marginLeftValue = Math.ceil(Number(window.getComputedStyle(sideMenu).marginLeft.split('px')[0]));
    let marginRightValue = Math.ceil(Number(window.getComputedStyle(sideMenu).marginRight.split('px')[0]));
    let mainSidemenuWidth = mainSidemenu.offsetWidth;
    if (sideMenu.scrollWidth > mainSidemenu.offsetWidth) {
      if (!document.body.classList.contains('rtl')) {
        if ( marginLeftValue < 0 && !(Math.abs(marginLeftValue) < mainSidemenuWidth)) {
          sideMenu.style.marginRight = 0;
          sideMenu.style.marginLeft = Number(sideMenu.style.marginLeft.split('px')[0]) + Math.abs(mainSidemenuWidth) + 'px';
          slideRight.classList.remove('d-none');
        } else if (marginLeftValue >= 0) {
          sideMenu.style.marginLeft = '0px';
          slideLeft.classList.add('d-none');
          slideRight.classList.remove('d-none');
        } else {
          sideMenu.style.marginLeft = '0px';
          slideLeft.classList.add('d-none');
          slideRight.classList.remove('d-none');
        }
      } else {
        if ( marginRightValue < 0 && !(Math.abs(marginRightValue) < mainSidemenuWidth)) {
          sideMenu.style.marginLeft = 0;
          sideMenu.style.marginRight = Number(sideMenu.style.marginRight.split('px')[0]) + Math.abs(mainSidemenuWidth) + 'px';
          slideRight.classList.remove('d-none');
        } else if (marginRightValue >= 0) {
          sideMenu.style.marginRight = '0px';
          slideLeft.classList.add('d-none');
          slideRight.classList.remove('d-none');
        } else {
          sideMenu.style.marginRight = '0px';
          slideLeft.classList.add('d-none');
          slideRight.classList.remove('d-none');
        }
      }
    }

    slideClick();
    return;
    //
  });
  fromEvent(slideRight, 'click').subscribe(() => {
    let sideMenu: any = document.querySelector<HTMLElement>('.side-menu');
    let mainSidemenu: any = document.querySelector<HTMLElement>('.main-sidemenu');
    let marginLeftValue = Math.ceil(Number(window.getComputedStyle(sideMenu).marginLeft.split('px')[0]));
    let marginRightValue = Math.ceil(Number(window.getComputedStyle(sideMenu).marginRight.split('px')[0]));
    let check = sideMenu.scrollWidth - mainSidemenu.offsetWidth;
    let mainSidemenuWidth = mainSidemenu.offsetWidth;

    console.log('ok');
    
    if (sideMenu.scrollWidth > mainSidemenu.offsetWidth) {
      if (!document.body.classList.contains('rtl')) {
        if (Math.abs(check) > Math.abs(marginLeftValue)) {
          sideMenu.style.marginRight = 0;
          if (!(Math.abs(check) > Math.abs(marginLeftValue) + mainSidemenuWidth)) {
            mainSidemenuWidth = Math.abs(check) - Math.abs(marginLeftValue);
            slideRight.classList.add('d-none');
          }
          sideMenu.style.marginLeft = Number(sideMenu.style.marginLeft.split('px')[0]) - Math.abs(mainSidemenuWidth) + 'px';
          slideLeft.classList.remove('d-none');
        }
      } else {
        if (Math.abs(check) > Math.abs(marginRightValue)) {
          sideMenu.style.marginLeft = 0;
          if (!(Math.abs(check) > Math.abs(marginRightValue) + mainSidemenuWidth)) {
            mainSidemenuWidth = Math.abs(check) - Math.abs(marginRightValue);
            slideRight.classList.add('d-none');
          }
          sideMenu.style.marginRight = Number(sideMenu.style.marginRight.split('px')[0]) - Math.abs(mainSidemenuWidth) + 'px';
          slideLeft.classList.remove('d-none');
        }
      }
    }

    slideClick();
    return;
  });
}
export function checkHoriMenu() {
  let sideMenu: any = document.querySelector<HTMLElement>('.side-menu');
  let mainSidemenu: any = document.querySelector<HTMLElement>('.main-sidemenu');
  let appSidebar: any = document.querySelector<HTMLElement>('.app-sidebar');
  let slideLeft: HTMLElement | any = document.querySelector('.slide-left');
  let slideRight: HTMLElement | any = document.querySelector('.slide-right');
  let marginLeftValue = Math.ceil(Number(window.getComputedStyle(sideMenu).marginLeft.split('px')[0]));
  let marginRightValue = Math.ceil(Number(window.getComputedStyle(sideMenu).marginRight.split('px')[0]));
  let check = sideMenu.scrollWidth - mainSidemenu.offsetWidth;

  setTimeout(()=>{

    console.log();
    
      // Show/Hide the arrows
    if (sideMenu.scrollWidth > mainSidemenu.offsetWidth) {
      slideRight.classList.remove('d-none');
      slideLeft.classList.add('d-none');
    }
    else{
      slideRight.classList.add('d-none');
      slideLeft.classList.add('d-none');
      sideMenu.style.marginLeft = '0px';
      sideMenu.style.marginRight = '0px';
    }
    if(marginLeftValue == 0 || marginRightValue == 0){
      slideLeft.classList.add('d-none');
    }
    else{
      slideLeft.classList.remove('d-none');
    }
    // 
    if(!document.body.classList.contains('rtl')){      
      // LTR check the width and adjust the menu in screen
      if (sideMenu.scrollWidth > mainSidemenu.offsetWidth){
        if(Math.abs(check) < Math.abs(marginLeftValue)){
          sideMenu.style.marginLeft = -check + 'px';
          slideLeft.classList.remove('d-none');
          slideRight.classList.add('d-none');
        }
      }
    }
    else{
      // RTL check the width and adjust the menu in screen
      if (sideMenu.scrollWidth > mainSidemenu.offsetWidth){
        if(Math.abs(check) < Math.abs(marginRightValue)){
          sideMenu.style.marginRight = -check + 'px';
          slideLeft.classList.remove('d-none');
          slideRight.classList.add('d-none');
        }
      }
    }
    if(marginLeftValue != 0 || marginRightValue !=0 ){
      slideLeft.classList.remove('d-none');
    }
  }, 200)
  
}

export function parentNavActive() {
  let slideItemActive = document.querySelector(
    '.nav-link.active:not([href="/"])'
  );
  let SubslideItemActive = document.querySelector(
    '.nav-sub-link.active:not([href="/"])'
  );
  if (slideItemActive) {
    slideItemActive.parentElement?.parentElement?.parentElement?.firstElementChild?.classList.add(
      'active'
    );
  }
  if (SubslideItemActive) {
    SubslideItemActive.parentElement?.classList.add('active');
    SubslideItemActive.parentElement?.parentElement?.parentElement?.firstElementChild?.classList.add(
      'active'
    );
    SubslideItemActive.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.firstElementChild?.classList.add(
      'active'
    );
  }
}
