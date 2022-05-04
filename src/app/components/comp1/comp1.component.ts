import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {
  userName!: string;
  constructor(private _dus:DesignUtilityService) {
    this._dus.username$.subscribe(name=> this.userName = name);
   }

  ngOnInit(): void {
  }

  onClick(inputVal:string){
    console.log(inputVal);
    this._dus.username$.next(inputVal)
  }

}
