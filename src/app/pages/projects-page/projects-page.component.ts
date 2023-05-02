import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { ProjectData } from 'src/app/models/project';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
})
export class ProjectsPageComponent implements OnInit {
  constructor(private gtmService: GoogleTagManagerService, private router: Router){}
  ngOnInit(): void {
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
