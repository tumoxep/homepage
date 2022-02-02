import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Info } from './info';
import { Projects } from './projects';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(
    private http: HttpClient
  ) { }

  getInfo() {
    return this.http.get<Info>('/assets/info.json');
  }

  getProjects() {
    return this.http.get<Projects>('/api.php/records/projects');
  }
}
