import { Component, OnInit } from '@angular/core';

const list = [
  {
    path: 'form-event',
    title: 'Form Event',
  },
  { path: 'interval', title: 'Interval' },
  { path: 'of-from', title: 'of and from' },
  { path: 'toarray', title: 'toArray' },
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  list = list;
  constructor() {}

  ngOnInit(): void {}
}
