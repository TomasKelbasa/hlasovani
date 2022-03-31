radio.setGroup(15)
basic.forever(function on_forever() {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendValue("answer", 65)
    }
    
    if (input.buttonIsPressed(Button.B)) {
        radio.sendValue("answer", 66)
    }
    
    if (input.pinIsPressed(TouchPin.P0)) {
        radio.sendValue("answer", 67)
    }
    
    if (input.pinIsPressed(TouchPin.P1)) {
        radio.sendValue("answer", 68)
    }
    
    if (input.pinIsPressed(TouchPin.P2)) {
        radio.sendValue("answer", 69)
    }
    
})
