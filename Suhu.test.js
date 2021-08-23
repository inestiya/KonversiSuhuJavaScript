// const { suhu } = require("./Suhu");

// test("Konversi Suhu", () => {
//      expect(suhu.fromCelcius('reamur',20)).toBe(16);
// });

const Suhu = require("./Suhu");

test("test celcius to reamur", () => {
  const conv = new Suhu();
  expect(conv.fromCelcius('reamur',20)).toBe(16);
});

test("test celcius to farenheit", () => {
    const conv = new Suhu();
    expect(conv.fromCelcius('farenheit',30)).toBeCloseTo(86);
  });

test("test reamur to farenheit", () => {
    const conv = new Suhu();
    expect(conv.fromReamur('farenheit',20)).toBeCloseTo(77);
  });

  test("test reamur to celcius", () => {
    const conv = new Suhu();
    expect(conv.fromReamur('celcius',30)).toBeCloseTo(37.5);
  });
  test("test farenheit to celcius", () => {
    const conv = new Suhu();
    expect(conv.fromFarenheit('celcius',120)).toBeCloseTo(48.888);
  });
  test("test farenheit to reamur", () => {
    const conv = new Suhu();
    expect(conv.fromFarenheit('reamur',50)).toBeCloseTo(8);
  });
