import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CarouselLibConfig, DescriptionStrategy, Image, ModalGalleryRef, ModalGalleryService } from '@ks89/angular-modal-gallery';
import { filter } from 'rxjs';

@Component({
  selector: 'app-file-details',
  templateUrl: './file-details.component.html',
  styleUrls: ['./file-details.component.scss']
})
export class FileDetailsComponent implements OnInit {

  currentRoute: any;
  urlData: any;
  constructor(private router:Router, public modalGalleryService: ModalGalleryService) { 
    
    router.events.pipe(filter((event:any)=> event instanceof NavigationEnd)).subscribe( (event:any) => {
      this.currentRoute = event.url;
      this.urlData = event.url.split("/")
    })
  }
  ngOnInit(): void {
  }

  public images: Image[] = [
    new Image(
      1,
      { //modal
        img: './assets/images/media/files/01.jpg',
        title: '',
      }
    ),
    new Image(
      2,
      { //modal
        img: './assets/images/media/files/02.jpg',
        title: '',
      }
    ),
    new Image(
      3,
      { //modal
        img: './assets/images/media/files/03.jpg',
        title: '',
      }
    ),
    new Image(
      4,
      { //modal
        img: './assets/images/media/files/04.jpg',
        title: '',
      }
    ),
    new Image(
      5,
      { //modal
        img: './assets/images/media/files/05.jpg',
        title: '',
      }
    ),
    new Image(
      6,
      { //modal
        img: './assets/images/media/files/06.jpg',
        title: '',
      }
    )
  ]

  openImageModalRow(id: number, image: Image): void {
    const index: number = this.getCurrentIndexCustomLayout(image, this.images);
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.images,
      currentImage: this.images[index]
    }) as ModalGalleryRef;
  }
  
  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  }
}
