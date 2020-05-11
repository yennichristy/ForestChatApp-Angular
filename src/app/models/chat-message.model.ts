export class ChatMessage {
  constructor(
    public content: string,
    public contentReceive: string,
    public dateMsg: Date = new Date()
  ) {}
}
