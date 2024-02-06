import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface cart {
  id: number;
  image: string;
  title: string;
  price: string;
  Stock: string;
  stockStatus: string;
  quantity: number;
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {


  objectArray: cart[];
  constructor() { 
    this.objectArray = [
      { id: 1, image: "./assets/images/pngs/1.png", title : "Plates", price : "$568", Stock :'Instock', stockStatus: 'success', quantity: 1},
      { id: 2, image: "./assets/images/pngs/4.png", title : "Flower Pot", price : "$1,027", Stock : 'Instock', stockStatus: 'success', quantity: 2},
      { id: 4, image: "./assets/images/pngs/2.png", title : "JoyStick", price : "$356", Stock : 'outofstock', stockStatus: 'danger', quantity: 1},
      { id: 5, image: "./assets/images/pngs/5.png", title : "Sofa", price : "$1,245", Stock : 'Instock', stockStatus: 'success', quantity: 1},
      { id: 6, image: "./assets/images/pngs/6.png", title : "Sun Glasses", price : "$783", Stock : 'Instock', stockStatus: 'success', quantity: 3},
      { id: 7, image: "./assets/images/pngs/7.png", title : "Chair", price : "$4,876", Stock : 'Instock', stockStatus: 'success', quantity: 2},
      { id: 8, image: "./assets/images/pngs/9.png", title : "Ear rings", price : "$76",Stock : 'outofstock', stockStatus: 'danger', quantity: 4 }

    ];
  }

  ngOnInit(): void {
  }

 ngAfterViewInit(){
  const plus:any = document.querySelectorAll('#plus');
  const minus:any = document.querySelectorAll('#minus');
  function perfectChart(){
    plus.forEach( (element:any)=>{
      let parentDiv = element.parentElement.parentElement;
        element.addEventListener('click',()=>{
          parentDiv.children[1].value++
        })
    } )
    minus.forEach( (element:any)=>{
      let parentDiv = element.parentElement.parentElement;
        element.addEventListener('click',()=>{
           if(parentDiv.children[1].value  > 0){
            parentDiv.children[1].value-- 
           }
        })
    } )
  }
  perfectChart()
  } 

  
  RemoveElementFromObjectArray(key: any) {
    this.objectArray.forEach((value,index)=>{
        if(value.id==key) this.objectArray.splice(index,1);
    });
  } 
}

