import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeployedSiteButtonComponent } from './deployed-site-button.component';

describe('DeployedSiteButtonComponent', () => {
  let component: DeployedSiteButtonComponent;
  let fixture: ComponentFixture<DeployedSiteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeployedSiteButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeployedSiteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
