import { Component, OnInit } from '@angular/core';
import { NgxNotifierService } from 'ngx-notifier';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  durationInSeconds = 5;

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private ngxNotifierService: NgxNotifierService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  /** crates a toast message */
  createToast(style: string): void {
    this.ngxNotifierService.createToast( style ,style, 5000);
    return;
  }

  /** clears all toast messages */
  clearToasts(): void {
    this.ngxNotifierService.clear();
  }

  /** clear last toast notification */
  clearLastToast(): void {
    this.ngxNotifierService.clearLast();
  }


  openSnackBarCustom() {
    this._snackBar.openFromComponent(BasciSnackbarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
  openSnackBarBasic(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration : this.durationInSeconds * 1000,
    });
  }

  openSnackBar() {
    this._snackBar.open(`Snackbar position ${this.horizontalPosition}-${this.verticalPosition} `, 'Done', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration : this.durationInSeconds * 1000,      
    });
  }
}

@Component({
  selector: 'snack-bar-component',
  template: `<span class="basicSnackbar">
              Basic Snackbar Notification
            </span>`,
  styles: [`
    .basicSnackbar {
      color: hotpink;
    }
  `],
})
export class BasciSnackbarComponent {}