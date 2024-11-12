function sharePizza(numOfSlices, numOfPeople) {
    let numOfPizza = numOfSlices / numOfPeople;
    return `Each person gets ${numOfPizza} slices of pizza; from our ${numOfSlices} slice pizza`;
}
console.log(sharePizza(8, 2));
console.log(sharePizza(8, 3));
console.log(sharePizza(21, 20));
console.log(sharePizza(10, 3));