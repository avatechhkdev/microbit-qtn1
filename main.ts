function initAll () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    running = 0
    list = [
    1,
    2,
    3,
    4,
    5,
    6
    ]
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    running = 1
})
let r = 0
let list: number[] = []
let running = 0
initAll()
basic.forever(function () {
    if (running == 1) {
        basic.showNumber(list.length)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
loops.everyInterval(randint(2000, 4000), function () {
    if (running == 1) {
        if (list.length == 0) {
            initAll()
        } else {
            r = list.removeAt(randint(0, list.length - 1))
            if (r == 1) {
                pins.digitalWritePin(DigitalPin.P1, 0)
            } else if (r == 2) {
                pins.digitalWritePin(DigitalPin.P2, 0)
            } else if (r == 3) {
                pins.digitalWritePin(DigitalPin.P12, 0)
            } else if (r == 4) {
                pins.digitalWritePin(DigitalPin.P13, 0)
            } else if (r == 5) {
                pins.digitalWritePin(DigitalPin.P14, 0)
            } else {
                pins.digitalWritePin(DigitalPin.P15, 0)
            }
        }
    }
})
