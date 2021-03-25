
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
let empDailyWageArr = new Array();
let empHrs;
function getWorkingHours(empCheck){
    switch (empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

function calculatingDailyWage(){
    return empHrs * WAGE_PER_HOUR;
}
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calculatingDailyWage(empHrs));
}

let empWage = calculatingDailyWage(totalEmpHrs);
console.log("Total Days: "+ totalWorkingDays +", Total Employee Hours: "+ totalEmpHrs +", Total Employee Wage : " + empWage);

//Array Helper Functions
//Calculating total wage using array forEach transversal or reduce method
let totEmpWage = 0;
function sum(dailyWage){
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days: " + totalWorkingDays +
            " Total Hours: " + totalEmpHrs + " Employee Wage: " + totEmpWage);

function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}
console.log("UC7A - Employee wage with reduce: "+empDailyWageArr.reduce(totalWages, 0));

//UC 7B - Show the day along with daily wage using array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC 7B - Daily Wage Map");
console.log(mapDayWithWageArr);

//UC 7C - Show Days when full time wage of 160 were earned
function fulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC 7C - Daily wage filter when fulltime wage earned");
console.log(fullDayWageArr);

//UC 7D - Find the first occurence when full time wage was earned using find function
function findFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC 7D - First time Fulltime wage was earned on day: "+
            mapDayWithWageArr.find(findFulltimeWage));