import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sweet-alerts',
  templateUrl: './sweet-alerts.component.html',
  styleUrls: ['./sweet-alerts.component.scss']
})
export class SweetAlertsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  basicAlert() {
    Swal.fire({
      title: 'Welcome to Your Admin Page',
      confirmButtonColor: '#7367f0'
    })
 }

 titleAlert() {
   Swal.fire({
     title: 'Here is a title!',
     text: 'All are available in the template',
     confirmButtonColor: '#7367f0'
   })
 }

 successAlert(){
   Swal.fire({
     icon: 'success',
     title: 'Well Done!',
     text: 'You clicked the button!',
     confirmButtonColor: '#7367f0'
   })
 }

 warningAlert() {
   Swal.fire({
     icon: 'warning',
     title: 'Are you sure ?',
     text: 'Your will not be able to recover this imaginary file!',
     showCancelButton: true,
     confirmButtonColor: '#7367f0',
     cancelButtonColor: '#7367f0',
     confirmButtonText: 'Yes, delete it!',
     reverseButtons: true

   }).then((result) => {
     if (result.isConfirmed) {
       Swal.fire({
         title: 'Deleted!',
         text: 'Your imaginary file has been deleted.',
         icon: 'success',
         confirmButtonColor: '#7367f0'
       })
     }
   })
 }

 parameterAlert(){
   Swal.fire({
     icon: "warning",
     title: 'Are you sure?',
     text: "You will not be able to recover this imaginary file!",
     showCancelButton: true,
     confirmButtonText: 'Yes, delete it!',
     confirmButtonColor: '#7367f0',
     cancelButtonText: 'No, cancel it!',
     cancelButtonColor: '#7367f0',
     reverseButtons: true
   }).then((result) => {
     if (result.isConfirmed) {
       Swal.fire({
         title: 'Deleted!',
         text: 'Your imaginary file has been deleted.',
         icon: 'success',
         confirmButtonColor: '#7367f0'
       })
     } else if (result.dismiss === Swal.DismissReason.cancel) {
       Swal.fire({
         title: 'Cancelled!',
         text: 'Your imaginary file is safe :)',
         icon: 'error',
         confirmButtonColor: '#7367f0'
       })
     }
   })
 }

 imageAlert(){
   Swal.fire({
     title: 'Lovely',
     text: 'Your image is uploaded.',
     imageUrl: './assets/images/brand/logo-3.png',
     confirmButtonColor: '#7367f0'
   })
 }

 timerAlert() {
   Swal.fire({
     title: 'Auto close alert!',
     text: 'I will close in 2 seconds.',
     confirmButtonColor: '#7367f0',
     timer: 2000,
     timerProgressBar: true,
   })
 }

 animationFadeAlert() {
   Swal.fire({
     title: 'Custom Fade animation with Animate.css',
     showClass: {
       popup: 'animate__animated animate__fadeInDown'
     },
     hideClass: {
       popup: 'animate__animated animate__fadeOutUp'
     },
     confirmButtonColor: '#7367f0',
   })
 }
 animationRotateAlert() {
   Swal.fire({
     title: 'Custom Rotate animation with Animate.css',
     showClass: {
       popup: 'animate__animated animate__rotateInDownLeft'
     },
     hideClass: {
       popup: 'animate__animated animate__rotateOutUpRight'
     },
     confirmButtonColor: '#7367f0',
   })
 }
 animationZoomAlert() {
   Swal.fire({
     title: 'Custom Rotate animation with Animate.css',
     showClass: {
       popup: 'animate__animated animate__zoomInRight'
     },
     hideClass: {
       popup: 'animate__animated animate__zoomOutLeft'
     },
     confirmButtonColor: '#7367f0',
   })
 }
 animationSlideAlert() {
   Swal.fire({
     title: 'Custom Slide animation with Animate.css',
     showClass: {
       popup: 'animate__animated animate__slideInLeft'
     },
     hideClass: {
       popup: 'animate__animated animate__slideOutLeft'
     },
     confirmButtonColor: '#7367f0',
   })
 }
 animationBounceAlert() {
   Swal.fire({
     title: 'Custom Bounce animation with Animate.css',
     showClass: {
       popup: 'animate__animated animate__bounceInRight'
     },
     hideClass: {
       popup: 'animate__animated animate__bounceOutLeft'
     },
     confirmButtonColor: '#7367f0',
   })
 }
}
