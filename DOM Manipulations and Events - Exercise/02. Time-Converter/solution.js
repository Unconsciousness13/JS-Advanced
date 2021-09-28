function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let daysButoon = document.getElementById('daysBtn');
    let hoursButoon = document.getElementById('hoursBtn');
    let minutesButoon = document.getElementById('minutesBtn');
    let secondsButoon = document.getElementById('secondsBtn');






    daysButoon.addEventListener('click', () => {
        let daysValue = Number(days.value);
        hours.value = daysValue * 24;
        minutes.value = daysValue * 60 * 24;
        seconds.value = daysValue * 60 * 60 * 24;
    })

    hoursButoon.addEventListener('click', () => {
        let hoursValue = Number(hours.value);
        days.value = hoursValue / 24;
        minutes.value = hoursValue * 60;
        seconds.value = hoursValue * 60 * 60;
    })

    minutesButoon.addEventListener('click', () => {
        let minutesValue = Number(minutes.value);
        hours.value = minutesValue / 60;
        days.value = minutesValue / 60 / 24;
        seconds.value = minutesValue * 60;
    })

    secondsButoon.addEventListener('click', () => {
        let secondsValue = Number(seconds.value);
        hours.value = secondsValue / 3600;
        minutes.value = secondsValue / 60;
        days.value = secondsValue / 60 / 60 / 24;
    })




}