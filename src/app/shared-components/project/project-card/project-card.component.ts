import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProjectData } from 'src/app/models/project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project?: ProjectData;

  constructor() {}

}
