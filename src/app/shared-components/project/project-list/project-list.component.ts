import { Component, Input, OnInit } from '@angular/core';
import { ProjectData } from 'src/app/models/project';
import { ProjectsService } from 'src/app/services/projects.service';
import { ResponsiveService } from 'src/app/services/responsive.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  public projects: ProjectData[] = [];
  @Input() limit?: number;

  constructor(
    private service: ProjectsService,
    public responsive: ResponsiveService
  ) {}

  ngOnInit() {
    this.GetProjects();
  }

  private GetProjects() {
    this.service.getSortedProjects('date:desc').subscribe((value) => {
      let result = value;
      if (this.limit && this.limit > 0) {
        result = value.slice(0, this.limit);
      }
      this.projects = result;
    });
  }
}
