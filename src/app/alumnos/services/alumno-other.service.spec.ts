import { TestBed } from '@angular/core/testing';

import { AlumnoOtherService } from './alumno-other.service';

describe('AlumnoOtherService', () => {
  let service: AlumnoOtherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnoOtherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
