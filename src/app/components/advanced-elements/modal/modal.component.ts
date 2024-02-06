import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  constructor( private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  BasicOpen(basicmodal) {
    this.modalService.open(basicmodal);
  }
  SuccessOpen(successmodal) {
    this.modalService.open(successmodal, { centered: true });
  }
  WarningOpen(warningmodal) {
    this.modalService.open(warningmodal, { centered: true });
  }

  SmallSizeOpen(smallsizemodal) {
    this.modalService.open(smallsizemodal, { size: 'sm' });
  }
  DefaultSizeOpen(defaultsizemodal) {
    this.modalService.open(defaultsizemodal);
  }
  LargeSizeOpen(largesizemodal) {
    this.modalService.open(largesizemodal, { size: 'lg' });
  }
  openScrollableContent(longContent:any) {
    this.modalService.open(longContent, { scrollable: true });
  }
}
