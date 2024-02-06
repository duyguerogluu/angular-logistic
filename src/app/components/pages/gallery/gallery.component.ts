import { Component, OnInit } from '@angular/core';
import { GridLayout, Image, ModalGalleryRef, ModalGalleryService, PlainGalleryStrategy, PlainLibConfig } from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  basicPage = 1;
  public images: Image[] = [
    new Image(
      1,
      { //modal
        img: './assets/images/media/8.jpg',
        title: '',
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

  profile:any;
  constructor(private modalGalleryService: ModalGalleryService) { }

  ngOnInit(): void {
  }

  openImageModalRowDescription(id: number, image: Image): void {
    const index: number = this.getCurrentIndexCustomLayout(image, this.images);
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: this.images[index]
    }) as ModalGalleryRef;
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  };
}
