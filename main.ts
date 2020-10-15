input.onPinPressed(TouchPin.P0, function () {
    y = 0
    x = 4
    for (let index = 0; index < 5; index++) {
        led.plot(x, y)
        x += -1
        basic.pause(200)
        y += 1
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    counter = 5
    while (counter >= 0) {
        basic.showNumber(counter)
        x += -1
    }
    music.playMelody("C5 A C E G D B F ", 161)
})
input.onPinPressed(TouchPin.P1, function () {
    while (input.lightLevel() < 128) {
        basic.showIcon(IconNames.Sad)
        music.playTone(147, music.beat(BeatFraction.Double))
    }
    while (input.lightLevel() >= 128) {
        basic.showIcon(IconNames.Happy)
        music.playTone(294, music.beat(BeatFraction.Double))
    }
})
let counter = 0
let x = 0
let y = 0
let sprite = game.createSprite(1, 3)
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        sprite.move(2)
        basic.pause(100)
        sprite.turn(Direction.Right, 90)
        basic.pause(100)
    }
})
