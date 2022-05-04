import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
export interface Person {
  id: number;
  name: string;
  username: string;
  phone: string;
}

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss'],
})
export class RetryComponent implements OnInit {
  person!: Person;
  fetchingData!: boolean;
  status!: string;

  constructor(private dus: DesignUtilityService) {}

  ngOnInit(): void {}

  fetchData() {
    this.fetchingData = true;
    this.dus
      .fetchDetails('https://jsonplaceholder.typicode.com/userss/1')
      .pipe(retry(5))
      .subscribe({
        next: (data) => {
          console.log(data);
          this.person = data;
          this.status = 'Data Fetched';
          this.fetchingData = false;
        },
        error: (err) => {
          this.status = 'Problem fetching data!';
          this.fetchingData = false;
          console.error(err);
        },
      });
  }
}
