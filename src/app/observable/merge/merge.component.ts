import { Component, OnInit } from '@angular/core';
import { interval, map, take, concat, merge } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {
  constructor(private _dus:DesignUtilityService) {}

  ngOnInit(): void {
    const techVideo = interval(2000).pipe(
      map((v) => 'Tech Video #' + (v + 1)),
      take(5)
    );
    const ComedyVideo = interval(1000).pipe(
      map((v) => 'Comedy Video #' + (v + 1)),
      take(3)
    );
    const movieVideo = interval(1500).pipe(
      map((v) => 'Movie Video #' + (v + 1)),
      take(4)
    );

    const finalObs = merge(techVideo,ComedyVideo, movieVideo);
    finalObs.subscribe(res=>{
      console.log(res);
      this._dus.addItemToList(res,'ulContainer');
    })
  }
}
