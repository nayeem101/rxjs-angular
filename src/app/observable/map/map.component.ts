import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  constructor(private dus: DesignUtilityService) {}
  sub1!: Subscription;
  sub2!: Subscription;
  ngOnInit(): void {
    //map
    //example #1
    const videoStream = interval(1000);

    this.sub1 = videoStream
      .pipe(map((data) => 'Video ' + data))
      .subscribe((res) => {
        console.log(res);
        this.dus.addItemToList(res, 'list');
      });

    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 5000);

    //example #2
    const emitData = interval(1000);

    this.sub2 = emitData.pipe(map((data) => data + 10)).subscribe((res) => {
      console.log(res);
      this.dus.addItemToList(res, 'list2');
    });

    setTimeout(() => {
      this.sub2.unsubscribe();
    }, 6000);

    //example #3
    const marvel = from([
      { id: 1, name: 'Steve' },
      { id: 2, name: 'Tony' },
      { id: 3, name: 'Dr. Strange' },
      { id: 4, name: 'Bruce' },
      { id: 5, name: 'Natasha' },
    ]);

    marvel.pipe(map((data) => data.name)).subscribe((res) => {
      console.log(res);
      this.dus.addItemToList(res, 'list3');
    });
  }
}
