import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslatePipe, TranslateParser, MissingTranslationHandler, TranslateService, TranslateStore, TranslateLoader, TranslateCompiler, USE_DEFAULT_LANG } from '@ngx-translate/core';
import { UsersTranslateComponent } from './users-translate.component';
import { MAT_DIALOG_SCROLL_STRATEGY } from '@angular/material';

describe('UsersTranslateComponent', () => {

  let component: UsersTranslateComponent;
  let fixture: ComponentFixture<UsersTranslateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersTranslateComponent, TranslatePipe ],
      providers: [
        TranslateService,
        TranslateStore,
        TranslateLoader,
        TranslateCompiler,
        TranslateParser,
        MissingTranslationHandler,
        USE_DEFAULT_LANG,
        {provider: MAT_DIALOG_SCROLL_STRATEGY}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
