import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  constructor() { }

  lang() {
    return $localize `en`;
  }
}
