import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

const users = [
  {
    id: 1,
    first_name: 'Nikola',
    gender: 'Male',
  },
  {
    id: 2,
    first_name: 'Ariel',
    gender: 'Female',
  },
  {
    id: 3,
    first_name: 'Essy',
    gender: 'Female',
  },
  {
    id: 4,
    first_name: 'Berkeley',
    gender: 'Male',
  },
  {
    id: 5,
    first_name: 'Davina',
    gender: 'Female',
  },
  {
    id: 6,
    first_name: 'Trevor',
    gender: 'Male',
  },
  {
    id: 7,
    first_name: 'Flem',
    gender: 'Male',
  },
  {
    id: 8,
    first_name: 'Jarvis',
    gender: 'Male',
  },
  {
    id: 9,
    first_name: 'Willy',
    gender: 'Female',
  },
  {
    id: 10,
    first_name: 'Bank',
    gender: 'Male',
  },
  {
    id: 11,
    first_name: 'Sorcha',
    gender: 'Genderqueer',
  },
  {
    id: 12,
    first_name: 'Verne',
    gender: 'Male',
  },
  {
    id: 13,
    first_name: 'Kata',
    gender: 'Female',
  },
  {
    id: 14,
    first_name: 'Reynard',
    gender: 'Male',
  },
  {
    id: 15,
    first_name: 'Delphine',
    gender: 'Female',
  },
];

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  data = users;
  data2 = users;
  data3!: { id: number; first_name: string; gender: string; }[];
  constructor() {}

  ngOnInit(): void {
    const source = from(this.data);
    //ex 1 - filter by name length
    source
      .pipe(
        filter((data) => data.first_name.length > 6),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.data = res;
      });

    //ex 2 - filter by gender
    source
    .pipe(
      filter((data) => data.gender.toLowerCase() === 'male'),
      toArray()
    )
    .subscribe((res) => {
      console.log(res);
      this.data2 = res;
    });
    //ex 3 - filter by nth items
    source
    .pipe(
      filter((data) => data.id <=6),
      toArray()
    )
    .subscribe((res) => {
      console.log(res);
      this.data3 = res;
    });
  }
}
