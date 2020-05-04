import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  constructor(private titleService: Title,translate: TranslateService){
    translate.setDefaultLang('en');
    translate.use('pt'); 
    translate.get('TITLE').subscribe((title) => {
      this.titleService.setTitle(title)
    });
  }
}
