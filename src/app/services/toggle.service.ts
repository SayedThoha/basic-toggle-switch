import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToggleService {
  constructor() {}
  subject = new BehaviorSubject(false);
  isChecked = this.subject.asObservable();

  toggleCheckBox() {
    let value = this.subject.value;
    this.subject.next(!value);
  }
}
