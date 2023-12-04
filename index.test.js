const {capitalize,reverseString,calculator}=require("./index.js")


test('capitalize first Character', () => {
  expect(capitalize("banana")).toBe("Banana");
});
test('reverse String', ()=> {
  expect(reverseString("ciao")).toBe("oaic");
});
test('calculator add', ()=>{
  expect(calculator.add(2,2)).toBe(4)
})
test('calculator subtract',()=>{
  expect(calculator.subtract(2,2)).toBe(0);
})
test('calculator divide',()=>{
  expect(calculator.divide(2,2)).toBe(1);
})
test('calculator multiply',()=>{
  expect(calculator.multiply(2,2)).toBe(4);
})

