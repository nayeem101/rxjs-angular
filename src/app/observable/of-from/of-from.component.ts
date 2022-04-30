import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss'],
})
export class OfFromComponent implements OnInit {
  familyData: any;

  constructor(private designUtilityService: DesignUtilityService) {}

  ngOnInit(): void {
    //of
    const observer1 = of('Nayeem', 'Foujia', 'Hamza', 'Hafsa');
    const observer2 = of({
      f: 'Nayeem',
      m: 'Foujia',
      s: 'Hamza',
      d: 'Hafsa',
    });

    observer1.subscribe((res) => {
      // console.log(res);
      this.designUtilityService.addItemToList(res, 'listItems');
    });

    observer2.subscribe((res) => {
      Object.entries(res).forEach(([key, val]) => {
        const data = `${key}: ${val}`;
        this.designUtilityService.addItemToList(data, 'listItems2');
      });
    });

    //from - array
    const arr = ['Nayeem', 'Foujia', 'Hamza', 'Hafsa'];
    const observer3 = from(arr);
    observer3.subscribe((res) => {
      this.designUtilityService.addItemToList(res, 'listItems3');
    });

    //from - promise
    const promise = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('promise is resolved');
      }, 3000);
    });

    const observer4 = from(promise);
    observer4.subscribe((res) => {
      // console.log('obsmsg ', res);
      this.designUtilityService.addItemToList(res, 'listItems4');
    });

    //from - string
    const observer5 = from('angular is great');
    observer5.subscribe((res) => {
      console.log('obsmsg ', res);
      this.designUtilityService.addItemToList(res, 'listItems5');
    });
  }
}
