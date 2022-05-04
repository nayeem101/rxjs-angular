import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss'],
})
export class ReplaySubjectComponent implements OnInit {
  constructor(private _dus: DesignUtilityService) {}

  ngOnInit(): void {
    this._dus.videoEmit$.subscribe((res) => {
      this.user1List.push(res);
      console.log(res);
    });
  }
  // List Data
  user1List = ['Angular 8', 'Angular 9'];
  user2List = Array<string>();
  user3List = Array<string>();

  // Toggle data
  methodInterval: boolean = false;
  intervalSub!:Subscription

  // SubscribeModes
  subscribeMode2: boolean = false;
  subscribeMode3: boolean = false;

  // Subscription
  subscription2!: Subscription;
  subscription3!: Subscription;

  user2Subscribe() {
    if (this.subscribeMode2) {
      this.subscription2.unsubscribe();
    } else {
      this.subscription2 = this._dus.videoEmit$.subscribe((res) => {
        this.user2List.push(res);
      });
    }
    this.subscribeMode2 = !this.subscribeMode2;
  }

  user3Subscribe() {
    if (this.subscribeMode3) {
      this.subscription3.unsubscribe();
      this.subscribeMode3 = false;
    } else {
      this.subscription3 = this._dus.videoEmit$.subscribe((res) => {
        this.user3List.push(res);
      });
      this.subscribeMode3 = true;
    }
    
  }

  toggleMethod() {
    const brodcastVideo = interval(1000);
    if(!this.methodInterval){
      this.intervalSub = brodcastVideo.subscribe(res=>{
        this._dus.videoEmit$.next(`Video #${res}`)
      })
    }else{
      this.intervalSub.unsubscribe()
    }
    this.methodInterval = !this.methodInterval;
  }

  onVideoAdd(inputVal: string) {
    // console.log(inputVal);
    this._dus.videoEmit$.next(inputVal);
  }
}
