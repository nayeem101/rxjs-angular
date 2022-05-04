import { Component, OnInit } from '@angular/core';
import {
  filter,
  from,
  interval,
  map,
  take,
  takeLast,
  takeUntil,
  timer,
} from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss'],
})
export class TakeComponent implements OnInit {
  names = ['nayeem', 'abir', 'razu', 'dristy'];
  constructor(private _dus: DesignUtilityService) {}
  ngOnInit(): void {
    const nameSource = from(this.names);
    //ex - take
    nameSource.pipe(take(3)).subscribe((res) => {
      console.log(res);
      this._dus.addItemToList(res, 'list');
    });

    //ex - takeLast
    nameSource.pipe(takeLast(3)).subscribe((res) => {
      console.log(res);
      this._dus.addItemToList(res, 'list2');
    });

    //ex - takeUntil
    const source = interval(1000);
    //this notifier observable is passed in takeUntil
    const condition = timer(6000);
    source
      .pipe(
        map((data) => 'number ' + data),
        takeUntil(condition)
      )
      .subscribe((res) => {
        console.log(res);
        this._dus.addItemToList(res, 'list3');
      });
    
  }
}
