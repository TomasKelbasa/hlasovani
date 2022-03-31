radio.set_group(15)

def on_forever():
    if input.button_is_pressed(Button.A):
        radio.send_value("answer", 65)
    if input.button_is_pressed(Button.B):
        radio.send_value("answer", 66)
    if input.pin_is_pressed(TouchPin.P0):
        radio.send_value("answer", 67)
    if input.pin_is_pressed(TouchPin.P1):
        radio.send_value("answer", 68)
    if input.pin_is_pressed(TouchPin.P2):
        radio.send_value("answer", 69)
basic.forever(on_forever)

