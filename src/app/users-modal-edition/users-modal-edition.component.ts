import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-users-modal-edition',
  templateUrl: './users-modal-edition.component.html',
  styleUrls: ['./users-modal-edition.component.css']
})
export class UsersModalEditionComponent implements OnInit {


  constructor(public thisDialogRef: MatDialogRef<UsersModalEditionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() { }

  onCloseConfirm(id: number, key: string, event: any) {
    this.thisDialogRef.close('Confirm');
    const editField = event.target.textContent;
    this.data[id][key] = editField;
    console.log(this.data[id][key]);
  }
  onCloseCancel() {
    this.data = this.data;
    this.thisDialogRef.close('Cancel');
  }


}
