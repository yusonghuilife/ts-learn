interface IPerson {
  readonly id: number
  name: string
  age?: number
}
let viking: IPerson = {
  id: 1234,
  name: "viking",
}

interface Radio {
  switchRadio(): void
}

interface Battery {
  checkBatteryStatus()
}
interface RadioWithBattery extends Radio {
  checkBatteryStatus()
}
class Car implements Radio {
  switchRadio() {}
}

// 第一种可以使用多接口
class Cellphone implements Radio, Battery {
  switchRadio() {}
  checkBatteryStatus() {}
}

// 第二种可以抽象出一个多implement的新接口
class Cellphone1 implements RadioWithBattery {
  switchRadio() {}
  checkBatteryStatus() {}
}
