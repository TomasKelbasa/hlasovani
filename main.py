radio.set_group(15)
canVote = True
radio.set_transmit_serial_number(True)

def on_forever():
    if canVote:
        if input.button_is_pressed(Button.A):
            radio.send_value("answer", 0)
        if input.button_is_pressed(Button.B):
            radio.send_value("answer", 1)
        if input.pin_is_pressed(TouchPin.P0):
            radio.send_value("answer", 2)
        if input.pin_is_pressed(TouchPin.P1):
            radio.send_value("answer", 3)
        if input.pin_is_pressed(TouchPin.P2):
            radio.send_value("answer", 4)
basic.forever(on_forever)

#pokud je hlas serverem přijat, server pošle potvrzení a klient zobrazí znak YES
#klient také přijímá informaci zda je možno hlasovat, pokud není možno hlasovat tak zobrazí křížek
def on_received_value(name, value):
    if name == "confirm" and value == control.device_serial_number():
        basic.show_icon(IconNames.YES)
    elif name == "voting":
        if value == 0:
            canVote = False
            basic.show_icon(IconNames.NO, 1)
        elif value == 1:
            canVote = True
            basic.clear_screen()
radio.on_received_value(on_received_value)