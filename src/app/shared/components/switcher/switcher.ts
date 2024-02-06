import { fromEvent } from 'rxjs';
import * as sidebarFn from '../sidemenu/sidemenu'

export function localStorageBackUp() {
  let html = document.querySelector('html')?.style;
  let body = document.querySelector('body');
  let styleId = document.querySelector('#style');
  let mainContent = document.querySelector('.main-content');
  let mainContainer = document.querySelectorAll('.main-container');
  let header = document.querySelector('.header');
  let appSidebar = document.querySelector('.app-sidebar');
  let mainSidemenu = document.querySelector('.main-sidemenu');
  let sideMenu = document.querySelector('.horizontal .side-menu');

  if (sessionStorage.getItem('Zanexlight-primary-color') !== null) {
    body?.classList.add('light-mode');
    let light = document.getElementById('myonoffswitch6') as HTMLInputElement;
    light.checked = true;

    body?.classList.remove('dark-mode');
    body?.classList.remove('transparent-mode');
    html?.setProperty('--primary-bg-color',sessionStorage.getItem('Zanexlight-primary-color'));
    html?.setProperty('--primary-bg-hover',sessionStorage.getItem('Zanexlight-primary-color'));
    html?.setProperty('--primary-bg-border',sessionStorage.getItem('Zanexlight-primary-color'));
  }
  if (sessionStorage.getItem('Zanexdark-primary-color') !== null) {
    body?.classList.add('dark-mode');
    let dark = document.getElementById('myonoffswitch7') as HTMLInputElement;
    dark.checked = true;
    let header = document.getElementById('myonoffswitch10') as HTMLInputElement;
    header.checked = true;
    let menu = document.getElementById('myonoffswitch14') as HTMLInputElement;
    menu.checked = true;
    
    body?.classList.remove('light-mode');
    body?.classList.remove('transparent-mode');

    html?.setProperty('--primary-bg-color',sessionStorage.getItem('Zanexdark-primary-color'));
    html?.setProperty('--primary-bg-hover',sessionStorage.getItem('Zanexdark-primary-color'));
    html?.setProperty('--primary-bg-border',sessionStorage.getItem('Zanexdark-primary-color'));
  }
  if (sessionStorage.getItem('Zanextransparent-primary-color') !== null) {
    body?.classList.add('transparent-mode');
    let transparent = document.getElementById('myonoffswitchTransparent') as HTMLInputElement;
    transparent.checked = true;
    
    body?.classList.remove('light-mode');
    body?.classList.remove('dark-mode');
    html?.setProperty('--primary-bg-color',sessionStorage.getItem('Zanextransparent-primary-color'));
  }
  if (sessionStorage.getItem('Zanextransparent-bg-color') !== null) {
    body?.classList.add('transparent-mode');
    let transparent = document.getElementById('myonoffswitchTransparent') as HTMLInputElement;
    transparent.checked = true;
    
    body?.classList.remove('light-mode');
    body?.classList.remove('dark-mode');
    html?.setProperty('--transparent-body',sessionStorage.getItem('Zanextransparent-bg-color'));
  }
  if (sessionStorage.getItem('Zanextransparent-bgImg-primary-color') !== null || sessionStorage.getItem('ZanexBgImage') !== null) {
    body?.classList.add('transparent-mode');
    let transparent = document.getElementById('myonoffswitchTransparent') as HTMLInputElement;
    transparent.checked = true;
    
    body?.classList.remove('light-mode');
    body?.classList.remove('dark-mode');
    let img:any = sessionStorage.getItem('ZanexBgImage');
    html?.setProperty('--primary-bg-color',sessionStorage.getItem('Zanextransparent-bgImg-primary-color'));
    body?.classList.add(img);
  }
  if (sessionStorage.getItem('ZanexLightTheme') !== null ) {
    let light = document.getElementById('myonoffswitch6') as HTMLInputElement;
    light.checked = true;

    body?.classList.remove('dark-mode');
    body?.classList.remove('transparent-mode');
  }
  if (sessionStorage.getItem('ZanexDarkTheme') !== null ) {
    let dark = document.getElementById('myonoffswitch7') as HTMLInputElement;
    dark.checked = true;
    let header = document.getElementById('myonoffswitch10') as HTMLInputElement;
    header.checked = true;
    let menu = document.getElementById('myonoffswitch14') as HTMLInputElement;
    menu.checked = true;
    
    body?.classList.add('dark-mode');

    body?.classList.remove('light-mode');
    body?.classList.remove('transparent-mode');
  }
  if (sessionStorage.getItem('ZanexTransparentTheme') !== null ) {
    let transparent = document.getElementById('myonoffswitchTransparent') as HTMLInputElement;
    transparent.checked = true;
    body?.classList.add('transparent-mode');

    body?.classList.remove('light-mode');
    body?.classList.remove('dark-mode');
  }
  if (sessionStorage.getItem('Zanexrtl') !== null ) {
    let html = document.querySelector('html');
    let rtl = document.getElementById('myonoffswitch5') as HTMLInputElement;
    rtl.checked = true;
     //add
     body?.classList.add('rtl');
     html?.setAttribute('dir', 'rtl');
     styleId?.setAttribute('href','./assets/bootstrap/bootstrap.rtl.css');
     //remove
     body?.classList.remove('ltr');
     sidebarFn.checkHoriMenu();
  }
  if (sessionStorage.getItem('Zanexhorizontal') !== null ) {
    let hori = document.getElementById('myonoffswitch2') as HTMLInputElement;
    hori.checked = true;
        //add
      body?.classList.add('horizontal');
      mainContent?.classList.add('hor-content');
      mainContainer.forEach((e,i)=>{
        e?.classList.add('container');
      })
      header?.classList.add('hor-header');
      appSidebar?.classList.add('horizontal-main');
      mainSidemenu?.classList.add('container');
      sideMenu?.classList.add('flex-nowrap');
      // remove
      sideMenu?.classList.remove('flex-wrap');
      mainContent?.classList.remove('app-content');
      mainContainer.forEach((e,i)=>{
        e?.classList.remove('container-fluid');
      })
      header?.classList.remove('app-header');
      body?.classList.remove('sidebar-mini');
      body?.classList.remove('sidenav-toggled');
      body?.classList.remove('horizontal-hover');
      let li = document.querySelectorAll('.side-menu li');
      li.forEach((e, i) => {
        e.classList.remove('is-expanded');
      });
      sidebarFn.checkHoriMenu();
  }
  if (sessionStorage.getItem('Zanexhorizontalhover') !== null ) {
    let horiHover = document.getElementById('myonoffswitch111') as HTMLInputElement;
    horiHover.checked = true;
       //add
    body?.classList.add('horizontal-hover');
    body?.classList.add('horizontal');
    mainContent?.classList.add('hor-content');
    mainContainer.forEach((e,i)=>{
      e?.classList.add('container');
    })
    header?.classList.add('hor-header');
    appSidebar?.classList.add('horizontal-main');
    mainSidemenu?.classList.add('container');
    sideMenu?.classList.add('flex-nowrap');
    // remove
    sideMenu?.classList.remove('flex-wrap');
    header?.classList.remove('app-header');
    mainContent?.classList.remove('app-content');
    mainContainer.forEach((e,i)=>{
      e?.classList.remove('container-fluid');
    })
    body?.classList.remove('sidebar-mini');
    body?.classList.remove('sidenav-toggled');

    let li = document.querySelectorAll('.side-menu li');
    li.forEach((e, i) => {
      e.classList.remove('is-expanded');
    });
    
    sidebarFn.checkHoriMenu();
  }
}

export function handleThemeUpdate(cssVars: any) {
  const root: any = document.querySelector(':root');
  const keys = Object.keys(cssVars);

  keys.forEach((key) => {
    root.style.setProperty(key, cssVars[key]);
  });
}
// to check the value is hexa or not
const isValidHex = (hexValue: any) =>
  /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue);

const getChunksFromString = (st: any, chunkSize: any) =>
  st.match(new RegExp(`.{${chunkSize}}`, 'g'));
// convert hex value to 256
const convertHexUnitTo256 = (hexStr: any) =>
  parseInt(hexStr.repeat(2 / hexStr.length), 16);
// get alpha value is equla to 1 if there was no value is asigned to alpha in function
const getAlphafloat = (a: any, alpha: any) => {
  if (typeof a !== 'undefined') {
    return a / 255;
  }
  if (typeof alpha != 'number' || alpha < 0 || alpha > 1) {
    return 1;
  }
  return alpha;
};
// convertion of hex code to rgba code
export function hexToRgba(hexValue: any, alpha = 1) {
  if (!isValidHex(hexValue)) {
    return null;
  }
  const chunkSize = Math.floor((hexValue.length - 1) / 3);
  const hexArr = getChunksFromString(hexValue.slice(1), chunkSize);
  const [r, g, b, a] = hexArr.map(convertHexUnitTo256);
  return `rgba(${r}, ${g}, ${b}, ${getAlphafloat(a, alpha)})`;
}

export function dynamicLightPrimaryColor(primaryColor: any, color: any) {
  primaryColor.forEach((item: any) => {
    const cssPropName = `--primary-${item.getAttribute('data-id')}`;
    const cssPropName1 = `--primary-${item.getAttribute('data-id1')}`;
    const cssPropName2 = `--primary-${item.getAttribute('data-id2')}`;
    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
    });
  });
}
export function dynamicDarkPrimaryColor(primaryColor: any, color: any) {
  primaryColor.forEach((item: any) => {
      const cssPropName = `--primary-${item.getAttribute('data-id')}`;
      const cssPropName1 = `--primary-${item.getAttribute('data-id1')}`;
      const cssPropName2 = `--primary-${item.getAttribute('data-id2')}`;
    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
    });
  });
}
export function dynamicTrasnsparentPrimaryColor(primaryColor: any, color: any) {
  primaryColor.forEach((item: any) => {
    const cssPropName = `--primary-${item.getAttribute('data-id')}`;
    const cssPropName1 = `--primary-${item.getAttribute('data-id1')}`;
    const cssPropName2 = `--primary-${item.getAttribute('data-id2')}`;
    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
    });
  });
}
export function dynamicBgTrasnsparentPrimaryColor(
  primaryColor: any,
  color: any
) {
  primaryColor.forEach((item: any) => {
    const cssPropName1 = `--transparent-${item.getAttribute('data-id5')}`;
    handleThemeUpdate({
      [cssPropName1]: hexToRgba(color),
    });
  });
}
export function dynamicBgImgTrasnsparentPrimaryColor(
  primaryColor: any,
  color: any
) {
  primaryColor.forEach((item: any) => {
    const cssPropName = `--primary-${item.getAttribute('data-id')}`;
    const cssPropName1 = `--primary-${item.getAttribute('data-id1')}`;
    const cssPropName2 = `--primary-${item.getAttribute('data-id2')}`;
    handleThemeUpdate({
      [cssPropName]: hexToRgba(color),
      [cssPropName1]: hexToRgba(color),
      [cssPropName2]: hexToRgba(color),
    });
  });
}

export function customClickFn() { 
  let body = document.querySelector('body');
  let html = document.querySelector('html');
  let styleId = document.querySelector('#style');
  let lightBtn = document.getElementById('myonoffswitch6') as HTMLInputElement;
  let darkBtn = document.getElementById('myonoffswitch7') as HTMLInputElement;
  let transparentBtn = document.getElementById('myonoffswitchTransparent') as HTMLInputElement;
  let ltr = document.querySelectorAll('#myonoffswitch4');
  let rtl = document.querySelectorAll('#myonoffswitch5');
  let vertical = document.querySelectorAll('#myonoffswitch1');
  let horizontal = document.querySelectorAll('#myonoffswitch2');
  let horizontalHover = document.querySelectorAll('#myonoffswitch111');
  let defaultTheme: any = document.querySelector('#myonoffswitch16');
  let boxed: any = document.querySelector('#myonoffswitch17');
  let fixedLayout: any = document.querySelector('#myonoffswitch18');
  let scrollableLayout: any = document.querySelector('#myonoffswitch19');
  let lightMenu: any = document.querySelector('#myonoffswitch12');
  let colorMenu: any = document.querySelector('#myonoffswitch13');
  let darkMenu: any = document.querySelector('#myonoffswitch14');
  let gradientMenu: any = document.querySelector('#myonoffswitch15');
  let lightHeader: any = document.querySelector('#myonoffswitch8');
  let colorHeader: any = document.querySelector('#myonoffswitch9');
  let darkHeader: any = document.querySelector('#myonoffswitch10');
  let gradientHeader: any = document.querySelector('#myonoffswitch11');
  let mainContent = document.querySelector('.main-content');
  let mainContainer = document.querySelectorAll('.main-container');
  let header = document.querySelector('.header');
  let appSidebar = document.querySelector('.app-sidebar');
  let mainSidemenu = document.querySelector('.main-sidemenu');
  let sideMenu = document.querySelector('.horizontal .side-menu');

  // LTR
  fromEvent(ltr, 'click').subscribe(() => {
    //add
    body?.classList.add('ltr');
    html?.setAttribute('dir', 'ltr');
    styleId?.setAttribute( 'href', './assets/bootstrap/bootstrap.css');
    //remove
    body?.classList.remove('rtl');
    sidebarFn.checkHoriMenu();
    sessionStorage.removeItem('Zanexrtl');
  });
  // RTL
  fromEvent(rtl, 'click').subscribe(() => {
    //add
    body?.classList.add('rtl');
    html?.setAttribute('dir', 'rtl');
    styleId?.setAttribute('href','./assets/bootstrap/bootstrap.rtl.css');
    //remove
    body?.classList.remove('ltr');
    sidebarFn.checkHoriMenu();

    sessionStorage.setItem('Zanexrtl', 'true');
  });
  // Layouts
  fromEvent(vertical, 'click').subscribe(() => {
    
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

    sessionStorage.removeItem('Zanexhorizontal');
    sessionStorage.removeItem('Zanexhorizontalhover');
  });
  fromEvent(horizontal, 'click').subscribe(() => {
    //add
    body?.classList.add('horizontal');
    mainContent?.classList.add('hor-content');
    mainContainer.forEach((e,i)=>{
      e?.classList.add('container');
    })
    header?.classList.add('hor-header');
    appSidebar?.classList.add('horizontal-main');
    mainSidemenu?.classList.add('container');
    sideMenu?.classList.add('flex-nowrap');
    // remove
    sideMenu?.classList.remove('flex-wrap');
    mainContent?.classList.remove('app-content');
    mainContainer.forEach((e,i)=>{
      e?.classList.remove('container-fluid');
    })
    header?.classList.remove('app-header');
    body?.classList.remove('sidebar-mini');
    body?.classList.remove('sidenav-toggled');
    body?.classList.remove('horizontal-hover');
    let li = document.querySelectorAll('.side-menu li');
    li.forEach((e, i) => {
      e.classList.remove('is-expanded');
    });
    sidebarFn.checkHoriMenu();
    
    sessionStorage.setItem('Zanexhorizontal', 'true');

    sessionStorage.removeItem('Zanexhorizontalhover');
  });
  fromEvent(horizontalHover, 'click').subscribe(() => {
    //add
    body?.classList.add('horizontal-hover');
    body?.classList.add('horizontal');
    mainContent?.classList.add('hor-content');
    mainContainer.forEach((e,i)=>{
      e?.classList.add('container');
    })
    header?.classList.add('hor-header');
    appSidebar?.classList.add('horizontal-main');
    mainSidemenu?.classList.add('container');
    sideMenu?.classList.add('flex-nowrap');
    // remove
    sideMenu?.classList.remove('flex-wrap');
    header?.classList.remove('app-header');
    mainContent?.classList.remove('app-content');
    mainContainer.forEach((e,i)=>{
      e?.classList.remove('container-fluid');
    })
    body?.classList.remove('sidebar-mini');
    body?.classList.remove('sidenav-toggled');

    let li = document.querySelectorAll('.side-menu li');
    li.forEach((e, i) => {
      e.classList.remove('is-expanded');
    });
    
    sidebarFn.checkHoriMenu();

    sessionStorage.setItem('Zanexhorizontalhover', 'true');

    sessionStorage.removeItem('Zanexhorizontal');
  });
  // Theme
  fromEvent(lightBtn, 'click').subscribe(() => {
    sessionStorage.clear();
    lightBtn.checked = true;
    // add
    document.querySelector('body')?.classList.add('light-mode');
    sessionStorage.setItem('ZanexLightTheme', 'true');
    // remove
    sessionStorage.removeItem('ZanexDarkTheme');
    sessionStorage.removeItem('ZanexTransparentTheme');
    document.querySelector('body')?.classList.remove('dark-mode');
    document.querySelector('body')?.classList.remove('transparent-mode');
    document.querySelector('body')?.classList.remove('bg-img1');
    document.querySelector('body')?.classList.remove('bg-img2');
    document.querySelector('body')?.classList.remove('bg-img3');
    document.querySelector('body')?.classList.remove('bg-img4');
  });
  fromEvent(darkBtn, 'click').subscribe(() => {
    sessionStorage.clear();
    darkBtn.checked = true;
    // add
    document.querySelector('body')?.classList.add('dark-mode');
    
    sessionStorage.setItem('ZanexDarkTheme', 'true');
    // remove
    sessionStorage.removeItem('ZanexLightTheme');
    sessionStorage.removeItem('ZanexTransparentTheme');
    document.querySelector('body')?.classList.remove('light-mode');
    document.querySelector('body')?.classList.remove('transparent-mode');
    document.querySelector('body')?.classList.remove('bg-img1');
    document.querySelector('body')?.classList.remove('bg-img2');
    document.querySelector('body')?.classList.remove('bg-img3');
    document.querySelector('body')?.classList.remove('bg-img4');
  });
  fromEvent(transparentBtn, 'click').subscribe(() => {
    sessionStorage.clear();
    transparentBtn.checked = true;
    // add
    document.querySelector('body')?.classList.add('transparent-mode');
    sessionStorage.setItem('ZanexTransparentTheme', 'true');
    // remove
    sessionStorage.removeItem('ZanexDarkTheme');
    sessionStorage.removeItem('ZanexLightTheme');
    document.querySelector('body')?.classList.remove('light-mode');
    document.querySelector('body')?.classList.remove('dark-mode');
    document.querySelector('body')?.classList.remove('bg-img1');
    document.querySelector('body')?.classList.remove('bg-img2');
    document.querySelector('body')?.classList.remove('bg-img3');
    document.querySelector('body')?.classList.remove('bg-img4');
    body?.classList.remove('light-menu');
    body?.classList.remove('color-menu');
    body?.classList.remove('dark-menu');
    body?.classList.remove('gradient-menu');
    body?.classList.remove('light-header');
    body?.classList.remove('color-header');
    body?.classList.remove('gradient-header');
    body?.classList.remove('dark-header');
  });
  // layout width  style
  fromEvent(defaultTheme, 'click').subscribe(() => {
    body?.classList.add('layout-fullwidth');
    body?.classList.remove('layout-boxed');
    sidebarFn.checkHoriMenu();
    // sidebarFn.checkDropdown()
  });
  fromEvent(boxed, 'click').subscribe(() => {
    body?.classList.add('layout-boxed');
    body?.classList.remove('layout-fullwidth');
    sidebarFn.checkHoriMenu();
  });
  // layout position
  fromEvent(fixedLayout, 'click').subscribe(() => {
    body?.classList.add('fixed-layout');
    body?.classList.remove('scrollable-layout');
  });
  fromEvent(scrollableLayout, 'click').subscribe(() => {
    body?.classList.add('scrollable-layout');
    body?.classList.remove('fixed-layout');
  });
  // menu
  fromEvent(lightMenu, 'click').subscribe(() => {
    body?.classList.add('light-menu');
    body?.classList.remove('color-menu');
    body?.classList.remove('dark-menu');
    body?.classList.remove('gradient-menu');
  });
  fromEvent(colorMenu, 'click').subscribe(() => {
    body?.classList.add('color-menu');
    body?.classList.remove('light-menu');
    body?.classList.remove('dark-menu');
    body?.classList.remove('gradient-menu');
  });
  fromEvent(darkMenu, 'click').subscribe(() => {
    body?.classList.add('dark-menu');
    body?.classList.remove('color-menu');
    body?.classList.remove('light-menu');
    body?.classList.remove('gradient-menu');
  });
  fromEvent(gradientMenu, 'click').subscribe(() => {
    body?.classList.add('gradient-menu');
    body?.classList.remove('color-menu');
    body?.classList.remove('light-menu');
    body?.classList.remove('dark-menu');
  });
  // header
  fromEvent(lightHeader, 'click').subscribe(() => {
    body?.classList.add('light-header');
    body?.classList.remove('color-header');
    body?.classList.remove('gradient-header');
    body?.classList.remove('dark-header');
  });
  fromEvent(darkHeader, 'click').subscribe(() => {
    body?.classList.add('dark-header');
    body?.classList.remove('light-header');
    body?.classList.remove('color-header');
    body?.classList.remove('gradient-header');
  });
  fromEvent(colorHeader, 'click').subscribe(() => {
    body?.classList.add('color-header');
    body?.classList.remove('light-header');
    body?.classList.remove('gradient-header');
    body?.classList.remove('dark-header');
  });
  fromEvent(gradientHeader, 'click').subscribe(() => {
    body?.classList.add('gradient-header');
    body?.classList.remove('light-header');
    body?.classList.remove('color-header');
    body?.classList.remove('dark-header');
  });
}


export function removeForTransparent(){
	if( document.querySelector('body')?.classList.contains('header-light')){
        document.querySelector('body')?.classList.remove('header-light')
    }
    // color header 
    if(document.querySelector('body')?.classList.contains('color-header')){
        document.querySelector('body')?.classList.remove('color-header')
    }
    // gradient header 
    if(document.querySelector('body')?.classList.contains('gradient-header')){
        document.querySelector('body')?.classList.remove('gradient-header')
    }
    // dark header 
    if(document.querySelector('body')?.classList.contains('dark-header')){
        document.querySelector('body')?.classList.remove('dark-header')
    }

    // light menu
    if(document.querySelector('body')?.classList.contains('light-menu')){
        document.querySelector('body')?.classList.remove('light-menu')
    }
    // color menu
    if(document.querySelector('body')?.classList.contains('color-menu')){
        document.querySelector('body')?.classList.remove('color-menu')
    }
    // gradient menu
    if(document.querySelector('body')?.classList.contains('gradient-menu')) {
        document.querySelector('body')?.classList.remove('gradient-menu')
    }
    // dark menu
    if(document.querySelector('body')?.classList.contains('dark-menu')) {
        document.querySelector('body')?.classList.remove('dark-menu')
    }
}

export function checkOptions(){
  // light header 
  if( document.querySelector('body')?.classList.contains('header-light')){
    let light = document.getElementById('myonoffswitch6') as HTMLInputElement;
    light.checked = true;
  }
  // color header 
  if(document.querySelector('body')?.classList.contains('color-header')){
    let light = document.getElementById('myonoffswitch7') as HTMLInputElement;
    light.checked = true;
  }
  // gradient header 
  if(document.querySelector('body')?.classList.contains('gradient-header')){
    let light = document.getElementById('myonoffswitch26') as HTMLInputElement;
    light.checked = true;
  }
  // dark header 
  if(document.querySelector('body')?.classList.contains('dark-header')){
    let light = document.getElementById('myonoffswitch8') as HTMLInputElement;
    light.checked = true;
  }

  // light menu
  if(document.querySelector('body')?.classList.contains('light-menu')){
    let light = document.getElementById('myonoffswitch3') as HTMLInputElement;
    light.checked = true;
  }
  // color menu
  if(document.querySelector('body')?.classList.contains('color-menu')){
    let light = document.getElementById('myonoffswitch4') as HTMLInputElement;
    light.checked = true;
  }
  // gradient menu
  if(document.querySelector('body')?.classList.contains('gradient-menu')) {
    let light = document.getElementById('myonoffswitch25') as HTMLInputElement;
    light.checked = true;
  }
  // dark menu
  if(document.querySelector('body')?.classList.contains('dark-menu')) {
    let light = document.getElementById('myonoffswitch5') as HTMLInputElement;
    light.checked = true;
  }
}

let myVarVal;
export function updateChanges(){
  let primaryColorVal = getComputedStyle(document.documentElement).getPropertyValue('--primary-bg-color').trim();
  
  //get variable
	myVarVal  =  sessionStorage.getItem("Zanexlight-primary-color") || sessionStorage.getItem("Zanexdark-primary-color") || sessionStorage.getItem("Zanextransparent-primary-color") || sessionStorage.getItem("Zanextransparent-bgImg-primary-color") || primaryColorVal;
	document.querySelector('html')?.style.setProperty('--primary-bg-color', myVarVal);

  let colorData1 = hexToRgba(myVarVal, 0.1)  
	document.querySelector('html')?.style.setProperty('--primary01', colorData1);

	let colorData2 = hexToRgba(myVarVal, 0.2)
	document.querySelector('html')?.style.setProperty('--primary02', colorData2);

  let colorData3 = hexToRgba(myVarVal, 0.3)  
	document.querySelector('html')?.style.setProperty('--primary03', colorData3);

	let colorData4 = hexToRgba(myVarVal, 0.4)
	document.querySelector('html')?.style.setProperty('--primary04', colorData4);

  let colorData5 = hexToRgba(myVarVal, 0.5)  
	document.querySelector('html')?.style.setProperty('--primary05', colorData5);

	let colorData6 = hexToRgba(myVarVal, 0.6)
	document.querySelector('html')?.style.setProperty('--primary06', colorData6);

  let colorData7 = hexToRgba(myVarVal, 0.7)  
	document.querySelector('html')?.style.setProperty('--primary07', colorData7);

	let colorData8 = hexToRgba(myVarVal, 0.8)
	document.querySelector('html')?.style.setProperty('--primary08', colorData8);

	let colorData9 = hexToRgba(myVarVal, 0.9)
	document.querySelector('html')?.style.setProperty('--primary09', colorData9);

}


