import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShaderfilesService {
  constructor(private http: HttpClient) {}

  getShaderFromAssets(fileName: string = ''): Observable<string> {
    return new Observable<string>((o) => {
      return this.http
        .get(`/assets/shaders/${fileName}`, { responseType: 'text' })
        .subscribe((data) => {
          if (data) {
            o.next(data.toString());
            o.complete();
          }
          else {
            o.error("File not found");
          }
        });
    });
  }
}
