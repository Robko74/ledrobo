input.onButtonPressed(Button.A, function () {
    strip.showRainbow(1, 360)
    strip.setBrightness(100)
    strip.show()
    kitronik_servo_lite.setDistancePerSecond(5)
    kitronik_servo_lite.driveBackwards(10)
    kitronik_servo_lite.driveForwards(10)
    strip.clear()
    strip.show()
})
input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Chessboard)
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    basic.pause(5000)
    strip.clear()
    strip.show()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    strip.showRainbow(1, 360)
    basic.showIcon(IconNames.Heart)
    basic.pause(5000)
    strip.clear()
    strip.show()
    basic.clearScreen()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.showString("Hello!")
for (let index = 0; index < 4; index++) {
    strip.setBrightness(50)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    music.playTone(370, music.beat(BeatFraction.Half))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(500)
}
strip.clear()
strip.show()
