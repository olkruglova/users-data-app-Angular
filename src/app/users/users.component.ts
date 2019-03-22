import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Users } from '../users';
import { DataListService } from '../services/data-list.service';
import { MatDialog } from '@angular/material';
import { UsersModalEditionComponent } from '../users-modal-edition/users-modal-edition.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {


  dialogResult: string = '';
  users: Users[] = [];
  event: any;

  @Input() user: any;
  @Output() remove:EventEmitter<any> = new EventEmitter();


  constructor(private dataListService: DataListService, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataListService.getJSON().subscribe (data => {
      /* console.log(data); */
      this.users=data;
    })
    }
  removeUser(i) {
    this.users.splice(i, 1);
  }

  changeValue(id: number, property: string, event: any) {
    this.user = event.target.textContent;
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.users[id][property] = editField;
  }

  openDialog(user) {
    let data: any = user;
    let dialogRef = this.dialog.open(UsersModalEditionComponent, {
      width: '700px',
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    });
    /* console.log(data); */
  }

}

