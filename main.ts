radio.onReceivedValue(function (name, value) {
    if (input.buttonIsPressed(Button.AB) && (name == "fake" && value == 1)) {
        basic.pause(5000)
        basic.showString("Task faked!")
    } else if (name == "real" && value >= 2 && input.buttonIsPressed(Button.AB)) {
        basic.pause(5000)
        basic.showString("Task finished!")
    }
})
radio.setGroup(7)
basic.forever(function () {
    basic.showString("TASKS!")
})
