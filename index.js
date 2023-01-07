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
}
time()
var intetvalTime = setInterval(time,500)
