import { Component, OnInit } from '@angular/core';
import { ChatList } from '../../../models/contact.model';
import { ChatService } from '../../chat.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss'],
})
export class ContactInfoComponent implements OnInit {
  chat: ChatList;
  id: number;

  constructor() {}

  ngOnInit(): void {}
}
