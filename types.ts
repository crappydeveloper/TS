const str: string = `Hello`;
const bool: boolean = true;
const integer: number = 228; // 22.8 тоже сработает, и даже 3e10

const numbers: number[] = [1, 3, 3, 7];
const numbers2: Array<number> = [1, 4, 8, 8]; // другое объявление (generic)

// Tuple

const contact: [string, number] = ['Vasya', 322]; // транспилится в массив. Требует столько эл-ов, сколько объявлено

// Any

let variable: any = 32; // любой тип
variable = 'New String';

// Functions

function sayMyNumber(name: string): number {
    return(Number(name));
};

function sayMyName(name: string): void { // void - отсутствие return'а
    console.log(name);
};

// Never

function throwError(message: string): never { // never - ф-ия падает или не заканчивает выполнение
    throw new Error(message);
}

function infinite(): never { 
    while (true) {
        console.log('Never stop!')
    }
}

// Types

type Login = string; // Login - элиас для string
const login: Login = 'admin'; // использование

type ID = string | number;
type AlertTypes = 'success' | 'danger' | 'warning' // можно определять не типы, а конкретные значения
type KEK = string | 'whow'; // и так тоже можно

// компиляция - tsc *название файла*