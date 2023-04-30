import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-deployed-site-button',
  templateUrl: './deployed-site-button.component.html',
  styleUrls: ['./deployed-site-button.component.scss']
})
export class DeployedSiteButtonComponent implements OnChanges {
  @Input() resourceHref: string | undefined;
  public gettingResponse: boolean = true;
  public isOnline: boolean = false;
  public label = "Loading...";

  constructor(http: HttpClient) {
    http.get(this.resourceHref ?? '', {observe: 'response', responseType: 'text'}).subscribe(result => {
      // Check if response is either successful or redirected (for now)
      this.isOnline = (result.status >= 200 || result.status < 400);
      this.gettingResponse = false;
      this.label = this.isOnline ? 'Live Now!' : 'Offline';
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }
}
