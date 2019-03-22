import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslatePipe } from '@ngx-translate/core';
import { UsersModalEditionComponent } from './users-modal-edition.component';
import { FormsModule } from '@angular/forms';
import { MatDialog, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER, MatDialogModule, MatDialogRef } from '@angular/material';

describe('UsersModalEditionComponent', () => {
  let component: UsersModalEditionComponent;
  let fixture: ComponentFixture<UsersModalEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatDialogModule
      ],
      declarations: [
        UsersModalEditionComponent,
        TranslatePipe ],
      providers: [
        MatDialogRef
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersModalEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
