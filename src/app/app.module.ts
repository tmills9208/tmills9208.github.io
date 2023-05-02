import { NgModule, SecurityContext } from '@angular/core';
import { AppComponent } from './app.component';

// modules
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { MarkdownModule } from 'ngx-markdown';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

// services
import { ResponsiveService } from './services/responsive.service';

// components
import { HeaderComponent } from './shared-components/common/header/header.component';
import { ProjectListComponent } from './shared-components/project/project-list/project-list.component';
import { ProjectCardComponent } from './shared-components/project/project-card/project-card.component';
import { ProjectTagComponent } from './shared-components/project/project-tag/project-tag.component';
import { DeployedSiteButtonComponent } from './shared-components/project/deployed-site-button/deployed-site-button.component';
import { FooterComponent } from './shared-components/common/footer/footer.component';

// pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ThreeCanvasComponent } from './shared-components/three-canvas/three-canvas.component';
import { ProjectTagListComponent } from './shared-components/project/project-tag-list/project-tag-list.component';
import { ContactFormComponent } from './shared-components/forms/contact-form/contact-form.component';
import { SocialLinksComponent } from './shared-components/common/social-links/social-links.component';
import { SidenavComponent } from './shared-components/common/sidenav/sidenav.component';
import { GoogleTagManagerModule } from 'angular-google-tag-manager';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    ProjectsPageComponent,
    ProjectListComponent,
    ProjectPageComponent,
    ProjectCardComponent,
    ProjectTagComponent,
    DeployedSiteButtonComponent,
    NotFoundPageComponent,
    FooterComponent,
    ThreeCanvasComponent,
    ProjectTagListComponent,
    ContactFormComponent,
    SocialLinksComponent,
    SidenavComponent,
  ],
  imports: [
    HttpClientModule,
    LayoutModule,
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule,
    BrowserAnimationsModule,
    // TranslateModule.forRoot(),
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE,
    }),
    MarkdownModule.forChild(),
    MaterialModule,
    GoogleTagManagerModule.forRoot({
      id: 'GTM-5DJCGJJ'
    })
  ],
  providers: [ResponsiveService],
  bootstrap: [AppComponent],
})
export class AppModule {}
