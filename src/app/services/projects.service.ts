import { Injectable } from '@angular/core';
import { ProjectData, ProjectTag } from '../models/project';
import { PROJECTS } from '../utilities/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: ProjectData[];
  
  constructor() {
    this.projects = PROJECTS;
  }

  getProjects(): Observable<ProjectData[]> {
    return new Observable<ProjectData[]>((subscriber) => {
      subscriber.next(this.projects);
      subscriber.complete();
    });
  }

  getSortedProjects(sort: string = 'date:desc') {
    return new Observable<ProjectData[]>((subscriber) => {
      if (sort == 'date:desc') {
        let sortedProjects = this.projects.sort(
          (a, b) => a.datePublished.getUTCDate() - b.datePublished.getUTCDate()
        );
        subscriber.next(sortedProjects);
      } else if (sort == 'date:asc') {
        let sortedProjects = this.projects.sort(
          (a, b) => b.datePublished.getUTCDate() - a.datePublished.getUTCDate()
        );
        subscriber.next(sortedProjects);
      }
      subscriber.complete();
    });
  }

  getProjectBySlug(slug: string): Observable<ProjectData> {
    return new Observable<ProjectData>((subscriber) => {
      let result = this.projects.find((p) => p.slug == slug);
      subscriber.next(result);
      subscriber.complete();
    });
  }

  getProjectsBySlugs(slugs: string[]): Observable<ProjectData[]> {
    return new Observable<ProjectData[]>((subscriber) => {
      let results: ProjectData[] = [];
      for (const slug in slugs) {
        let result = this.projects.find((p) => p.slug == slug);
        if (result) results.push(result);
      }
      subscriber.next(results);
      subscriber.complete();
    });
  }

  getProjectsByTags(tags: ProjectTag[]): Observable<ProjectData[]> {
    return new Observable<ProjectData[]>((subscriber) => {
      let results: ProjectData[] = [];
      for (const tag in tags) {
        let result = this.projects.find((p) => p.tags.toString().includes(tag));
        if (result) results.push(result);
      }
      subscriber.next(results);
      subscriber.complete();
    });
  }
}
