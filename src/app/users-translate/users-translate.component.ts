import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-users-translate',
  templateUrl: './users-translate.component.html',
  styleUrls: ['./users-translate.component.css']
})

export class UsersTranslateComponent implements OnInit {

  langs: string[] = [ 'en', 'fr', 'de', 'pl' ];


  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    /* console.log(language); */
  }

  ngOnInit() {
  }

}
