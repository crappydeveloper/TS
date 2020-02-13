interface Person {
  name: string
  age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age' // подойдет
// key = 'job' не получится

type User = {
  _id: number
  name: string
  email: string
  createdAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // все поля User кроме _id и createdAt. 'name' и 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // все 

let u1: UserKeysNoMeta1 = 'name' // ок
// u1 = '_id' не получится