exports.picker = function(prices) {
    let graph = prices.slice()
    let bestDays = []
    let buyDay = graph[0]
    let bestBuyDay = []
    let sellDay = graph[1]
    let moneyMade = sellDay - buyDay
    let counter = 0

    while(graph.length != 0){
        while(counter < graph.length){
            if(graph[0] - buyDay > moneyMade){
                bestBuyDay = buyDay
                sellDay = graph[0]
                moneyMade = graph[0] - buyDay
            }
            graph.push(graph.shift())
            counter++
        }
        buyDay = graph.shift()
        counter = 0
    }
    bestDays.push(prices.indexOf(bestBuyDay))
    bestDays.push(prices.indexOf(sellDay))

    return bestDays
}