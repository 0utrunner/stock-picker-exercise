def picker(prices):
    graph = prices.copy()
    best_days = []
    buy_day = graph[0]
    best_buy_day = []
    sell_day = graph[1]
    money_made = sell_day - buy_day
    counter = 0

    while len(graph) != 0:
        while counter < len(graph):
            if graph[0] - buy_day > money_made:
                best_buy_day = buy_day
                sell_day = graph[0]
                money_made = graph[0] - buy_day
            graph.append(graph.pop(0))
            counter += 1
        buy_day = graph.pop(0)
        counter = 0
    best_days.append(prices.index(best_buy_day))
    best_days.append(prices.index(sell_day))

    return best_days