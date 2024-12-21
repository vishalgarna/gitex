const { MACD } = require('technicalindicators');

// Example input values (replace this with your actual values)
const values = [149.955, 149.848, 149.795, 149.775, 152.039, 152.027, 149.848, 149.795, 149.775, 152.039, 152.027, 149.848, 149.795, 149.775, 152.039, 152.027, 152.008, 153.413, 153.406, 153.428, 153.353, 153.3, 153.299, 153.346];

const macdResult = MACD.calculate({
    values: values,
    fastPeriod: 12,
    slowPeriod: 26,
    signalPeriod: 9,
    SimpleMAOscillator: false,
    SimpleMASignal: false
});

// Function to detect crossovers
function macdCrossoverStrategy(macdData) {
    const signals = [];
    for (let i = 1; i < macdData.length; i++) {
        if (macdData[i - 1].MACD < macdData[i - 1].signal && macdData[i].MACD > macdData[i].signal) {
            signals.push({ index: i, signal: 'BUY' });
        } else if (macdData[i - 1].MACD > macdData[i - 1].signal && macdData[i].MACD < macdData[i].signal) {
            signals.push({ index: i, signal: 'SELL' });
        }
    }
    return signals;
}

const signals = macdCrossoverStrategy(macdResult);
console.log(signals);
