class SmartCalculator {
  constructor(initialValue) {
    this.result = initialValue;
  }

  _doOperation (operation, number) {
    this.result += operation + number;
    return this
  }

  add(number) {
    return this._doOperation('+', number);
  }
  
  subtract(number) {
    return this._doOperation('-', number);
  }

  multiply(number) {
    return this._doOperation('*', number);
  }

  devide(number) {
    return this._doOperation('/', number);
  }

  pow(number) {
    return this._doOperation('**', number);
  }

  valueOf () {
    return eval(this.result);
  }
}

module.exports = SmartCalculator;
