export class User {
  static nextId = 0;
  id = User.nextId++;
  constructor(
    public username: string,
    public password: string | number,
    public rePassword: string | number,
    public email: string
  ) {}
}
