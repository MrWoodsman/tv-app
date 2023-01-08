var data = [`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
</head>
<body>
    <div class="custom_box_1">
        <h1 class="date_js"></h1>
        <h1 class="time_js">00:00:00</h1>
        <!-- <div class="calendar_js"></div> -->
    </div>

    <div class="weather_box">
        <div class="coldown_animate" style="--coldown_num: 5s"><div class="dot"></div><i class="bi bi-clock"></i></div>
        <h1 class="loaction_js"></h1>
        <h1 class="description_js"></h1>
        <h1 class="temperature_js"></h1>
    </div>

    <button id="test_btn" onclick="document.querySelector('#test_btn').innerText = Math.round(Math.random(0,10)*10)">KLIKNIJ MNIE</button>
</body>
    <script src="index.js"></script>
</html>
`]
