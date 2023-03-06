let a;
let date;
let time;

setInterval(() => {
    a = new Date();
    time = a.getHours() + " : " + a.getMinutes() + " : " + a.getSeconds();
    document.getElementById('time').innerHTML = time ;
}, 1000);

let b = new Date();
const options = { weekday: 'long', year: 'numeric', month:'long', day: 'numeric'};
date = b.toLocaleDateString(undefined, options);
document.getElementById('date').innerHTML = date ;

