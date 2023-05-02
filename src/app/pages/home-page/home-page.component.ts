import { Component } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';
import { USING_THESE_TECHS } from '../../utilities/constants'
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { NavigationEnd, Router } from '@angular/router';

let pageSeo: MetaDefinition[] = [
  { name: 'title', content: 'tmills9208 - Web Portfolio' },
  { name: 'site_name', content: 'tmills9208 - Web Portfolio' },
  { url: 'tmills9208.github.io' },
  {
    name: 'description',
    content:
      'The personal biographic site of Tyler Mills (tmills9208). Showing cool code, projects and content.',
  },
  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  // {name: 'robots', content: 'INDEX, FOLLOW'},
  { name: 'author', content: 'tmills9208' },
  { name: 'keywords', content: 'Portfolio, Software, Web, Developer' },
  { name: 'date', content: '2023-04-15', scheme: 'YYYY-MM-DD' },
  { httpEquiv: 'Content-Type', content: 'text/html' },
  { property: 'og:title', content: 'tmills9208 - Web Portfolio' },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:description',
    content:
      'The personal biographic site of Tyler Mills (tmills9208). Showing cool code, projects and content.',
  },
  { property: 'og:image', content: 'assets/pages/home/1.png' },
  { property: 'og:url', content: 'tmills9208.github.io' },
  { name: 'twitter:card', content: 'summary_small_image' },
  { charset: 'UTF-8' },
];

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  typedStrings: string[] = USING_THESE_TECHS;
  tocList: string[];
  constructor(private meta: Meta, private gtmService: GoogleTagManagerService, private router: Router) {
    this.meta.addTags(pageSeo);
    this.tocList = [];
    var el = document.getElementsByName('section');
    el.forEach((section) => this.tocList.push(section.id));

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
