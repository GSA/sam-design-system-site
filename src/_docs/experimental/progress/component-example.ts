import { Component, OnInit } from '@angular/core';
import {
  ProgressIndicator,
  ProgressIndicatorType,
} from '@gsa-sam/sam-ui-elements/src/ui-kit/experimental/progress/progress.component';

@Component({
  selector: 'doc-sam-progress',
  template: `
    <!-- Using percents -->
    <sam-progress
      [type]="percentExample.type"
      [min]="percentExample.min"
      [max]="percentExample.max"
      [value]="percentExample.value"
      [valueAsText]="percentExample.valueAsText"
    ></sam-progress>

    <!-- Using time -->
    <sam-progress
      [type]="timeExample.type"
      [min]="timeExample.min"
      [max]="timeExample.max"
      [value]="timeExample.value"
      [valueAsText]="timeExample.valueAsText"
    ></sam-progress>
  `,
})
export class ProgressComponentExampleComponent implements OnInit {
  percentExample: ProgressIndicator = {
    type: ProgressIndicatorType.Percent,
    min: 0,
    max: 100,
    value: 0,
    valueAsText: '0%',
  };

  timeExample: ProgressIndicator = {
    type: ProgressIndicatorType.Nonnumerical,
    min: 0,
    max: 120000,
    value: 0,
    valueAsText: 'Calculating...',
  };

  ngOnInit() {
    this.mockLoading();
  }

  public mockLoading() {
    this.startPercentage();
    this.startTimer();
  }

  private startPercentage(): void {
    const intervalId = setInterval(
      (percentExample: ProgressIndicator) => {
        // Stop interval on completion
        if (percentExample.value === 100) {
          clearInterval(intervalId);
        } else {
          // Update values
          percentExample.value = percentExample.value + 25;
          percentExample.valueAsText = `${percentExample.value}%`;
        }
      },
      250,
      this.percentExample
    );
  }

  private startTimer(): void {
    let countup = 0;
    while (countup <= 120000) {
      setTimeout(this.calculateRemainingTime.bind(this), 1000, countup);
      countup++;
    }
  }

  private calculateRemainingTime(elapsedTime: number) {
    this.timeExample.value = elapsedTime;
    this.timeExample.valueAsText = `${Math.round(
      (this.timeExample.max - elapsedTime) / 1000
    )} seconds remaining`;
  }
}
