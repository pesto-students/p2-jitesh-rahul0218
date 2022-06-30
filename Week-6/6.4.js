
function maxProfit(prices) {
    let maxP = 0;
    let minP = Number.MAX_VALUE;

    for( let i = 0; i < prices.length; i++ ) {
        minP = Math.min(minP, prices[i]);

        if( prices[i] > minP ) {
           maxP = Math.max(maxP, prices[i] - minP);
         
        }
    }

    return maxP;
}

let prices = [7,1,5,3,6,4];

console.log(maxProfit(prices));