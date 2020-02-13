const arrayOfNumbers: Array<number> = [7, 3, 3, 1] // указываем, что за объект и <из чего состоит>
const arrayOfStrings: Array<string> = ['retaaaaaard', 'Hello']

function reverse<T>(array: T[]): T[] { // ф-ия работает с типом <T>, принимает аргумент array, являющийся массивом типа T[] и возвращает массив типа T[]
  return array.reverse();
}

