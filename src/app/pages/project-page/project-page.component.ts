import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { MarkdownService } from 'ngx-markdown';
import { ProjectData } from 'src/app/models/project';
import { ProjectsService } from 'src/app/services/projects.service';
import { ResponsiveService } from 'src/app/services/responsive.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
})
export class ProjectPageComponent implements OnInit {
  public project?: ProjectData;
  /*  A 'debounce' for page init and loading of data. 
      To show skeleton components while loading. */
  public dataLoaded: boolean = false;
  public localMarkdownUrl: string = "";

  constructor(
    private route: ActivatedRoute,
    private service: ProjectsService,
    public responsive: ResponsiveService,
    private gtmService: GoogleTagManagerService, private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params) => {
      if (params['slug']) {
        const slug = params['slug'];
        this.service
          .getProjectBySlug(slug)
          .subscribe((value) => {
            this.project = value;
            this.localMarkdownUrl = `assets/markdown/projects/${value.markdown}.md`;
            console.log(value);
            this.dataLoaded = true;
          });
      }
    });

    this.router.events.forEach(event => {
      if (event instanceof NavigationEnd) {
        const gtmTag = {
          event: 'page',
          pageName: event.url
        }

        this.gtmService.pushTag(gtmTag);
      }
    })
  }
}
