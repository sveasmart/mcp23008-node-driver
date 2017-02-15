const adafruit = require("../index")
const display = new adafruit.DisplayDriver()

var counter = 1

var active = false


setInterval(function() {
  if (active) {
    display.text("B " + counter)
    counter = counter + 1
  }
}, 1000)


const ButtonDriver = adafruit.ButtonDriver

const busNumber = 1
const address = 0x20

const buttonDriver = new ButtonDriver(busNumber, address)
buttonDriver.watchAllButtons(function(buttonPin) {
  if (buttonPin == 1) {
    console.log("B clicked")
    active = true
  } else {
    active = false
  }
})
