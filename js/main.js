"use strict";

$(".menu-burger").on("click", function() {
    if ($(".menu").hasClass("active")) {
        $("body").removeClass("overflow");
        $(".menu").removeClass("active");
        $(this).siblings(".menu").slideUp(600);
    } else {
        $("body").addClass("overflow");
        $(".menu").addClass("active");
        $(this).siblings(".menu").slideDown(600);
    }
})

document.querySelector(".fixed-block__close").addEventListener("click", function() {
    const block = document.querySelector(".fixed-block");
    const footer = document.querySelector(".footer");

    block.style.display = "none";
    footer.style.padding = "50px 0"
});

$(".phone").mask("+7(999)999-9999");

function sendEmail() {
    Email.send({
            Host: "https://www.qazaqrecycling.com/",
            Username: "sender@email_address.com",
            Password: "Enter your password",
            To: 'zamanbek_m98@mail.ru',
            From: "sender@email_address.com",
            Subject: "Sending Email using javascript",
            Body: "Well that was easy!!",
            Attachments: [{
                name: "File_Name_with_Extension",
                path: "Full Path of the file"
            }]
        })
        .then(function(message) {
            alert("Спасибо за обращение, наш менеджер свяжется с Вами в ближайшее время")
        });
}

setTimeout(() => {
    // дата завершения таймера 
    const endTimeLotomania = 'Jun 24 2023, 10:00 GMT+0600';

    // приводим к стандартному виду 03:04:05, вместо 3:4:5
    function makeCorrectDate(uncorrectDate) {
        let correctDate = uncorrectDate;
        if (uncorrectDate < 10) {
            correctDate = '0' + uncorrectDate;
        }
        return correctDate;
    }

    // сколько времени осталось
    function getDateRemaining(timesup) {
        // total = оставшееся вермя
        var total = Date.parse(timesup) - Date.now();
        var minutes = Math.floor((total / 1000 / 60) % 60);
        var hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        var days = Math.floor(total / (1000 * 60 * 60 * 24));
        // вывод объектов
        return {
            'total': total,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            // 'seconds': seconds
        };
    }

    // инициализация таймера на самом сайте
    function setTime(id, timesup) {
        let timer = document.getElementById(id),
            days = document.querySelectorAll('.days'),
            hours = document.querySelectorAll('.hours'),
            minutes = document.querySelectorAll('.minutes'),
            // обновление таймера каждые 1000мс
            timeInterval = setInterval(update, 0);

        function update() {
            // результат функции getDateRemaining
            let total = getDateRemaining(timesup);
            // Проверка на ноль
            var nowdate = Date.now();
            if (nowdate <= Date.parse(endTimeLotomania)) {
                var nowdate = Date.now();
                days.forEach(e => {
                    e.textContent = makeCorrectDate(total.days);
                })
                hours.forEach(e => {
                    e.textContent = makeCorrectDate(total.hours);
                })
                minutes.forEach(e => {
                    e.textContent = makeCorrectDate(total.minutes);
                })

            } else {
                days.textContent = 0;
                hours.textContent = 0;
                minutes.textContent = 0;
            }

        }
    }
    setTime('timerEnd', endTimeLotomania);
}, 1000);
