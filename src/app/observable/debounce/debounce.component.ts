import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.scss'],
})
export class DebounceComponent implements OnInit, AfterViewInit {
  @ViewChild('input1') myInput1!: ElementRef;

  @ViewChild('input2') myInput2!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    //example 1 - debounceTime
    const searchTerm = fromEvent<any>(
      this.myInput1.nativeElement,
      'keyup'
    ).pipe(
      map((event) => event.target.value),
      debounceTime(1000)
    );

    searchTerm.subscribe((val) => {
      console.log(val);
    });

    //example 1 - distinctUntilChanged
    const searchTerm2 = fromEvent<any>(
      this.myInput2.nativeElement,
      'keyup'
    ).pipe(
      map((event) => event.target.value),
      debounceTime(1000),
      distinctUntilChanged()
    );

    searchTerm2.subscribe((val) => {
      console.log(val);
    });
  }
}
