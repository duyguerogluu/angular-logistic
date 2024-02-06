import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  TabStyle1:any;
  constructor() { }

  ngOnInit(): void {
  }

  successAlert(){
    Swal.fire({
      icon: 'success',
      title: 'Congratulations!',
      text: 'Your order is placed.',
      confirmButtonColor: '#6259ca'
    })
  }
 
}
