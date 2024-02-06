import { Component, OnInit } from '@angular/core';
import { CarouselLibConfig, DescriptionStrategy, GridLayout, Image, ModalGalleryRef, ModalGalleryService, PlainGalleryStrategy, PlainLibConfig } from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public images: Image[] = [
    new Image(
      1,
      { //modal
        img: './assets/images/media/8.jpg',
        title: '',
        description: 'First img',
      }
    ),
    new Image(
      2,
      { //modal
        img: './assets/images/media/10.jpg',
        title: '',
      }
    ),
    new Image(
      3,
      { //modal
        img: './assets/images/media/11.jpg',
        title: '',
      }
    ),
    new Image(
      4,
      { //modal
        img: './assets/images/media/12.jpg',
        title: '',
      }
    ),
    new Image(
      5,
      { //modal
        img: './assets/images/media/13.jpg',
        title: '',
      }
    ),
    new Image(
      6,
      { //modal
        img: './assets/images/media/14.jpg',
        title: '',
      }
    ) ,
    new Image(
      7,
      { //modal
        img: './assets/images/media/14.jpg',
        title: '',
      }
    ),
    new Image(
      8,
      { //modal
        img: './assets/images/media/16.jpg',
        title: '',
      }
    ),
    new Image(
      9,
      { //modal
        img: './assets/images/media/17.jpg',
        title: '',
      }
    ),
    new Image(
      10,
      { //modal
        img: './assets/images/media/18.jpg',
        title: '',
      }
    ),
    new Image(
      11,
      { //modal
        img: './assets/images/media/19.jpg',
        title: '',
      }
    ),
    new Image(
      12,
      { //modal
        img: './assets/images/media/20.jpg',
        title: '',
      }
    ) ,
  ]

  constructor(private modalGalleryService: ModalGalleryService) {}


  libConfig: CarouselLibConfig = {
    carouselImageConfig: {
      description: {
        strategy: DescriptionStrategy.ALWAYS_VISIBLE
      }
    }
  };
  ngOnInit(): void {
  }
}
