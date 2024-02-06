import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router , NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError} from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  public showLoader: boolean = true;
  public isSpinnerVisible = true;

  @Input() display = false;
  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) { 
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this.isSpinnerVisible = true;
        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
        ){
          this.isSpinnerVisible = false;
        }
      },
      () => {
        this.isSpinnerVisible = false;
      }
    )
  }
  ngOnInit(): void {}
  ngOnDestroy() {
    this.isSpinnerVisible = false;
  }
}
