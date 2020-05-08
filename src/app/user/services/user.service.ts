import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User;

  public userInfo: User = new User(
    '+628123456789',
    'Seung Gi',
    'http://www.dreamers.id/img_artikel/43lee-seung-gi-nasi-bungkus-indonesia.jpg',
    'blabla'
  );

  constructor() {}
}
