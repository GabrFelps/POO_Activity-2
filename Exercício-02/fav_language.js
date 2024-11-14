var User = /** @class */ (function () {
    function User(name, paymentTime, language) {
        this.name = name;
        this.paymentTime = paymentTime;
        this.language = language;
    }
    User.prototype.displayMessage = function () {
        return "".concat(this.name, "\nMy payment time is ").concat(this.paymentTime, "\nand my preferred language is ").concat(this.language);
    };
    return User;
}());
var user = new User("Felipe", 120.56, "Assembly");
console.log(user.displayMessage());
