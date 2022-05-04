import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription, toArray, pluck } from 'rxjs';
@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss'],
})
export class PluckComponent implements OnInit {
  data: any;
  data2: any;
  constructor() {}

  ngOnInit(): void {
    const marvel = from([
      {
        id: 1,
        name: 'Steve',
        skills: 'Angular',
        jobs: { title: 'Web developer', exp: '5yrs' },
      },
      {
        id: 2,
        name: 'Tony',
        skills: 'autocad',
        jobs: { title: 'Mechanical Eng', exp: '6yrs' },
      },
      {
        id: 3,
        name: 'Dr. Strange',
        skills: 'medicine',
        jobs: { title: 'Doctor', exp: '10yrs' },
      },
    ]);

    marvel.pipe(pluck('name'), toArray()).subscribe((res) => {
      console.log(res);
      this.data = res;
    });

    marvel.pipe(pluck('jobs'),pluck('title'), toArray()).subscribe((res) => {
      console.log(res);
      this.data2 = res;
    });
  }
}
