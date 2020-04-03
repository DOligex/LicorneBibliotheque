import { TestBed } from '@angular/core/testing';

import { KindMovieService } from './kind-movie.service';

describe('KindMovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KindMovieService = TestBed.get(KindMovieService);
    expect(service).toBeTruthy();
  });
});
