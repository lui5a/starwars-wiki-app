import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetDetailsComponent } from './planet-detail.component';

describe('PlanetDetailComponent', () => {
  let component: PlanetDetailsComponent;
  let fixture: ComponentFixture<PlanetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
