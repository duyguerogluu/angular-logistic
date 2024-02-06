import { Component, OnInit } from '@angular/core';

interface wishlist {
  id: number;
  image: string;
  title: string;
  price: string;
  Stock: string;
  stockStatus: string;
}

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  objectArray: wishlist[];
  basicPage = 1;
  constructor() { 
    this.objectArray = [
      { id: 1, image: "./assets/images/pngs/1.png", title : "Plates", price : "$568", Stock :'Instock', stockStatus: 'success'},
      { id: 2, image: "./assets/images/pngs/4.png", title : "Flower Pot", price : "$1,027", Stock : 'Instock', stockStatus: 'success'},
      { id: 3, image: "./assets/images/pngs/8.png", title : "Clock", price : "$1,589", Stock : 'Instock', stockStatus: 'success'},
      { id: 4, image: "./assets/images/pngs/2.png", title : "JoyStick", price : "$356", Stock : 'outofstock', stockStatus: 'danger'},
      { id: 5, image: "./assets/images/pngs/3.png", title : "HeadSets", price : "$1,245", Stock : 'Instock', stockStatus: 'success'},
      { id: 6, image: "./assets/images/pngs/6.png", title : "Sun Glasses", price : "$783", Stock : 'Instock', stockStatus: 'success'},
      { id: 7, image: "./assets/images/pngs/7.png", title : "Chair", price : "$4,876", Stock : 'Instock', stockStatus: 'success'},
      { id: 8, image: "./assets/images/pngs/9.png", title : "Ear rings", price : "$76",Stock : 'outofstock', stockStatus: 'danger' }

    ];
  }

  ngOnInit(): void {
  }

  RemoveElementFromObjectArray(key: any) {
    this.objectArray.forEach((value,index)=>{
        if(value.id==key) this.objectArray.splice(index,1);
    });
  } 
}
