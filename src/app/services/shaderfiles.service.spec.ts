import { TestBed } from '@angular/core/testing';

import { ShaderfilesService } from './shaderfiles.service';

describe('ShaderfilesService', () => {
  let service: ShaderfilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShaderfilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
