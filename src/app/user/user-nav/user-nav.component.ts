import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../../models/user.model';
import { UserService } from '../services/user.service';
import { UserInfoComponent } from '../user-info/user-info.component';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.scss'],
})
export class UserNavComponent implements OnInit {
  user: User;

  constructor(public dialog: MatDialog, private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.userInfo;
  }

  openUserInfo() {
    const userDialog = this.dialog.open(UserInfoComponent, {
      width: '500px',
      data: {
        name: this.user.nameUser,
        phone: this.user.phoneUser,
        picture: this.user.photoUser,
      },
    });

    userDialog.afterClosed().subscribe((result) => {
      console.log('Changed has made');
      this.user = result;
    });
  }
}
