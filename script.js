'use strict';

const isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};

const money = +prompt('Ваш месячный доход?', 150000);

const  income = 'Фриланс';

const  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses.length);

const deposit = confirm('Есть ли у вас депозит в банке?');

const mission = 500000;
const period = 6;

const start = function(){
    money = prompt('Ваш месячный доход?', 150000);
    do{
        money = prompt('Ваш месячный доход?', 150000);
    }
    while (!isNumber(money))
};

const showTypeof = function(item){
    console.log(typeof item);
};
showTypeof(money);
showTypeof(income);
showTypeof(deposit);

console.log('Период равен '  + period + ' месяцев ' + 'Цель заработать ' + mission + ' рублей');

const getAddExpenses = function(){
    return addExpenses.toLowerCase().split(', ');
};

const adddExpenses = getAddExpenses();
console.log(adddExpenses);

let expenses1, expenses2;

let getExpensesMonth = function(){
    let sum = 0;

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            expenses1 = prompt('Введите обязательную статью расходов?', "Продукты");
        } else if (i === 1) {
            expenses2 = prompt('Введите обязательную статью расходов?', "Квартплата");
        }

        sum += +prompt('Во сколько это обойдется?', 30000);
    }
    console.log(sum);
    return sum;
};

let expensesAmount = getExpensesMonth();
console.log('Сумма всех обязательных расходов за месяц= ' + expensesAmount);

/*const expenses1 = prompt('Введите обязательную статью расходов?');
const amount1 = +prompt('Во сколько это обойдется?', 40000);
const expenses2 = prompt('Введите обязательную статью расходов?');
const amount2 = +prompt('Во сколько это обойдется?', 20000);*/

/*const getExpensesMonth = function (){
    return amount1 + amount2;
};

const expensesMonth = getExpensesMonth();
console.log('Сумма всех обязательных расходов за месяц =', expensesMonth);*/

const getAccumulatedMonth = function (){
    return money - expensesAmount;
};

const accumulatedMonth = getAccumulatedMonth();
console.log('Бюджет на месяц =', accumulatedMonth);

const getTargetMonth = function (){
    return mission / accumulatedMonth;
};

const purpose = getTargetMonth();
console.log('Цель будет достигнута за ' + Math.ceil (purpose)  + ' месяцев');

const getBudgetDay = function (){
    return accumulatedMonth / 30;
};

const budgetDay = getBudgetDay();
console.log('Бюджет на день =', Math.floor (budgetDay));

const getStatusIncome = function (){
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
console.log(getStatusIncome());