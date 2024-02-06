import { Component, OnInit, ViewChild } from '@angular/core';
import counterUp from 'counterup2';
import { CdTimerComponent, TimeInterface } from 'angular-cd-timer';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss']
})
export class CountersComponent implements OnInit {

  @ViewChild('basicTimer', { static: true }) basicTimer!: CdTimerComponent;

  timerInfo = '';
  constructor() { }

  ngOnInit(): void {
    const el1 = document.querySelector('.counter1')
    const el2 = document.querySelector('.counter2')
    const el3 = document.querySelector('.counter3')

    // Start counting, do this on DOM ready or with Waypoints.
    counterUp(el1, {
      duration: 1000,
      delay: 16,
    })
    counterUp(el2, {
      duration: 1000,
      delay: 16,
    })
    counterUp(el3, {
      duration: 1000,
      delay: 16,
    })


  }
  onComplete(data) {
    data.elt.nativeElement.classList.add("muteCount")
  }

  onTick(data: TimeInterface) {
    this.timerInfo = '';
  }

  onStart(data) {
    // console.log('Timer started.');
  }

  doActionBasicTimer(action: String) {
    switch (action) {
      case 'start':
        this.basicTimer.start();
        break;
      case 'resume':
        this.basicTimer.resume();
        break;
      case 'reset':
        this.basicTimer.reset();
        break;
      default:
        this.basicTimer.stop();
        break;
    }
  }
}
