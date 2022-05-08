radio.setGroup(15)
let canVote = true
radio.setTransmitSerialNumber(true)
basic.forever(function on_forever() {
    if (canVote) {
        if (input.buttonIsPressed(Button.A)) {
            radio.sendValue("answer", 0)
        }
        
        if (input.buttonIsPressed(Button.B)) {
            radio.sendValue("answer", 1)
        }
        
        if (input.pinIsPressed(TouchPin.P0)) {
            radio.sendValue("answer", 2)
        }
        
        if (input.pinIsPressed(TouchPin.P1)) {
            radio.sendValue("answer", 3)
        }
        
        if (input.pinIsPressed(TouchPin.P2)) {
            radio.sendValue("answer", 4)
        }
        
    }
    
})
// pokud je hlas serverem přijat, server pošle potvrzení a klient zobrazí znak YES
// klient také přijímá informaci zda je možno hlasovat, pokud není možno hlasovat tak zobrazí křížek
radio.onReceivedValue(function on_received_value(name: string, value: number) {
    let canVote: boolean;
    if (name == "confirm" && value == control.deviceSerialNumber()) {
        basic.showIcon(IconNames.Yes)
    } else if (name == "voting") {
        if (value == 0) {
            canVote = false
            basic.showIcon(IconNames.No, 1)
        } else if (value == 1) {
            canVote = true
            basic.clearScreen()
        }
        
    }
    
})
