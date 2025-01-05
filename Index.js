
function Money(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
  }
  
  Money.prototype.getValue = function getValue() {
    return this.value;
  }
  
  Money.prototype.getCurrency = function getCurrency(){
    return this.currency
  }
  
  // END
  Money.prototype.exchangeTo = function exchangeTo(currency){
    if(this.getCurrency() === currency){
        return new Money(this.value, this.currency)
    }

    let exchangedValue;
    if(this.currency === 'usd' && currency === 'eur'){
        exchangedValue = this.value * 0.70
    }else if (this.currency === 'eur' && currency === 'usd'){
        exchangedValue = this.value * 1.2
    }
    return new Money(exchangedValue, currency);
  }
  
  Money.prototype.add = function add(money){
    let sum;
    if(this.currency === money.getCurrency()){
        sum = this.value + money.getValue()
        return new Money(sum, this.currency)
    }

    if(this.currency !== money.getCurrency() && this.currency === 'eur'){
        sum = this.value + money.exchangeTo(this.currency).getValue()
        return new Money(sum, this.currency)
    }else if(this.currency !== money.getCurrency() && this.currency === 'usd')
        sum = this.value + money.exchangeTo(this.currency).getValue()
        return new Money(sum, this.currency)
  }

  Money.prototype.format = function format(){
    const options = { style: 'currency', currency: this.currency.toUpperCase() };
    return this.value.toLocaleString(undefined, options);
  }
