import { Component, OnInit, Input } from '@angular/core';
import { ChatList } from '../../../models/contact.model';

@Component({
  selector: 'app-chat-details',
  templateUrl: './chat-details.component.html',
  styleUrls: ['./chat-details.component.scss'],
})
export class ChatDetailsComponent implements OnInit {
  @Input() chat: ChatList;
  @Input() index: number;

  constructor() {}

  ngOnInit(): void {}
}
