'use strict';

const money = +prompt('Ваш месячный доход?', 150000);

const  income = 'Фриланс';

const  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses.length);

const deposit = confirm('Есть ли у вас депозит в банке?');

const mission = 500000;
const period = 6;

const showTypeof = function(data){
    console.log(data, typeof(data));
};
showTypeof(money);
showTypeof(income);
showTypeof(deposit);

console.log('Период равен '  + period + ' месяцев ' + 'Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase().split(', '));

const expenses1 = prompt('Введите обязательную статью расходов?');
const amount1 = +prompt('Во сколько это обойдется?', 40000);
const expenses2 = prompt('Введите обязательную статью расходов?');
const amount2 = +prompt('Во сколько это обойдется?', 20000);

const getExpensesMonth = function (){
    return amount1 + amount2;
};

const budgetMonth = getExpensesMonth();
console.log('Сумма всех обязательных расходов за месяц =', budgetMonth);

const getAccumulatedMonth = function (){
    return money - budgetMonth;
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

const getCondition = function (){
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
console.log(getCondition());