var Shopper = /** @class */ (function () {
    function Shopper(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    Shopper.prototype.showName = function () {
        alert(this.firstname + " " + this.lastname);
    };
    return Shopper;
}());
//# sourceMappingURL=shopper.js.map