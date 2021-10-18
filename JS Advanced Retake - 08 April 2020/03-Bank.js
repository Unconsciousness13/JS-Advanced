class Bank {
    _bankName
    constructor(n) {
        this._bankName = n
        this.allCustomers = []
    }

    customerExists = (id) => this.allCustomers.some(
        x => x.personalId === id
    )

    getCustomer = (id) => this.allCustomers.find(x => x.personalId === id)

    newCustomer(c) {
        if (this.customerExists(c.personalId)) {
            throw new Error(`${c.firstName} ${c.lastName} is already our customer!`)
        }

        this.allCustomers.push(c)

        return c
    }

    depositMoney(id, a) {
        if (!this.customerExists(id)) {
            throw new Error(`We have no customer with this ID!`)
        }
        const customer = this.getCustomer(id)

        customer.totalMoney = (customer.totalMoney || 0) + Number(a)
        customer.transactions = customer.transactions || []

        customer.transactions.push(
            `${customer.firstName} ${customer.lastName} made deposit of ${a}$!`
        )

        return `${customer.totalMoney}$`
    }

    withdrawMoney(id, a) {
        if (!this.customerExists(id)) {
            throw new Error(`We have no customer with this ID!`)
        }
        const customer = this.getCustomer(id)

        customer.totalMoney = customer.totalMoney || 0

        if (customer.totalMoney - a < 0) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`)
        }

        customer.totalMoney -= a
        customer.transactions = customer.transactions || []

        customer.transactions.push(
            `${customer.firstName} ${customer.lastName} withdrew ${a}$!`
        )

        return `${customer.totalMoney}$`
    }

    customerInfo(id) {
            if (!this.customerExists(id)) {
                throw new Error(`We have no customer with this ID!`)
            }
            const customer = this.getCustomer(id)

            return `Bank name: ${this._bankName}
Customer name: ${customer.firstName} ${customer.lastName}
Customer ID: ${customer.personalId}
Total Money: ${customer.totalMoney}$
Transactions:
${customer.transactions
			.reverse()
			.map((x, i, arr) => `${arr.length - i}. ${x}`)
			.join('\n')}`
	}
}



let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));




// 100/100 
// class Bank {
//     constructor(bankName) {
//         this._bankName = bankName;
//         this.allCustomers = [];
//     }

//     newCustomer(customer) {
//         this.allCustomers.find((c) => {
//             if (c.personalId == customer.personalId) {
//                 throw new Error(
//                     `${customer.firstName} ${customer.lastName} is already our customer!`
//                 );
//             }
//         })
//         this.allCustomers.push(customer);
//         return customer
//     }

//     depositMoney(personalId, amount) {
//         let person = this.allCustomers.find((c) => c.personalId == personalId);
//         let indexOfPerson = this.allCustomers.indexOf(person);

//         if (indexOfPerson < 0) {
//             throw new Error(
//                 "We have no customer with this ID!");
//         }

//         if (this.allCustomers[indexOfPerson].hasOwnProperty('totalMoney')) {
//             this.allCustomers[indexOfPerson].totalMoney += amount;
//         } else {
//             this.allCustomers[indexOfPerson].totalMoney = amount;
//             this.allCustomers[indexOfPerson].transactionInfos = [];
//         }
//         let message = `${person.transactionInfos.length + 1}. ${person.firstName} ${person.lastName} made deposit of ${amount}$!`
//         this.allCustomers[indexOfPerson].transactionInfos.push(message);
//         return `${this.allCustomers[indexOfPerson].totalMoney}$`;
//     }

//     withdrawMoney(personalId, amount) {
//         let person = this.allCustomers.find((c) => c.personalId == personalId);
//         let indexOfPerson = this.allCustomers.indexOf(person);

//         if (indexOfPerson < 0) {
//             throw new Error(
//                 "We have no customer with this ID!");
//         }

//         if (person.hasOwnProperty('totalMoney') && person.totalMoney < amount) {
//             throw new Error(
//                 `${person.firstName} ${person.lastName} does not have enough money to withdraw that amount!`);
//         }

//         this.allCustomers[indexOfPerson].totalMoney -= amount;
//         let message = `${person.transactionInfos.length + 1}. ${person.firstName} ${person.lastName} withdrew ${amount}$!`;
//         this.allCustomers[indexOfPerson].transactionInfos.push(message);
//         return `${this.allCustomers[indexOfPerson].totalMoney}$`;
//     }

//     customerInfo(personalId) {
//         let person = this.allCustomers.find((c) => c.personalId == personalId);
//         let indexOfPerson = this.allCustomers.indexOf(person);
//         person.transactionInfos.reverse();
//         if (indexOfPerson < 0) {
//             throw new Error(
//                 "We have no customer with this ID!");
//         }
//         let result = [];

//         result.push(`Bank name: ${this._bankName}\nCustomer name: ${person.firstName} ${person.lastName}\nCustomer ID: ${person.personalId}\nTotal Money: ${person.totalMoney}$\nTransactions:\n${person.transactionInfos.join('\n')}`)

//         return result.join().trim();
//     }
// }

// 90/100
// class Bank {
//     _bankName
//     constructor(bankName) {
//         this._bankName = bankName;
//         this.allCustomers = [];
//     }
//     newCustomer(customer) {
//         this.allCustomers.some((cust) => {
//             if (cust.personalId == customer.personalId) {
//                 throw new Error(`${cust.firstName} ${cust.lastName} is already our customer!”`);
//             }
//         })
//         this.allCustomers.push(customer)
//         return customer
//     }
//     depositMoney(personalId, amount) {
//         for (let index = 0; index < this.allCustomers.length; index++) {
//             let person = this.allCustomers[index]
//             let ID = person.personalId
//             if (ID == personalId) {

//                 if (person.hasOwnProperty('totalMoney')) {
//                     person.totalMoney += Number(amount)

//                 } else {
//                     person.totalMoney = Number(amount)
//                     person.transactions = [];
//                 }
//                 person.transactions.push(`${person.transactions.length + 1}. ${person.firstName} ${person.lastName} made deposit of ${amount}$!`)
//                 return `${person.totalMoney}$`


//             }

//         }
//         throw new Error("We have no customer with this ID!")
//     }
//     withdrawMoney(personalId, amount) {
//         for (let index = 0; index < this.allCustomers.length; index++) {
//             let person = this.allCustomers[index]
//             let ID = person.personalId

//             if (ID == personalId) {
//                 if (person.totalMoney >= Number(amount)) {
//                     person.totalMoney -= amount;
//                     person.transactions.push(`${person.transactions.length + 1}. ${person.firstName} ${person.lastName} withdrew ${amount}$!`)
//                     return `${person.totalMoney}$`
//                 } else {
//                     return new Error(`${person.firstName} ${person.lastName} does not have enough money to withdraw that amount!`)
//                 }
//             }

//         }
//         throw new Error(`We have no customer with this ID!`)
//     }

//     customerInfo(personalId) {

//         for (let index = 0; index < this.allCustomers.length; index++) {
//             let person = this.allCustomers[index]
//             let ID = person.personalId
//             if (!ID == personalId) {
//                 throw new Error(`We have no customer with this ID!`)
//             } else {
//                 person.transactions.reverse();
//                 let result = `Bank name: ${this._bankName}\nCustomer name: ${person.firstName} ${person.lastName}\nCustomer ID: ${person.personalId}\nTotal Money: ${person.totalMoney}$\nTransactions:\n${person.transactions.join('\n')}`

//                 return result
//             }
//         }
//     }
// }