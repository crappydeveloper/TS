interface Rect {
    readonly id: string // readonly - модификатор "только для чтения"
    color?: string // ? - модификатор "необязательный параметр"
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '14',
    size: { 
        width: 20,
        height: 30
    },
    color: 'red'
}

const rect2: Rect = {
    id: '15',
    size: { 
        width: 10,
        height: 20
    }
}

rect2.color = 'black';

const rect3 = {} as Rect // будет впоследствии проверять на соответствие типам, объявленным в Rect
// const rect3 = <Rect>{} - альтернативный/старый вариант

// Наследование интерфейсов

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect4: RectWithArea = {
    id: '123',
    size: {
        width: 20,
        height: 28
    },
    getArea(): number { // здесь тоже нужно определять тип возвращаемого значения
        return this.size.width * this.size.height;
    }
}

// Наследование классов от интерфейсов

interface IClock {
    time: Date
    setTime: (date: Date) => void
}

class Clock implements IClock { // взаимодействие с class
    time: Date = new Date() // в классе нужно дополнительное определение типов
    setTime(date: Date): void {
        this.time = date
    }
}

// Определение типов ключей

interface IStyles {
    [key: string]: string // [key:string] - все ключи с типом string
}

const css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}

console.log(rect4.getArea());