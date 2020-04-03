export class User {



  constructor(input?: User) {
    if (input) {
      Object.assign(input);
    }
}
}
