import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss'],
})
export class ToArrayComponent implements OnInit {
  loading = true;
  sourceSub!: Subscription;
  users = [
    { name: 'Nayeem', skill: 'Web Dev' },
    { name: 'Foujia', skill: 'Ui Ux' },
    { name: 'Anik', skill: 'Machine learning' },
    { name: 'Abrar', skill: 'Java' },
  ];

  constructor(private dus: DesignUtilityService) {}

  ngOnInit(): void {
    //Example #1
    const source = interval(500).pipe(take(5), toArray());
    this.sourceSub = source.subscribe({
      next: (res) => {
        res.forEach((val) => {
          this.dus.addItemToList(val.toString(), 'list1');
        });
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.loading = false;
      },
    });

    //Example #2
    const source2 = from(this.users).pipe(take(2), toArray());
    source2.subscribe((res) => {
      console.log(res);
      res.forEach((val) => {
        this.dus.addItemToList(`${val.name} - ${val.skill}`, 'list2');
      });
    });

    //Example 3
    const source3 = of('Nayeem', 'Foujia', 'Hamza', 'Hafsa').pipe(toArray());
    source3.subscribe((res) => {
      console.log(res);
      res.forEach((val) => {
        this.dus.addItemToList(val, 'list3');
      });
    });
  }
}
