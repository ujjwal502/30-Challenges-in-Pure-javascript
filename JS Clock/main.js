const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
    // console.log('clock hand');
    const time = new Date()
    const seconds = time.getSeconds()//getting the actual earth time seconds
    // console.log(seconds);
    const secAngle = ((seconds / 60) * 360) + 90//determing the angle by which the second hand will move
    secondHand.style.transform = `rotate(${secAngle}deg)`
    // console.log(secAngle);
    const minutes = time.getMinutes()//getting the actual earth minutes
    // console.log(minutes)
    const minAngle = ((minutes / 60) * 360) + 90//determining the minute hand angle
    minuteHand.style.transform = `rotate(${minAngle}deg)`
    // console.log(minAngle);
    const hours = time.getHours()//getting the actual earth hours
    // console.log(minutes)
    const hourAngle = ((hours / 60) * 360) + 90//determining the hour hand angle
    hourHand.style.transform = `rotate(${hourAngle}deg)`
    // console.log(hourAngle);
}

setInterval(setDate, 1000)//at the interval of 1 sec,function is invoked
