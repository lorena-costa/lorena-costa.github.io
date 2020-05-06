import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isOpen: boolean = false;
  currentLanguage: string;
  languages: any;
  constructor(private translate: TranslateService) { }
  
  ngOnInit(): void {
    this.languages = {
      'pt': 'Português',
      'en': 'English'
    }
    this.currentLanguage = this.languages[this.translate.currentLang]
  }

  scrollTo(idSection: string) {
    let el = document.getElementById(idSection)
    if(el) {
      el.scrollIntoView({behavior:"smooth"})
      this.isOpen = false
    }
  }

  changeLanguage() {
    if(this.currentLanguage == 'Português') {
      this.translate.use('en')
      this.currentLanguage = 'English'
    } else {
      this.translate.use('pt')
      this.currentLanguage = 'Português'
    }
  }
}
