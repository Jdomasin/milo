input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.setVolume(45)
    music.playMelody("G B A G C5 B A B ", 120)
})
let strip = neopixel.create(DigitalPin.P0, 17, NeoPixelMode.RGBW)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
pins.touchSetMode(TouchTarget.LOGO, TouchTargetMode.Capacitive)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
        basic.showString("Hi Im Milo")
        basic.clearScreen()
    } else if (input.buttonIsPressed(Button.B)) {
        servos.P1.run(50)
        basic.pause(5000)
        servos.P1.stop()
    } else if (input.pinIsPressed(TouchPin.P2)) {
        strip.showRainbow(1, 360)
        strip.show()
        basic.pause(5000)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        serial.writeLine("btn1 pressed")
    }
})
