import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {

  constructor(private _dus: DesignUtilityService) {}

  ngOnInit(): void {
    this._dus.asyncVideoEmit$.subscribe(res=>{
      this.asyncVideoEmit = res;
    })
  }
  asyncVideoEmit!:string;


  onVideoAdd(inputVal: string) {
    console.log(inputVal);
    this._dus.asyncVideoEmit$.next(inputVal);
  }

  onComplete(){
    this._dus.asyncVideoEmit$.complete()
  }

}