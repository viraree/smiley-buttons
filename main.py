def f():
    x=2
    basic.show_icon(IconNames.HEART)
    return x**2

def b():
    basic.show_number(4)
    basic.show_leds("""
    . . . . .
    . # . . .
    . . # . .
    . . . . .
    # . . . .
    """)
    return 1

input.on_button_pressed(Button.A,f)
input.on_button_pressed(Button.B,b)

