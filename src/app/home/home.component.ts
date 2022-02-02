import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { InfoService } from '../info.service';
import { Info } from '../info';
import { Skills } from '../skills';

const description = $localize `Code's coder from when it was fun`;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  skills: Skills | undefined;

  ngOnInit() {
    this.meta.getTag(`name='description'`)?.setAttribute('content', description);
    this.infoService.getInfo().subscribe((result: Info) => {
      this.skills = result.skills;
    });
  }

  constructor(
    private infoService: InfoService,
    private meta: Meta
  ) { }
}
