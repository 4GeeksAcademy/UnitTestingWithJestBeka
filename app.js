const sum = (a,b) => {
    return a + b
}

module.exports = { sum };

const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

module.exports = { sum, fromEuroToDollar }

const fromDollarToYen = function(ValueInYen) {
    // Convertimos el valor a Yen
    let valorEnDolar = ValueInYen * 157

    // Retornamos el valor en dólares
    return valorEnDolar
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen  }

const fromYenToPound = function(ValueInPound) {
    // Convertimos el valor a Yen
    let ValueInYen = ValueInPound * 206

    // Retornamos el valor en dólares
    return ValueInYen
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound  }
