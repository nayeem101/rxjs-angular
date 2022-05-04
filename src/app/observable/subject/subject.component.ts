import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit,OnDestroy {
  userName!: string;

  constructor(private _dus:DesignUtilityService) {
    this._dus.username$.subscribe(name=> this.userName = name);
   }
  
  ngOnInit(): void {
    this._dus.exclusive$.next(true);
    
  }
  ngOnDestroy(): void {
    this._dus.exclusive$.next(false)
  }

}
