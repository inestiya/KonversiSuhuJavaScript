
class Suhu {
    constructor() {
      console.log("Konversi Suhu");
    }
    fromCelcius(to, input1) {
      if (to == "celcius") {
        return input1;
      }
      if (to == "reamur") {
        return (4 / 5) * input1;
      }
      if (to == "farenheit") {
        return (9 / 5) * input1 + 32;
      }
    }
    fromReamur(to, input1) {
      if (to == "reamur") {
        return input1;
      }
      if (to == "celcius") {
        return (5 / 4) * input1;
      }
      if (to == "farenheit") {
        return (9 / 4) * input1 + 32;
      }
    }
    fromFarenheit(to, input1) {
      if (to == "farenheit") {
        return input1;
      }
      if (to == "celcius") {
        return (5 / 9) * (input1 - 32);
      }
      if (to == "reamur") {
        return (4 / 9) * (input1 - 32);
      }
    }
  }
  
// const suhu = new Suhu();
// module.exports = { suhu };

module.exports = Suhu;