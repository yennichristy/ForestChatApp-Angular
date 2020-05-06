import { Component, OnInit } from '@angular/core';
import { ChatList } from '../../models/contact.model';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
})
export class ChatListComponent implements OnInit {
  chat: ChatList[];

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chat = this.chatService.getChatList();
  }
}
