import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.scss'],
})
export class FormEventComponent implements OnInit, AfterViewInit {
  @ViewChild('addBtnRef') addBtnRef!: ElementRef<HTMLButtonElement>;

  constructor(private designUtility: DesignUtilityService) {}

  ngAfterViewInit(): void {
    let count = 0;

    fromEvent(this.addBtnRef.nativeElement, 'click').subscribe((res) => {
      count++;
      console.log(`video ${count}`);
      this.designUtility.addItemToList(`video ${count}`, 'itemContainer');
      this.designUtility.addItemToList(`video ${count}`, 'itemContainer2');
    });
  }
  ngOnInit(): void {}
}
