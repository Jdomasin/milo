input.onButtonPressed(Button.A, function () {
    servos.P0.run(50)
    basic.pause(5000)
    servos.P0.stop()
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
    music.setVolume(16)
})
input.onPinPressed(TouchPin.P1, function () {
    strip.showRainbow(1, 360)
    strip.show()
    basic.pause(5000)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
    basic.showString("MEOW")
    basic.clearScreen()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P2, 18, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
