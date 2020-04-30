import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  constructor(private titleService: Title){
    // TODO: traduzir titulo
    this.titleService.setTitle('Lorena Costa | Developer')
  }
}
