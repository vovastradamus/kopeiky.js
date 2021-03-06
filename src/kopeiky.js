import { prepareOperationNumber, validateKopeiky } from "./kopeiky-utils";

export class Kopeiky {
  constructor(num, options = {}) {
    const { rank = 2 } = options;

    this._options = options;
    this._rank = rank;
    this._num = parseInt(num * 10 ** this._rank, 10);
  }

  getValue() {
    return this._num;
  }

  toNormal(num) {
    const returnNum = num === undefined ? this._num : num;

    return returnNum / 10 ** this._rank;
  }

  add(num) {
    const numKopeiky = prepareOperationNumber(this, num);

    const newValue = this.getValue() + numKopeiky.getValue();

    return createKopeiky(this.toNormal(newValue), this._options);
  }

  sub(num) {
    const numKopeiky = prepareOperationNumber(this, num);

    const newValue = this.getValue() - numKopeiky.getValue();

    return createKopeiky(this.toNormal(newValue), this._options);
  }

  muliply(num) {
    return createKopeiky(this.toNormal(this.getValue() * num), this._options);
  }

  divide(num) {
    return createKopeiky(this.toNormal(this.getValue() / num), this._options);
  }

  clone() {
    return createKopeiky(this.toNormal(), this._options);
  }

  toString() {
    return this.toNormal().toFixed(this._rank);
  }

  valueOf() {
    return this.toNormal();
  }

  toJSON() {
    return this.toNormal();
  }
}

export function createKopeiky(num, options) {
  validateKopeiky(num);

  if (num instanceof Kopeiky) {
    return num;
  }

  return new Kopeiky(num, options);
}
