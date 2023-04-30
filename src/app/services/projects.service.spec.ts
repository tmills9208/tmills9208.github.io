import { PROJECTS, ProjectData } from './../models/project';
import { TestBed } from '@angular/core/testing';

import { ProjectsService } from './projects.service';
import { Observable } from 'rxjs';

describe('ProjectsService', () => {
  let service: ProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getProjects', () => {
    it('should be an observable', (done: DoneFn) => {
      expect(service.getProjects()).toBeInstanceOf(Observable);
    });
    it('should return an array of projects'), (done: DoneFn) => {
      service.getProjects().subscribe(value => {
        expect(value).toBeTrue();
        expect(value).toBe(PROJECTS);
        done();
      });
    }
  });
});
