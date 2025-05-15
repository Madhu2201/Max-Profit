
function maxProfit(timeUnits) {
    const properties = [
        { type: 'T', time: 5, earnings: 1500 },
        { type: 'P', time: 4, earnings: 1000 },
        { type: 'C', time: 10, earnings: 3000 }
    ];

    let maxEarnings = 0;
    let solutions = [];

    const maxT = Math.floor(timeUnits / properties[0].time);
    const maxP = Math.floor(timeUnits / properties[1].time);
    const maxC = Math.floor(timeUnits / properties[2].time);

    for (let t = 0; t <= maxT; t++) {
        for (let p = 0; p <= maxP; p++) {
            for (let c = 0; c <= maxC; c++) {
                const buildOrder = [];

                for (let i = 0; i < t; i++) buildOrder.push(properties[0]);
                for (let i = 0; i < p; i++) buildOrder.push(properties[1]);
                for (let i = 0; i < c; i++) buildOrder.push(properties[2]);

                let currentTime = 0;
                let earnings = 0;
                let possible = true;

                for (const building of buildOrder) {
                    const readyTime = currentTime + building.time;
                    if (readyTime > timeUnits) {
                        possible = false;
                        break;
                    }
                    const activeTime = timeUnits - readyTime;
                    earnings += building.earnings * activeTime;
                    currentTime = readyTime;
                }

                if (!possible) continue;

                if (earnings > maxEarnings) {
                    maxEarnings = earnings;
                    solutions = [[t, p, c]];
                } else if (earnings === maxEarnings) {
                    solutions.push([t, p, c]);
                }
            }
        }
    }

    const formattedSolutions = solutions.map(([t, p, c]) => `T: ${t} P: ${p} C: ${c}`);

    return {
        earnings: maxEarnings,
        solutions: formattedSolutions
    };
}

console.log(maxProfit(7));   
console.log(maxProfit(8));   
console.log(maxProfit(13));  
