radio.onReceivedValue(function (name, value) {
    if (name == "fake" && value == 1) {
        basic.pause(5000)
        basic.showString("Task faked!")
    } else if (name == "real" && value >= 2) {
        basic.pause(5000)
        basic.showString("Task finished!")
    }
})
radio.setGroup(7)
basic.forever(function () {
    basic.showString("TASKS!")
})
