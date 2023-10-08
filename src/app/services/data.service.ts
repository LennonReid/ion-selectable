import { HttpClient } from '@angular/common/http';
import { IMockData } from '../pages/home.page';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {
  }
  getData() {
    return this.http.get<IMockData[]>('/assets/mocks/lists-data.json');
  }
}
