import { Component, OnInit } from '@angular/core';
import { GridLayout, Image, ModalGalleryRef, ModalGalleryService, PlainGalleryStrategy, PlainLibConfig } from '@ks89/angular-modal-gallery';
import * as data from 'src/app/shared/data/widgets/widgets'

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {
  public images: Image[] = [
    new Image(
      1,
      { //modal
        img: './assets/images/media/1.jpg',
        title: '',
      }
    ),
    new Image(
      2,
      { //modal
        img: './assets/images/media/2.jpg',
        title: '',
      }
    ),
    new Image(
      3,
      { //modal
        img: './assets/images/media/3.jpg',
        title: '',
      }
    ),
    new Image(
      4,
      { //modal
        img: './assets/images/media/4.jpg',
        title: '',
      }
    ),
    new Image(
      5,
      { //modal
        img: './assets/images/media/5.jpg',
        title: '',
      }
    ),
    new Image(
      6,
      { //modal
        img: './assets/images/media/6.jpg',
        title: '',
      })
      ,
    new Image(
      7,
      { //modal
        img: './assets/images/media/7.jpg',
        title: '',
      }
    ),
    new Image(
      8,
      { //modal
        img: './assets/images/media/8.jpg',
        title: '',
      }
    ),
    new Image(
      9,
      { //modal
        img: './assets/images/media/9.jpg',
        title: '',
      }
    ) 
  ]

  constructor(private modalGalleryService: ModalGalleryService) { }

  ngOnInit(): void {
  }
  
  libConfigPlainGalleryGrid: PlainLibConfig = {
    plainGalleryConfig: {
      strategy: PlainGalleryStrategy.GRID,
      layout: new GridLayout({ width: '30%', height: '150px' }, { length: 3, wrap: true })
    }
  };

  onShow(id: number, index: number, images: Image[] = this.images): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images,
      currentImage: images[index]
    }) as ModalGalleryRef;
  }

  public AreaChartOptions = data.AreaChartOptions
  public AreaChartData = data.AreaChartData
  public AreaChartType = data.AreaChartType
  public AreaChartData1 = data.AreaChartData1
  public AreaChartData2 = data.AreaChartData2
  public AreaChartData3 = data.AreaChartData3
}
