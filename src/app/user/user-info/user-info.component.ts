import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from 'src/app/models/user.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  user: User;

  constructor(
    public dialogRef: MatDialogRef<UserInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.userInfo;
  }

  onClose() {
    this.dialogRef.close();
  }
}
