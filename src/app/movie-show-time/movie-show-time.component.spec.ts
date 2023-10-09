import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieShowTimeComponent } from './movie-show-time.component';

describe('MovieShowTimeComponent', () => {
  let component: MovieShowTimeComponent;
  let fixture: ComponentFixture<MovieShowTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieShowTimeComponent]
    });
    fixture = TestBed.createComponent(MovieShowTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
