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
    
    //!
    var daysName = ['niedziela','poniedziałek','wtorek','środa','czwartek','piątek','sobota']
    var monthName = ['styczeń','luty','marzec','kwiecień','maj','czerwiec','lipiec','sierpień','wrzesień','październik','listopad','grudzień']
    var final_date = `${daysName[t.getDay()]}, ${t.getDate()} ${monthName[t.getMonth()]} ${t.getFullYear()}`

    document.querySelectorAll('.date_js').forEach((e) => {
        e.innerHTML = final_date
    })

    createCalendar()
}
time()
var intetvalTime = setInterval(time,500)

function createCalendar() {
    try {
        console.warn();
        document.querySelector('.calendar_js').innerHTML = ``
        const weekDay = new Date(t.getFullYear(), t.getMonth(), 1).getDay()
        //! Tworzenie spacji
        const lastDay = daysInMonth(t.getMonth()-1, t.getFullYear());
        for (let b = 0; b < lastDay; b++) {
            const box = document.createElement('p')
            box.innerHTML = b
            box.setAttribute('class','day empty')
            if ( b > lastDay - 7 + weekDay) {
                document.querySelector('.calendar_js').appendChild(box)
            }
        }
        //! Tworzenie dni
        const lastActuaal = daysInMonth(t.getMonth(), t.getFullYear())
        for (let a = 1; a <= lastActuaal.getDate();  a++) {
            const box = document.createElement('p')
            box.setAttribute('class','day')
            if (t.getDate() == a) { box.classList.add('today')}
            box.innerHTML = a
            document.querySelector('.calendar_js').appendChild(box)
        }
        console.warn(lastActuaal);
        for (let c = 0; c < 7 - lastActuaal.getDay(); c++) {
            const box = document.createElement('p')
            box.innerHTML = c
            box.setAttribute('class','day empty')
            document.querySelector('.calendar_js').appendChild(box)
        }
    } catch (error) {
        
    }
}
createCalendar()
function daysInMonth (month, year) {
    if (month == -1) {
        return new Date(year-1, 12, 0).getDate();
    } else {
        return new Date(year, month+1, 0);
    }
}
