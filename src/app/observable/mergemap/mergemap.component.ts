import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.scss'],
})
export class MergemapComponent implements OnInit {
  constructor(private _dus: DesignUtilityService) {}

  getData(data: string) {
    return of(data + 'Video uploaded');
  }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);
    //ex - 01
    source.pipe(map((res) => this.getData(res))).subscribe((res) =>
      res.subscribe((res2) => {
        console.log(res2);
        this._dus.addItemToList(res2, 'elContainer');
      })
    );
    //ex - 02
    source
      .pipe(
        map((res) => this.getData(res)),
        mergeAll()
      )
      .subscribe((res) => this._dus.addItemToList(res, 'elContainer1'));
    //ex - 03
    source
      .pipe(
        mergeMap(res=>this.getData(res))
      )
      .subscribe((res) => this._dus.addItemToList(res, 'elContainer2'));
  }
}
