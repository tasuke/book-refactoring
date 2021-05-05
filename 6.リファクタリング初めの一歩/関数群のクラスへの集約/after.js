// reading = {customer: "ivan", quantity: 10, month: 5, year: 2017}

// レコードのカプセル化
class Reading {
    constructor(data) {
        this._customer = data.customer;
        this._quantity = data.quantity;
        this._month = data.month;
        this._year = data.year;
    }
    get customer() {return this._customer}
    get quantity() {return this._quantity}
    get month() {return this._month}
    get year() {return this._e}

    // 関数の移動・関数名の変更
    get baseCharge() {
        return baseRate(this.month, this.year) * this.quantity;
    }

    // 関数の抽出・移動
    get taxableCharge() {
        return Math.max(0, this.baseCharge - taxThreshold(this.year));
    }
}

// client1
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
// const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;
const baseCharge = aReading.baseCharge();

// client2
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
// const base = (baseRate(aReading.month, aReading.year) * aReading.quantity);
const taxableCharge = aReading.taxableCharge();

// client3
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChargeAmount = aReading.baseCharge();
// function calculateBaseCharge(aReading) {
//     return baseRate(aReading.month, aReading.year) * aReading.quantity;
// }
