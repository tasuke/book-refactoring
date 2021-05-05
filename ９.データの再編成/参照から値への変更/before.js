class Person {
    constructor() {
        this._telephoneNumer = new TelephoneNumber();
    }

    get officeAreaCode() {return this._telephoneNumer.areaCode;}
    set officeAreaCode(arg) {this._telephoneNumer.areaCode = arg;}
    get officeNumber() {return this._telephoneNumer.number;}
    set officeNumber(arg) {this._telephoneNumer.number = arg;}
}

class TelephoneNumber {
    get areaCode() {return this._areaCode;}
    set areaCode(arg) {this._areaCode = arg}
    get number() {return this._number;}
    set number(arg) {this._number = arg;}
}