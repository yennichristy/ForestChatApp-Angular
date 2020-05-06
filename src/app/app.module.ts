import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';
import { ChatListComponent } from './user/chat-list/chat-list.component';
import { ChatDetailsComponent } from './user/chat-list/chat-details/chat-details.component';
import { UserNavComponent } from './user/user-nav/user-nav.component';
import { ChatMessageComponent } from './user/chat-message/chat-message.component';
import { ContactInfoComponent } from './user/chat-message/contact-info/contact-info.component';
import { MessageComponent } from './user/chat-message/message/message.component';
import { InputMessageComponent } from './user/chat-message/input-message/input-message.component';
import { ChatStartComponent } from './user/chat-start/chat-start.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    UserComponent,
    ChatListComponent,
    ChatDetailsComponent,
    UserNavComponent,
    ChatMessageComponent,
    ContactInfoComponent,
    MessageComponent,
    InputMessageComponent,
    ChatStartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
