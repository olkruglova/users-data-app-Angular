import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersTranslateComponent } from './users-translate/users-translate.component';
import { UsersModalEditionComponent } from './users-modal-edition/users-modal-edition.component';
import { TranslatePipe, TranslateModule, TranslateService, TranslateStore, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatCheckboxModule, MatCardModule, MatButtonModule } from '@angular/material';
import { DataListService } from './services/data-list.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersTranslateComponent,
    UsersModalEditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        useValue: TranslatePipe,
        deps: [HttpClient]
      }
    }),
    MatDialogModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  entryComponents: [
    UsersModalEditionComponent
],
  exports: [
    UsersTranslateComponent,
    UsersModalEditionComponent
  ],
  providers: [
    DataListService,
    TranslateService,
    TranslateStore,
    HttpClient,
    TranslatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
