import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslatePipe, TranslateService, TranslateStore, TranslateLoader, TranslateCompiler, TranslateParser, MissingTranslationHandler, USE_DEFAULT_LANG, USE_STORE } from '@ngx-translate/core';
import { UsersComponent } from './users.component';
import { UsersTranslateComponent } from '../users-translate/users-translate.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatDialog, MAT_DIALOG_SCROLL_STRATEGY } from '@angular/material';
import { Overlay } from '@angular/cdk/overlay';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersComponent, UsersTranslateComponent, TranslatePipe ],
      providers: [
        HttpClient,
        HttpHandler,
        MatDialog,
        {provide: Overlay},
        {provide: MAT_DIALOG_SCROLL_STRATEGY},
        TranslateService,
        TranslateStore,
        TranslateLoader,
        TranslateCompiler,
        TranslateParser,
        MissingTranslationHandler,
        {provide: USE_DEFAULT_LANG},
        {provide: USE_STORE},
        /* {provide: TranslateLoader},
      {useFactory: (http: HttpClient) => new TranslateHttpLoader(http, '/assets/i18n/', '.json')},
    {deps: [HttpClient]} */
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  /****************************My tests****************************************/

  it('should be created a table', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('table')).toBeTruthy();
  });

});
