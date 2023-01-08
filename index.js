var t

function time() {
    t = new Date()

    var h, m, s
    h = t.getHours()
    m = t.getMinutes()
    s = t.getSeconds()

    if (h < 10) { h = '0' + h }
    if (m < 10) { m = '0' + m }
    if (s < 10) { s = '0' + s }

    const final_time = `${h}:${m}:${s}`

    document.querySelectorAll('.time_js').forEach((e) => {
        e.innerHTML = final_time
    })
    
    createCalendar()
}
time()
var intetvalTime = setInterval(time,500)

function createCalendar() {
    document.querySelector('.calendar_js').innerHTML = ``
    const weekDay = new Date(t.getFullYear(), t.getMonth(), 1).getDay()
    //! Tworzenie spacji
    for (let b = 0; b < 6-weekDay; b++) {
        const box = document.createElement('p')
        box.setAttribute('class','empty')
        document.querySelector('.calendar_js').appendChild(box)
    }
    //! Tworzenie dni
    for (let a = 1; a <= daysInMonth(t.getMonth(), t.getFullYear());  a++) {
        const box = document.createElement('p')
        box.setAttribute('class','day')
        if (t.getDate() == a) { box.classList.add('today')}
        box.innerHTML = a
        document.querySelector('.calendar_js').appendChild(box)
    }
}
createCalendar()
function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}
