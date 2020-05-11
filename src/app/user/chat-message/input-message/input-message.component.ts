import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-input-message',
  templateUrl: './input-message.component.html',
  styleUrls: ['./input-message.component.scss'],
})
export class InputMessageComponent implements OnInit {
  @Output() myMsg: EventEmitter<any> = new EventEmitter();
  chatId: number;
  message: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}

  sendMsg(text: NgForm) {
    this.route.params.subscribe((params) => {
      const idChat = params.id;
      this.chatId = parseInt(idChat);
    });

    text.value.chatId = this.chatId;
    this.chatId = text.value.chatId;
    const message = text.value.message;

    const msgSend = {
      chatId: this.chatId,
      message,
    };
    this.myMsg.emit(msgSend);
    text.reset();
  }

  handleSendMsg(event) {
    if (event.keyCode === 13) {
      this.sendMsg;
    }
  }
}
