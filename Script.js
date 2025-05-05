function maxProfit(n) {
    const buildings = [
      { type: "T", time: 5, profit: 1500 },
      { type: "P", time: 4, profit: 1000 },
      { type: "C", time: 10, profit: 3000 }
    ];
    let dp = Array(n + 1).fill(null).map(() => ({
      profit: 0,
      combo: { T: 0, P: 0, C: 0 }
    }));
  
    for (let i = 1; i <= n; i++) {
      for (const b of buildings) {
        if (i >= b.time) {
          const prev = dp[i - b.time];
          const newProfit = prev.profit + b.profit;
  
          if (newProfit > dp[i].profit) {
            dp[i].profit = newProfit;
            dp[i].combo = { ...prev.combo };
            dp[i].combo[b.type]++;
          }
        }
      }
    } 
    const result = dp[n];
    console.log(`Time: ${n}, Profit: $${result.profit}`);
    console.log(`T: ${result.combo.T}, P: ${result.combo.P}, C: ${result.combo.C}`);
  }
  
 
  maxProfit(7);   
  maxProfit(8);   
  maxProfit(13);  
  