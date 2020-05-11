import { Injectable } from '@angular/core';
import { ChatMessage } from 'src/app/models/chat-message.model';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  message: ChatMessage;
  myDate = Date.now();

  public msgContent: ChatMessage = new ChatMessage(
    'Hi! How are you doing?',
    'Doing good. You?'
  );

  constructor() {}
}
