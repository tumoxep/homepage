import { shuffle } from 'lodash';
import { Component, ViewChild, ElementRef, OnInit, NgZone, Input } from '@angular/core';

import { Skills } from '../skills';

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

@Component({
  selector: 'app-embers',
  templateUrl: './embers.component.html',
  styleUrls: ['./embers.component.css']
})
export class EmbersComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  @Input() skills: Skills | undefined;

  private ctx: CanvasRenderingContext2D | null;

  fontSizes: number[] | null = null;
  textOffsetX: number[] | null = null;
  textOffsetY: number[] | null = null;

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ngZone.runOutsideAngular(() => {
      window.requestAnimationFrame(this.draw.bind(this));
    });
  }

  draw() {
    if (!this.ctx || !this.skills) {
      window.requestAnimationFrame(this.draw.bind(this));
      return;
    }
    if (!this.fontSizes || !this.textOffsetX || !this.textOffsetY) {
      this.fontSizes = this.skills.set4.map(() => getRandomArbitrary(15, 30));
      this.textOffsetX = this.skills.set4.map(() => getRandomArbitrary(-50, 50));
      this.textOffsetY = this.skills.set4.map(() => getRandomArbitrary(-50, 50));
      this.skills.set4 = shuffle(this.skills.set4);
    }
    const time = new Date();
    const t = time.getSeconds() * 1000 + time.getMilliseconds();
    const tt = Math.PI * t / 1200;
    this.ctx.clearRect(0, 0, 1000, 1000);
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#393E46';
    const sectorSize = 1000000 / (this.skills.set4.length);
    const sectorPerLine = Math.floor(1000 / Math.sqrt(sectorSize));
    for (let i = 0; i < sectorPerLine; i++) {
      for (let j = 0; j < sectorPerLine; j++) {
        this.ctx.globalAlpha = 0.5 * (1 + Math.cos(tt + ((i % 2 ? 1 : -1) * i * sectorPerLine + j) * Math.PI / 4));
        this.ctx.font = `${this.fontSizes[i * sectorPerLine + j]}px sans-serif`;
        this.ctx.fillText(
          this.skills.set4[i * sectorPerLine + j],
          Math.sqrt(sectorSize) * i + 64 + this.textOffsetX[i * sectorPerLine + j],
          Math.sqrt(sectorSize) * j + 64 + this.textOffsetY[i * sectorPerLine + j]
        );
      }
    }
    window.requestAnimationFrame(this.draw.bind(this));
  }

}

