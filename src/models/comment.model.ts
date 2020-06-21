export class Coment {
  static nextId = 0;
  id = Coment.nextId++;
  constructor(public body: string, public author: string) {}
}
