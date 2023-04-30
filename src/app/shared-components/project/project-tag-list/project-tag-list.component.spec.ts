import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTagListComponent } from './project-tag-list.component';

describe('ProjectTagListComponent', () => {
  let component: ProjectTagListComponent;
  let fixture: ComponentFixture<ProjectTagListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectTagListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
