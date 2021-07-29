function checkCashRegister(price, cash, cid) {
    const unit = {"PENNY": 0.01,
                  "NICKEL": 0.05,
                  "DIME": 0.1,
                  "QUARTER": 0.25,
                  "ONE": 1,
                  "FIVE": 5,
                  "TEN": 10,
                  "TWENTY": 20,
                  "ONE HUNDRED": 100};
    var changeSum = cash - price;
    var cidSum = cid.reduce((a, b) => a + b[1], 0);
    if (cidSum < changeSum) return {status: "INSUFFICIENT_FUNDS", change: []};
    if (cidSum === changeSum) return {status: "CLOSED", change: cid};
    //Copy cid and zero out values
    var change = cid.map(function(unit) {
      let zeroChange = []
      zeroChange[0] = unit[0]
      zeroChange[1] = 0
      return zeroChange
    });
    
    for (let i=change.length-1; i>=0; i--) {
      while ((unit[change[i][0]] <= changeSum) && (cid[i][1] > 0)) {
        changeSum = Number((changeSum - unit[change[i][0]]).toFixed(2));
        cid[i][1] -= unit[change[i][0]];
        change[i][1] += unit[change[i][0]];
      }
    }
    if (changeSum > 0) return {status: "INSUFFICIENT_FUNDS", change: []};
    var finalChange = change.filter(unit => unit[1] !== 0).sort((a, b) => b[1] - a[1]);
    return {status: "OPEN", change: finalChange};
  }
  
  //{status: "OPEN", change: [["QUARTER", 0.5]]}
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

  //{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

  //{status: "INSUFFICIENT_FUNDS", change: []}
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
  
  //{status: "INSUFFICIENT_FUNDS", change: []}
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

  //{status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
