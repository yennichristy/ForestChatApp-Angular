import { Component, OnInit } from '@angular/core';
import { ChatList } from '../../../models/contact.model';
import { ChatService } from '../../services/chat.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss'],
})
export class ContactInfoComponent implements OnInit {
  chat: ChatList;
  id: number;

  constructor(
    private chatService: ChatService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.chat = this.chatService.getChat(this.id);
    });
  }
}
