input.onButtonPressed(Button.A, function () {
    isLogging = !(isLogging)
    if (true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . #
            . . . . .
            . . . . .
            `)
    }
})
control.onEvent(EventBusSource.MICROBIT_ID_ACCELEROMETER, EventBusValue.MICROBIT_ACCELEROMETER_EVT_DATA_UPDATE, function () {
    if (isLogging && asFastAsPossible) {
        serial.writeLine("" + convertToText(control.millis()) + "," + convertToText(input.magneticForce(Dimension.X)) + "," + convertToText(input.magneticForce(Dimension.Y)) + "," + convertToText(input.magneticForce(Dimension.Z)))
    }
})
let asFastAsPossible = false
let isLogging = false
basic.showLeds(`
    . . . . .
    . # . # .
    # . . . #
    # . . . #
    # # # # #
    `)
isLogging = false
asFastAsPossible = false
basic.forever(function () {
    if (isLogging && !(asFastAsPossible)) {
        serial.writeLine("" + convertToText(control.millis()) + "," + convertToText(input.magneticForce(Dimension.X)) + "," + convertToText(input.magneticForce(Dimension.Y)) + "," + convertToText(input.magneticForce(Dimension.Z)))
    }
    basic.pause(50)
})
