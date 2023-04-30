import { Component, Input } from '@angular/core';
import { ProjectTag } from 'src/app/models/project';

@Component({
  selector: 'app-project-tag-list',
  templateUrl: './project-tag-list.component.html',
  styleUrls: ['./project-tag-list.component.scss']
})
export class ProjectTagListComponent {
  @Input() public tags?: ProjectTag[]

  
}
