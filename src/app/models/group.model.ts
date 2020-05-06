export class Group {
  constructor(
    public idGroup: string,
    public nameGroup: string,
    public infoGroup: string,
    public dateGroup: Date = new Date()
  ) {}
}
