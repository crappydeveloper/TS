function add(a: number, b: number): number {
  return a + b;
}

function toUpperCase(str: string): string {
  return str.trim().toUpperCase();
}

interface MyPosition {
  x: number | undefined
  y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
  default: string
}

// Перегрузка

function position(): MyPosition // ф-ия возвращает объект, который реализует интерфейс MyPosition
function position(a: number): MyPositionWithDefault // если ф-ия принимает 1 параметр, то возвращает объект, который реализует интерфейс MyPositionWithDefault
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number) {
  if (!a && !b) {
    return {
      x: undefined,
      y: undefined
    }
  }
  
  if (a && !b) {
    return {
      x: undefined,
      y: undefined,
      default: a.toString()
    }
  }

  return {
    x: a,
    y: b
  }
}

console.log('Empty: ', position());
console.log('1 param: ', position(42));
console.log('2 params: ', position(42, 12));