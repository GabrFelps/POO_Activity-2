class User {
  name: string;
  paymentTime: number;
  language: string;

  constructor(name: string, paymentTime: number, language: string) {
    this.name = name;
    this.paymentTime = paymentTime;
    this.language = language;
  }

  displayMessage(): string {
    return `${this.name}
My payment time is ${this.paymentTime}
and my preferred language is ${this.language}`;
  }
}

const user = new User("Felipe", 120.56, "Assembly");
console.log(user.displayMessage());
