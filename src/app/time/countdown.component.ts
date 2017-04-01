import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'countdown',
  template: `
    <div id="clock" *ngIf="inputTime">
      <div> {{ minRemaining | number:'2.0-0'}} : {{secRemaining | number:'2.0-0'}}</div>
    </div> `
})

export class CountdownComponent implements OnInit, OnDestroy, OnChanges {

  @Input('to') inputTime: number;
  @Output() due = new EventEmitter();
  private timeLeft: number = 0;
  private countDownInterval: number // NodeJS.Timer/number - depends if using node typing and if using window.

  ngOnInit() {
    this.startCountDown();
  }

  ngOnDestroy() {
    this.stopCountDown();
  }

  private startCountDown() {
    this.countDown();
    this.countDownInterval = window.setInterval(() => this.countDown(), 1000);
  }

  private stopCountDown() {
    window.clearInterval(this.countDownInterval);
  }

  ngOnChanges(changes) {
    if (changes.inputTime && !changes.inputTime.isFirstChange()) {
      if (this.countDownInterval) {
        this.stopCountDown(); // to clear existing timer if exists
      }
      this.startCountDown();
    }
  }

  private countDown() {
    this.calcTimeRemaing();
    if (this.timeLeft <= 0) {
      this.stopCountDown();
      this.due.emit({});
    }
  }

  private calcTimeRemaing() {
    this.timeLeft = this.inputTime - Date.now();
  }

  get minRemaining() {
    if (this.timeLeft <= 0) return 0;
    else {
      return Math.abs(Math.floor(this.timeLeft / 1000 / 60));
    }
  }

  get secRemaining() {
    if (this.timeLeft <= 0) return 0;
    return Math.abs(Math.floor(this.timeLeft) / 1000);
  }


}
