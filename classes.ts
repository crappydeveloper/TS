class Typescript {
  version: string // нужно определять тип св-в вне конструктора
  
  constructor(version: string) {
    this.version = version
  }
  
  info(name: string) {
    return `${name}`;
  }
}

class Car {
  readonly model: string
  readonly numberOfWheels: number = 4 // транспилится в this.numberOfWheels = 4
  
  constructor(theModel: string) {
    this.model = theModel // readonly св-ва можно переписать, но только в конструкторе
  }
}

/*
class Car {
  readonly numberOfWheels: number = 4

  constructor(readonly model: string) {} // короткая форма записи того, что выше. Создает поле readonly в классе
}
*/

// Модификаторы св-в

class Animal {
  protected voice: string = '' // доступны в классе и в классах, которые наследуются
  public color: string = 'black' // по умолчанию, все св-ва public
  
  private go() { // доступны только там, где объявленны
    console.log('Go')
  }
}

class Cat extends Animal {
  public SetVoice(voice: string): void {
    this.voice = voice
  }
}

abstract class Component {
  abstract render(): void
  abstract info(): string
}

class AppComponent extends Component {
  render(): void {
    console.log('Component is rendering')
  }
  
  info(): string {
    return('This is info')
  }
}