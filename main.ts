radio.onReceivedValue(function (name, value) {
    if (name == "real" && value >= 2) {
        basic.pause(5000)
        basic.showString("Done!")
    } else if (name == "fake" && value == 1) {
        basic.pause(5000)
        basic.showString("Done.")
    }
})
radio.setGroup(7)
basic.forever(function () {
    basic.showString("TASK!")
})
