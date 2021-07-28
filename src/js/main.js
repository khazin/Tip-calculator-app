class TipCalculator {
  /*input value*/
  _value = "";
  _billValue = "";
  _peopleValue = "";
  _customTipPercValue = "";
  _tipPercValue = "";

  constructor() {
    /*input and output element*/
    this.billInput = document.querySelector("#billInput");
    this.peopleInput = document.querySelector("#peopleInput");
    this.customTipInput = document.querySelector("#customTipInput");
    this.totalPriceOutput = document.querySelector("#totalPriceOutput");
    this.totalTipOutput = document.querySelector("#totalTipOutput");
    this.peopleInputLabel = document.querySelector(".people--label");
    this.billInputLabel = document.querySelector(".bill--label");
  }
  /*setter and getter methods*/
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
  }
  get billValue() {
    return this._billValue;
  }
  set billValue(value) {
    this._billValue = value;
  }
  get peopleValue() {
    return this._peopleValue;
  }
  set peopleValue(value) {
    this._peopleValue = value;
  }
  get customTipPercValue() {
    return this._customTipPercValue;
  }
  set customTipPercValue(value) {
    this._customTipPercValue = value;
  }
  get tipPercValue() {
    return this._tipPercValue;
  }
  set tipPercValue(value) {
    this._tipPercValue = value;
  }

  /*store any input values*/
  storeValue() {
    document.addEventListener("keyup", (e) => {
      let element = e.target;
      let regex = /^[0-9\.]+$/;
      if (element.tagName == "INPUT") {
          if (!element.value.match(regex)) {
              element.value='';
          }
        this.value = element.value;
      }
    });
  }
  /*store  bill values*/
  setBill() {
    document.addEventListener("keyup", (e) => {
      let element = e.target;
      if (element.id == "billInput") {
        this.billValue = this.value;
      }
    });
  }

  /*store custom % tip values*/
  setCustomPercTip() {
    document.addEventListener("keyup", (e) => {
      let element = e.target;
      if (element.id == "customTipInput") {
        this.customTipPercValue = this.value;
        this.tipPercValue = this.customTipPercValue / 100;
      }
    });
  }

  /*store amt of people values*/
  setPeople() {
    document.addEventListener("keyup", (e) => {
      let element = e.target;
      if (element.id == "peopleInput") {
        this.peopleValue = this.value;
      }
    });
  }

  /*store % tip value*/
  setTipPerc() {
    document.addEventListener("click", (e) => {
      let element = e.target;
      if (
        element.classList.contains("tip--input") &&
        element.classList.contains("-button")
      ) {
        this.tipPercValue = parseInt(element.value) / 100;
      }
    });
  }

  /*calculate tip per person amount*/
  calcTipAmount() {
    let totalTips = (this.billValue * this.tipPercValue) / this.peopleValue;
    if (!isNaN(totalTips)) {
      if (!isFinite(totalTips)) {
        this.totalTipOutput.innerHTML = "$0.00";
      } else {
        this.totalTipOutput.innerHTML = "$" + totalTips.toFixed(2);
      }
    }
  }

  /*calculate total cost per person amount*/
  calcTotalAmount() {
    let totalValue =
      (this.billValue * (1 + this.tipPercValue)) / this.peopleValue;
    if (!isNaN(totalValue)) {
      if (!isFinite(totalValue)) {
        this.totalPriceOutput.innerHTML = "$0.00";
      } else {
        this.totalPriceOutput.innerHTML = "$" + totalValue.toFixed(2);
      }
    }
  }

  /*calculate everything*/
  calcAll() {
    this.calcTipAmount();
    this.calcTotalAmount();
  }

  /**
   * Validate 
   */
   validate(label, input) {
    document.addEventListener("keyup", (e) => {
      let element = e.target;
      if (input.value == 0 && input.value != '') {
          label.classList.add('-error');
          input.classList.add('-error');
      } else {
        label.classList.remove('-error');
        input.classList.remove('-error');
      }

  })
}

    validateAll(){
        this.validate(this.billInputLabel,this.billInput);
        this.validate(this.peopleInputLabel,this.peopleInput);
    }


  /*set reset*/
  reset() {
    document.addEventListener("click", (e) => {
      let element = e.target;
      if (element.id == "resetButton") {
        this.billValue = 0;
        this.peopleValue = 0;
        this.customTipPercValue = 0;
        this.tipPercValue = 0;

        this.billInput.value = "";
        this.peopleInput.value = "";
        this.customTipInput.value = "";

        this.totalPriceOutput.innerHTML = "$0.00";
        this.totalTipOutput.innerHTML = "$0.00";
      }
    });
  }
}

let tipCalculator = new TipCalculator();
tipCalculator.storeValue();
tipCalculator.setBill();
tipCalculator.setCustomPercTip();
tipCalculator.setTipPerc();
tipCalculator.setPeople();
tipCalculator.validateAll();
tipCalculator.reset();

setInterval(() => {
  tipCalculator.calcAll();
}, 500);
