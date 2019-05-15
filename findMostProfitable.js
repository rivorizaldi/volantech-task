let goldPrice = [100, 110, 120, 89, 98, 110, 90, 112, 105, 100];

let profit = 0;
let tempProfit = 0;
let sellPrice = 0;
let buyPrice = 0;
let dayBuy = 0;
let daySell = 0;

goldPrice.forEach((value,index) => {

  	for(let i=0; i<goldPrice.length; i++){
      if(index >= i) continue
      
      tempProfit = goldPrice[i] - value;
      
      if(tempProfit > profit) {
      	profit = tempProfit
      	sellPrice = goldPrice[i];
        daySell = i + 1
	  	buyPrice = value;
        dayBuy = index + 1
      }
    }
})

console.log(`untuk mendapatkan keuntungan tertinggi membeli emas dapat di lakukan pada hari ke ${dayBuy} dengan harga emas saat itu ${buyPrice} dan menjual nya pada hari ke ${daySell} dengan harga emas saat itu ${sellPrice} dengan keuntungan yang di dapat ${profit}`)

