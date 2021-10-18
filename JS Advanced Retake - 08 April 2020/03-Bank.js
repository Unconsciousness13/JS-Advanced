class Bank {
    _bankName
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }
    newCustomer(customer) {
        this.allCustomers.find((cust) => {
            if (cust.personalId == customer.personalId) {
                throw new Error(`${cust.firstName} ${cust.lastName} is already our customer!”`);
            }
        })
        this.allCustomers.push(customer)
        return customer
    }
    depositMoney(personalId, amount) {
        for (let index = 0; index < this.allCustomers.length; index++) {
            let person = this.allCustomers[index]
            let ID = person.personalId
            if (ID == personalId) {

                if (person.hasOwnProperty('totalMoney')) {
                    person.totalMoney += Number(amount)

                } else {
                    person.totalMoney = Number(amount)
                    person.transactions = [];
                }
                person.transactions.push(`${person.transactions.length + 1}. ${person.firstName} ${person.lastName} made deposit of ${amount}$!`)
                return `${person.totalMoney}$`


            }
        }
        throw new Error("We have no customer with this ID!")
    }
    withdrawMoney(personalId, amount) {
        for (let index = 0; index < this.allCustomers.length; index++) {
            let person = this.allCustomers[index]
            let ID = person.personalId
            if (ID == personalId) {
                if (person.totalMoney >= Number(amount)) {
                    person.totalMoney -= amount;
                    person.transactions.push(`${person.transactions.length + 1}. ${person.firstName} ${person.lastName} withdrew ${amount}$!`)
                    return `${person.totalMoney}$`
                } else {
                    return new Error(`${person.firstName} ${person.lastName} does not have enough money to withdraw that amount!`)
                }
            }

        }
        throw new Error(`We have no customer with this ID!`)
    }

    customerInfo(personalId) {

        for (let index = 0; index < this.allCustomers.length; index++) {
            let person = this.allCustomers[index]
            let ID = person.personalId
            if (!ID == personalId) {
                throw new Error(`We have no customer with this ID!`)
            } else {
                person.transactions.reverse()
                let result = `Bank name: ${this._bankName}\nCustomer name: ${person.firstName} ${person.lastName}\nCustomer ID: ${person.personalId}\nTotal Money: ${person.totalMoney}$\nTransactions:\n${person.transactions.join('\n')}`

                return result

            }
        }
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