function loading() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var now = new Date()
    var hour = now.getHours()

    msg.innerHTML = `It's now ${hour} hours`

    if (hour >= 0 && hour < 12) {
        // Good Morning
        img.src = 'morning.png'
        document.body.style.background = 'burlywood'
    } else if (hora >= 12 && hora <= 18) {
        // Good Afternoon
        img.src = 'afternoon.png'
        document.body.style.background = 'green'
    } else {
        // Good Night
        img.src = 'night.png'
        document.body.style.background = 'grey'
    }
}