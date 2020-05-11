import { Component, OnInit } from '@angular/core';
import { ChatList } from '../../../models/contact.model';
import { ChatService } from '../../services/chat.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ChatMessage } from 'src/app/models/chat-message.model';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss'],
})
export class ContactInfoComponent implements OnInit {
  chat: ChatList;
  chatId: number;
  message: ChatMessage;

  constructor(
    private chatService: ChatService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.chatId = +params['id'];
      this.chat = this.chatService.getChat(this.chatId);
      this.message = this.messageService.msgContent;
    });
  }
}
