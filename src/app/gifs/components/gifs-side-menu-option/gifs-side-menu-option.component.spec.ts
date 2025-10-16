import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsSideMenuOptionComponent } from './gifs-side-menu-option.component';

describe('GifsSideMenuOptionComponent', () => {
  let component: GifsSideMenuOptionComponent;
  let fixture: ComponentFixture<GifsSideMenuOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifsSideMenuOptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifsSideMenuOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
