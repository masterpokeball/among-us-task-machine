radio.onReceivedValue(function (name, value) {
    if (input.buttonIsPressed(Button.AB) && (name == "fake" && value == 1)) {
        basic.pause(4000)
        basic.showString("Task faked!")
    } else if (input.buttonIsPressed(Button.AB) && (name == "real" && value >= 2)) {
        basic.pause(4000)
        basic.showString("Task finished!")
    }
})
radio.setGroup(7)
basic.forever(function () {
    basic.showString("TASKS!")
})
