import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss'],
})
export class PromiseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const buyLaptop = new Promise((resolve, reject) => {
      resolve('promise is resolved');
      reject('promise is rejected');
    });

    buyLaptop
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  onClick(): void {
    console.log('called');
  }
}
