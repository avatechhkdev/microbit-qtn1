function initAll () {
    b1 = 0
    b2 = 0
    b3 = 0
    b4 = 0
    b5 = 0
    b6 = 0
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
let b6 = 0
let b5 = 0
let b4 = 0
let b3 = 0
let b2 = 0
let b1 = 0
initAll()
basic.forever(function () {
    if (running == 1) {
        basic.showNumber(list.length)
    } else {
        basic.showIcon(IconNames.Happy)
    }
    if (b1 == 0) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    if (b2 == 0) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    if (b3 == 0) {
        pins.digitalWritePin(DigitalPin.P12, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P12, 0)
    }
    if (b4 == 0) {
        pins.digitalWritePin(DigitalPin.P13, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P13, 0)
    }
    if (b5 == 0) {
        pins.digitalWritePin(DigitalPin.P14, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P14, 0)
    }
    if (b6 == 0) {
        pins.digitalWritePin(DigitalPin.P15, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P15, 0)
    }
})
loops.everyInterval(randint(2000, 4000), function () {
    if (running == 1) {
        if (list.length == 0) {
            initAll()
        } else {
            r = list.removeAt(randint(0, list.length - 1))
            if (r == 1) {
                b1 = 1
            } else if (r == 2) {
                b2 = 1
            } else if (r == 3) {
                b3 = 1
            } else if (r == 4) {
                b4 = 1
            } else if (r == 5) {
                b5 = 1
            } else {
                b6 = 1
            }
        }
    }
})
