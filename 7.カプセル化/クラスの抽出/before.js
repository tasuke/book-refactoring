class Person{
    constructor() {
        this._telephoneNumber = new TelephoneNumber();
    }
    get name() {return this._name;}
    set name(arg) {this._name = arg;}
    get telephoneNumber() {return this.telephoneNumber.toString();}
    get officeAreaCode() {return this.telephoneNumber.areaCode;}
    set officeAreaCode(arg) {this.telephoneNumber.areaCode = arg;}
    get officeNumber() {return this.telephoneNumber.number;}
    set officeNumber(arg) {this.telephoneNumber.number = arg;}
}

class TelephoneNumber{
    get toString() {return `(${this.officeAreaCode}) ${this.officeNumber}`;}
    get areaCode() {return this._officeAreaCode;}
    set areaCode(arg) {this._officeAreaCode = arg;}
    get number() {return this._officeNumber;}
    set number(arg) {this._officeNumber = arg;}
}