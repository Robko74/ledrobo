input.onButtonPressed(Button.A, function () {
    kitronik_servo_lite.setDistancePerSecond(5)
    kitronik_servo_lite.driveBackwards(10)
    kitronik_servo_lite.driveForwards(10)
})
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
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
