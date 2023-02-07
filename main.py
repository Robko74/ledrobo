def on_button_pressed_a():
    kitronik_servo_lite.set_distance_per_second(5)
    kitronik_servo_lite.drive_backwards(10)
    kitronik_servo_lite.drive_forwards(10)
input.on_button_pressed(Button.A, on_button_pressed_a)

strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
for index in range(4):
    strip.set_brightness(50)
    strip.show_color(neopixel.colors(NeoPixelColors.RED))
    music.play_tone(370, music.beat(BeatFraction.HALF))
    basic.pause(500)
    strip.show_color(neopixel.colors(NeoPixelColors.BLUE))
    basic.pause(500)
strip.clear()
strip.show()