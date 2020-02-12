var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function (name) {
        return "" + name;
    };
    return Typescript;
}());
var Car = /** @class */ (function () {
    function Car(theModel) {
        this.numberOfWheels = 4; // транспилится в this.numberOfWheels = 4
        this.model = theModel; // readonly св-ва можно переписать, но только в конструкторе
    }
    return Car;
}());
/*
class Car {
  readonly numberOfWheels: number = 4

  constructor(readonly model: string) {} // короткая форма записи того, что выше. Создает поле readonly в классе
}
*/
// Модификаторы св-в
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = ''; // доступны в классе и в классах, которые наследуются
        this.color = 'black'; // по умолчанию, все св-ва public
    }
    Animal.prototype.go = function () {
        console.log('Go');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.SetVoice = function (voice) {
        this.voice = voice;
    };
    return Cat;
}(Animal));
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.render = function () {
        console.log('Component is rendering');
    };
    AppComponent.prototype.info = function () {
        return ('This is info');
    };
    return AppComponent;
}(Component));
