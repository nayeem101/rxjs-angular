import { Component, OnInit } from '@angular/core';

const list = [
  {
    path: 'form-event',
    title: 'Form Event',
  },
  { path: 'interval', title: 'Interval' },
  { path: 'of-from', title: 'of and from' },
  { path: 'toarray', title: 'toArray' },
  { path: 'map', title: 'map' },
  { path: 'pluck', title: 'pluck' },
  { path: 'filter', title: 'Filter' },
  { path: 'tap', title: 'Tap' },
  { path: 'take', title: 'Take - takelist' },
  { path: 'retry', title: 'Retry - Retrywhen - Scan - Delay' },
  { path: 'debounce', title: 'DebounceTime & DistinctUntilChanged' },
  { path: 'subject', title: 'Subject & BehaviourSubject' },
  { path: 'replaysubject', title: 'ReplaySubject' },
  { path: 'asyncsubject', title: 'AsyncSubject' },
  { path: 'concat', title: 'Concat' },
  { path: 'merge', title: 'Merge' },
  { path: 'mergemap', title: 'MergeMap' },
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
