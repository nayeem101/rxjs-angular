import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
})
export class IntervalComponent implements OnInit, OnDestroy {
  obsMsg!: string;
  videoSubscription!: Subscription;

  constructor(private designUtlService: DesignUtilityService) {}

  ngOnInit(): void {
    // const brodCastVideos = interval(1000);
    // timer(delay, interval)
    const brodCastVideos = timer(5000, 1000);

    this.videoSubscription = brodCastVideos.subscribe((res) => {
      console.log(res);
      this.obsMsg = `Video ${res}`;
      this.designUtlService.addItemToList(this.obsMsg, 'itemContainer');
      this.designUtlService.addItemToList(this.obsMsg, 'itemContainer2');
      this.designUtlService.addItemToList(this.obsMsg, 'itemContainer3');
      if (res >= 5) {
        this.videoSubscription.unsubscribe();
      }
    });
  }

  ngOnDestroy(): void {
    this.videoSubscription.unsubscribe();
  }
}
