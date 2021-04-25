// Question 1
function discountPrices(prices, discount){
    const disconuted = [];
    const length = prices.length;

    for(let i = 0; i< length; i++){
        const discountedPrice = prices[i] * (1-discount);
        disconuted.push(discountedPrice);
    }

    // console.log(i);
    console.log(length);

    return disconuted;
}

console.log(discountPrices([100,200,300],0.5));