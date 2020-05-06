import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';
import { ChatStartComponent } from './user/chat-start/chat-start.component';
import { ChatMessageComponent } from './user/chat-message/chat-message.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: '', component: ChatStartComponent },
      { path: ':id', component: ChatMessageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
