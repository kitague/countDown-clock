function doIt() {

    setInterval(function countdown() {

    now = new Date();

    then = Date.parse(document.getElementById("date").value);

    daysLeft = then - now;

    daysLeft = then - now;

    days = Math.floor(daysLeft / (1000*60*60*24));

    hours = Math.floor(daysLeft / (1000*60*60));

    minutes = Math.floor(daysLeft / (1000*60));

    seconds = Math.floor(daysLeft / (1000));

    d = days;

    h = hours - days * 24;

    m = minutes - hours * 60;

    s = seconds - minutes * 60;

    document.getElementById("countdown").innerHTML = d + ' ' + ' days '  + ' ' + h + ' ' + 'hours ' + m + ' '  + 'minutes ' + s + ' ' + 'seconds ';

}, 100);

}