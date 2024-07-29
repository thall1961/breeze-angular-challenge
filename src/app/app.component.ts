import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'test-app';
  url = 'https://pokeapi.co/api/v2/pokemon/ditto'

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => console.log('res', res));
  }

}
