import { Component, OnInit } from '@angular/core';
import { interval, map, of, Subscription, tap } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss'],
})
export class TapComponent implements OnInit {
  color!: string;
  constructor(private dus: DesignUtilityService) {}
  subs1!: Subscription;
  ngOnInit(): void {
    const source = interval(1000);
    //example 1
    const names = ['Nayeem', 'Abir', 'Dristy', 'Razu', 'Sultan'];
    this.subs1 = source
      .pipe(
        tap((res) => {
          if (res >= 3) this.subs1.unsubscribe();
        }),
        map((index) => names[index])
      )
      .subscribe((res) => {
        this.dus.addItemToList(res, 'list');
      });

    //example 2
    const colors = ['Violet', 'Indigo', 'green', 'yellow', 'orange', 'red'];
    let subs2: Subscription;
    subs2 = source
      .pipe(
        tap((res) => {
          console.log('res = '+res);
          if (res == 6) subs2.unsubscribe();
        }),
        map((index) => colors[index]),
        map(data=> this.color = data)
      )
      .subscribe((res) => {
        this.dus.addItemToList(res, 'list2');
      });
  }
}
