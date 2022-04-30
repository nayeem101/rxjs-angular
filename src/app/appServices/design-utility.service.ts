import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DesignUtilityService {
  constructor() {}
  addItemToList(val: string, containerId: string) {
    const el = document.createElement('li');
    el.className = 'list-group-item';
    el.innerText = val;
    document.getElementById(containerId)?.appendChild(el);
  }
}
