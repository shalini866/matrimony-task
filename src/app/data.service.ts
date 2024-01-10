import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MockData } from './shared/mockdata.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private emitScrollEvent = new BehaviorSubject({});
  getValue = this.emitScrollEvent.asObservable();
  private matchesList = 'assets/matches.json'

  constructor(private http: HttpClient) { }

  emitValue(data: any) {
    this.emitScrollEvent.next(data);
  }


  getMatchesDetails() {
    return this.http.get<MockData>(this.matchesList)
  }
}
