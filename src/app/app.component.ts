import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment.prod';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private baseUrl = environment.api.url;
  constructor(private http: HttpClient) {}

  startCharging() {
    this.http
      .post(`${this.baseUrl}/charging/start`, { chargerId: '1' })
      .subscribe((response) => console.log(response));
  }

  stopCharging() {
    this.http
      .post(`${this.baseUrl}/charging/stop`, { transactionId: '123' })
      .subscribe((response) => console.log(response));
  }
}
