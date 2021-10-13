function solve() {
    const juniorTasks = [
        ' is working on a simple task.'
    ]
    const seniorTasks = [
        ' is working on a complicated task.',
        ' is taking time off work.',
        ' is supervising junior workers.'
    ];
    const managerTasks = [
        ' scheduled a meeting.',
        ' is preparing a quarterly report.'
    ];

    class Employee {
        constructor(name, age) {
            if (new.target === Employee) {
                throw new Error('Canot instantiate correctly.')
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }
        work() {
            let currTask = this.tasks.shift();
            console.log(this.name + currTask);
            this.tasks.push(currTask);
        }
        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`);
        }
        getSalary() {
            return this.salary;
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age)
            this.tasks = juniorTasks;
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age)
            this.tasks = seniorTasks;
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age)
            this.tasks = managerTasks;
            this.dividend = 0;
        }
        getSalary() {
            return this.salary + this.dividend;
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}