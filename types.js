var str = "Hello";
var bool = true;
var integer = 228; // 22.8 тоже сработает, и даже 3e10
var numbers = [1, 3, 3, 7];
var numbers2 = [1, 4, 8, 8]; // другое объявление (generic)
// Tuple
var contact = ['Vasya', 322]; // транспилится в массив. Требует столько эл-ов, сколько объявлено
// Any
var variable = 32; // любой тип
variable = 'New String';
// Functions
function sayMyNumber(name) {
    return (Number(name));
}
;
function sayMyName(name) {
    console.log(name);
}
;
// Never
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) {
        console.log('Never stop!');
    }
}
var login = 'admin'; // использование
var id1 = 123;
var id2 = 'Дарова';
console.log(id1);
//компиляция - tsc *название файла*
