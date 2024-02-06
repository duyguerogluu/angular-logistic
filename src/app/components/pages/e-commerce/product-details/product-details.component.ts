import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  TabStyle1:any;
  showNavigationIndicators = false;
  currentRoute: any;
  urlData: any;
  customOptions!: OwlOptions
 
  constructor(){}
  
  ngOnInit(): void {
    this.customOptions = {
      loop: true,
      rewind: false,
      slideTransition: 'linear',
      margin: 25,
      autoplay: true,
      autoplayTimeout: 5000,
      // autoplayHoverPause: false,
      dots: false,
      navText: [ '&#8249', '&#8250;' ],
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        1900 :{
          items:1,
          nav: true
        }
      }
  
    }
  }

  owlCarouselData = [
    { id: 1, img: './assets/images/pngs/1.png', details: 'Laptop Bags', oldValue:'$99.00', newValue:'$79.00' },
    { id: 2, img: './assets/images/pngs/2.png', details: 'Sandals', oldValue:'$87.00', newValue:'$25.00' },
    { id: 3, img: './assets/images/pngs/3.png', details: 'Laptop', oldValue:'$159.00', newValue:'$134.00' },
    { id: 4, img: './assets/images/pngs/4.png', details: 'Flowers',  oldValue:'$59.00', newValue:'$34.00' },
    { id: 5, img: './assets/images/pngs/5.png', details: 'Chairs',  oldValue:'$37.00', newValue:'$25.00' },
    { id: 6, img: './assets/images/pngs/6.png', details: 'Smart Bands',  oldValue:'$64.00', newValue:'$25.00'  },
    { id: 7, img: './assets/images/pngs/7.png', details: 'Computers',  oldValue:'$135.00', newValue:'$119.00'  },
    { id: 8, img: './assets/images/pngs/8.png', details: 'Hand bags',  oldValue:'$44.00', newValue:'$35.00' },
    
  ]

}
