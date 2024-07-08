const { sum } = require('./app.js');

test ("la suma de 14 + 9 es igual a 23",()=>{
    let total = sum(14,9)
    expect (total).toBe(23);
})

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dolar should be 157 yen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    const yen = fromDollarToYen(5);

    const expected = 5 * 157;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(5)).toBe(785); 
})


test("One pound should be 206 yen", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    const yen = fromYenToPound(5);

    const expected = 5 * 206;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(5)).toBe(1030); 
})