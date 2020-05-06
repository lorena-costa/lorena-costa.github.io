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

  open(){
    this.isOpen = true;
    document.getElementById('menu').classList.remove('close-animation')
    document.getElementById('menu').classList.add('open-animation')
    setTimeout(() => {
      document.getElementById('menu').classList.add('isOpen')
    }, 500)
  }

  close() {
    this.isOpen = false;
    document.getElementById('menu').classList.remove('isOpen')
    document.getElementById('menu').classList.remove('open-animation')
    document.getElementById('menu').classList.add('close-animation')
  }

  scrollTo(idSection: string) {
    let el = document.getElementById(idSection)
    if(el) {
      el.scrollIntoView({behavior:"smooth"})
      this.close()
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
