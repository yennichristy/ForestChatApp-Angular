export class ChatMessage {
  constructor(
    public idMsg: string,
    public bodyMsg: string,
    public timeMsg: string,
    public dateMsg: Date = new Date(),
    public statusMsg: string,
    public idConv: string,
    public idGroup: string,
    public idReceiver: string
  ) {}
}
