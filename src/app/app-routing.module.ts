import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    component: HomePageComponent,
    path: '',
  }
  ,{
    component: ProjectsPageComponent,
    path: 'projects',
  }
  ,{
    component: ProjectPageComponent,
    path: 'projects/:slug',
  }
  ,{
    component: NotFoundPageComponent,
    path: '**',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
