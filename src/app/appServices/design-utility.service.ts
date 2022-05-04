import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Person } from '../observable/retry/retry.component';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DesignUtilityService {
  constructor(private http:HttpClient) {}

  exclusive$ = new Subject<boolean>();
  username$ = new BehaviorSubject<string>('Nayeem');

  videoEmit$ = new ReplaySubject<string>(3,5000);

  asyncVideoEmit$ = new AsyncSubject<string>()

  fetchDetails(url:string){
    return this.http.get<Person>(url)
  }

  addItemToList(val: any, containerId: string) {
    const el = document.createElement('li');
    el.className = 'list-group-item';
    el.innerText = val;
    document.getElementById(containerId)?.appendChild(el);
  }
}
