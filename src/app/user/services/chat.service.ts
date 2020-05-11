import { Injectable } from '@angular/core';
import { ChatList } from '../../models/contact.model';
import { ChatMessage } from '../../models/chat-message.model';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  chatMessage: ChatMessage;

  private chatList: ChatList[] = [
    new ChatList(
      1,
      'http://www.muzdrama.com/wp-content/uploads/2019/03/0003962849_001_20190304175707634.jpg',
      'Min Young',
      'Hai!'
    ),
    new ChatList(
      2,
      'https://i1.wp.com/78.media.tumblr.com/d82fec206f91bbe3987fdf985a8e3e93/tumblr_pb6be2H27Y1qgh5gxo5_1280.jpg?w=605&ssl=1',
      'Dong Hae',
      'Hai!'
    ),
    new ChatList(
      3,
      'http://www.muzdrama.com/wp-content/uploads/2019/03/0003962849_001_20190304175707634.jpg',
      'Na Ra',
      'Hai!'
    ),
    new ChatList(
      4,
      'https://i1.wp.com/78.media.tumblr.com/d82fec206f91bbe3987fdf985a8e3e93/tumblr_pb6be2H27Y1qgh5gxo5_1280.jpg?w=605&ssl=1',
      'Seo Joon',
      'Hai!'
    ),
    new ChatList(
      5,
      'http://www.muzdrama.com/wp-content/uploads/2019/03/0003962849_001_20190304175707634.jpg',
      'Bo Young',
      'Hai!'
    ),
    new ChatList(
      6,
      'https://i1.wp.com/78.media.tumblr.com/d82fec206f91bbe3987fdf985a8e3e93/tumblr_pb6be2H27Y1qgh5gxo5_1280.jpg?w=605&ssl=1',
      'Si Won',
      'Hai!'
    ),
    new ChatList(
      7,
      'http://www.muzdrama.com/wp-content/uploads/2019/03/0003962849_001_20190304175707634.jpg',
      'Tae Hee',
      'Hai!'
    ),
    new ChatList(
      8,
      'https://i1.wp.com/78.media.tumblr.com/d82fec206f91bbe3987fdf985a8e3e93/tumblr_pb6be2H27Y1qgh5gxo5_1280.jpg?w=605&ssl=1',
      'Bo Geum',
      'Hai!'
    ),
    new ChatList(
      9,
      'https://i1.wp.com/78.media.tumblr.com/d82fec206f91bbe3987fdf985a8e3e93/tumblr_pb6be2H27Y1qgh5gxo5_1280.jpg?w=605&ssl=1',
      'Min Ho',
      'Hai!'
    ),
    new ChatList(
      10,
      'https://i1.wp.com/78.media.tumblr.com/d82fec206f91bbe3987fdf985a8e3e93/tumblr_pb6be2H27Y1qgh5gxo5_1280.jpg?w=605&ssl=1',
      'Hyun Shik',
      'Hai!'
    ),
  ];

  getChatList() {
    return this.chatList.slice();
  }

  getChat(id: number) {
    return this.chatList[id];
  }

  constructor() {}
}
