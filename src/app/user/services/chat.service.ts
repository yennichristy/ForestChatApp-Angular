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
      'http://www.muzdrama.com/wp-content/uploads/2019/03/0003962849_001_20190304175707634.jpg',
      'Min Young',
      'Hai!'
    ),
    new ChatList(
      'https://i1.wp.com/78.media.tumblr.com/d82fec206f91bbe3987fdf985a8e3e93/tumblr_pb6be2H27Y1qgh5gxo5_1280.jpg?w=605&ssl=1',
      'Dong Hae',
      'Hai!'
    ),
    new ChatList(
      'http://www.muzdrama.com/wp-content/uploads/2019/03/0003962849_001_20190304175707634.jpg',
      'Min Young',
      'Hai!'
    ),
    new ChatList(
      'https://i1.wp.com/78.media.tumblr.com/d82fec206f91bbe3987fdf985a8e3e93/tumblr_pb6be2H27Y1qgh5gxo5_1280.jpg?w=605&ssl=1',
      'Dong Hae',
      'Hai!'
    ),
    new ChatList(
      'http://www.muzdrama.com/wp-content/uploads/2019/03/0003962849_001_20190304175707634.jpg',
      'Min Young',
      'Hai!'
    ),
    new ChatList(
      'https://i1.wp.com/78.media.tumblr.com/d82fec206f91bbe3987fdf985a8e3e93/tumblr_pb6be2H27Y1qgh5gxo5_1280.jpg?w=605&ssl=1',
      'Dong Hae',
      'Hai!'
    ),
    new ChatList(
      'http://www.muzdrama.com/wp-content/uploads/2019/03/0003962849_001_20190304175707634.jpg',
      'Min Young',
      'Hai!'
    ),
    new ChatList(
      'https://i1.wp.com/78.media.tumblr.com/d82fec206f91bbe3987fdf985a8e3e93/tumblr_pb6be2H27Y1qgh5gxo5_1280.jpg?w=605&ssl=1',
      'Dong Hae',
      'Hai!'
    ),
    new ChatList(
      'https://i1.wp.com/78.media.tumblr.com/d82fec206f91bbe3987fdf985a8e3e93/tumblr_pb6be2H27Y1qgh5gxo5_1280.jpg?w=605&ssl=1',
      'Dong Hae',
      'Hai!'
    ),
    new ChatList(
      'https://i1.wp.com/78.media.tumblr.com/d82fec206f91bbe3987fdf985a8e3e93/tumblr_pb6be2H27Y1qgh5gxo5_1280.jpg?w=605&ssl=1',
      'Dong Hae',
      'Hai!'
    ),
  ];

  getChatList() {
    return this.chatList.slice();
  }

  getChat(index: number) {
    return this.chatList[index];
  }

  constructor() {}
}
