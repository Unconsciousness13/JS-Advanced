function tickets(arr, criteria) {
    let result = []
    for (ticket of arr) {
        let [destination, price, status] = ticket.split('|');
        result.push({ "destination": destination, "price": Number(price), "status": status })
    }
    if (criteria === "destination") {
        result.sort(function (a, b) { return a.destination.localeCompare(b.destination) });
    }
    else if (criteria === "price") {
        result.sort(function (a, b) { return a.price - b.price });
    }
    else if (criteria === "status") {
        result.sort(function (a, b) { return a.status.localeCompare(b.status)});
    }
    return (result);
}

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'

))