setInterval(MyTime, 1000)

function MyTime() {
    const now = new Date();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    if (month < 10) {
        month = "0" + now.getMonth()
    }
    if (day < 10) {
        day = "0" + now.getDate()
    }
    if (hours < 10) {
        hours = "0" + now.getHours()
    }
    if (minutes < 10) {
        minutes = "0" + now.getMinutes()
    }
    if (seconds < 10) {
        seconds = "0" + now.getSeconds()
    }


    document.getElementById("date").innerHTML = now.getFullYear() + "-" + month + "-" + day
    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds
}