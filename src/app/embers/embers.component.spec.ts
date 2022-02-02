import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbersComponent } from './embers.component';

describe('EmbersComponent', () => {
  let component: EmbersComponent;
  let fixture: ComponentFixture<EmbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
