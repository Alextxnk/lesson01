'use strict';
const money = prompt('Ваш месячный доход?', 150000);
console.log(typeof money);
const  income = '15000';
console.log(typeof income);
const  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses.length);
const deposit = confirm('Есть ли у вас депозит в банке?');
 console.log(typeof deposit);
const mission = 500000;
const period = 6;
console.log('Период равен '  + period + ' месяцев ' + 'Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase().split(', '));
const expenses1 = prompt('Введите обязательную статью расходов?');
const amount1 = +prompt('Во сколько это обойдется?', 40000);
const expenses2 = prompt('Введите обязательную статью расходов?');
const amount2 = +prompt('Во сколько это обойдется?', 20000);
const budgetMonth = money - (amount1 + amount2);
console.log('Бюджет на месяц =', budgetMonth);
const purpose = mission / budgetMonth;
console.log('Цель будет достигнута за ' + Math.ceil (purpose)  + ' месяцев');
const budgetDay = budgetMonth / 30;
console.log('Бюджет на день =',  (budgetDay));
if (budgetDay >= 1200) {
    console.log('У вас высокий уровень дохода');
} else if (600 <= budgetDay >= 1200) {
    console.log('У вас средний уровень дохода');
} else if (0 <= budgetDay <= 600) {
    console.log('К сожалению, у вас уровень дохода ниже среднего');
} else {
    console.log('Что-то пошло не так');
} 