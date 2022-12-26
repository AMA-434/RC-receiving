radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        cuteBot.stopcar()
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "double") {
        cuteBot.motors(value, value)
    } else if (name == "right") {
        cuteBot.motors(0, value)
    } else if (name == "left") {
        cuteBot.motors(value, 0)
    } else {
    	
    }
})
radio.setGroup(7)
cuteBot.stopcar()
basic.forever(function () {
	
})
