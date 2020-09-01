'use strict';

const isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let money;

const start = function(){
    do{
        money = prompt('Ваш месячный доход?', 150000);
    }
    while (!isNumber(money))
};
start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 500000,
    period: 6,
    asking: function(){
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        let amount, sum;
        for (let i = 0; i < 2; i++) {
            amount = prompt('Введите обязательную статью расходов?', "Продукты");
            do{
                sum = +prompt('Во сколько это обойдется?', 30000);
                }
                while (!isNumber(sum))
                appData.expenses[amount] = Number(sum);
        } 
        console.log(); 
    },
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    accumulatedMonth: 0
};
appData.asking();



console.log(appData.addExpenses.length);

console.log('Период равен '  + appData.period + ' месяцев ' + 'Цель заработать ' + appData.mission + ' рублей');

let expenses1, expenses2;

appData.getExpensesMonth = function(){
    let sum = 0;
    let amount = 0;
    for (let i = 0; i < 2; i++) {
        
        if (i === 0) {
            expenses1 = prompt('Введите обязательную статью расходов?', "Продукты");
        } else if (i === 1) {
            expenses2 = prompt('Введите обязательную статью расходов?', "Квартплата");
        }
        do{
        sum = +prompt('Во сколько это обойдется?', 30000);
        }
        while (!isNumber(sum))
        amount += sum;
    }
    console.log(amount);
    return amount;
};

appData.expensesMonth = appData.getExpensesMonth();
console.log('Сумма всех обязательных расходов за месяц= ' + appData.expensesMonth);

appData.getAccumulatedMonth = function (){
    return money - appData.expensesMonth;
};

appData.accumulatedMonth = appData.getAccumulatedMonth();
console.log('Бюджет на месяц =', appData.accumulatedMonth);

appData.getTargetMonth = function (){
    return appData.mission / appData.accumulatedMonth; 
};

appData.budgetMonth = appData.getTargetMonth();

if (appData.budgetMonth < 0) {
    console.log('Цель не будет достигнута');
} else if (0 < appData.budgetMonth) {
    console.log('Цель будет достигнута за ' + Math.ceil (appData.budgetMonth)  + ' месяцев');
}

const getBudgetDay = function (){
    return appData.accumulatedMonth / 30;
};

const budgetDay = getBudgetDay();
console.log('Бюджет на день =', Math.floor (budgetDay));

appData.getStatusIncome = function (){
if (1200 < budgetDay) {
    return ('У вас высокий уровень дохода');
} else if (600 < budgetDay && budgetDay <= 1200) {
    return ('У вас средний уровень дохода');
} else if (0 <= budgetDay && budgetDay <= 600) {
    return ('К сожалению, у вас уровень дохода ниже среднего');
} else {
    return ('Что-то пошло не так');
} 
};
console.log(appData.getStatusIncome());