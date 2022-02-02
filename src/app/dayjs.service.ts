import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';
import * as LocalizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/ru';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root',
})
export class DayjsService {
  constructor(
    private env: EnvService
  ) {
    dayjs.extend(LocalizedFormat);
    if (this.env.lang() === 'ru') {
      dayjs.locale('ru');
    }
  }

  format(timestamp: string){
    return dayjs(timestamp).format('ll');
  }
}
