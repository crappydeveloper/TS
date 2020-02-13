function strip(x: string | number) {
  if (typeof x === 'number') {
    return x.toFixed(2)
  }
  return x.trim()
}

class MyResponse {
  header = 'response header'
  result = 'response result'
}

class MyError {
  header = 'error header'
  message = 'error result'
}

function handle(res: MyResponse | MyError) { // guards - защита от параметров-объектов !instanceof объявленных классов
  if (res instanceof MyResponse) {
    return {
      info: res.header + res.result
    }
  } else {
    return {
      info: res.header + res.message
    }
  }
}

type AlertType = 'success' | 'danger' | 'warning' | number

function setAlertType(type: AlertType) { // будет принимать только значения из AleryType
  console.log(type);
}