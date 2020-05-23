const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name =  document.getElementById('name');
const goal = document.getElementById('goal');

function showTime() {
    let today = new Date(),
        hour  = today.getHours(),
        min   = today.getMinutes();

    time.textContent = `${ addZero(hour) }:${ addZero(min) }`

    setTimeout(showTime, 60000);
}

function addZero(n) { 
    return n < 10 ? '0' + `${n}` : `${n}`;
}

function setElements() {
    let today = new Date(),
        hour  = today.getHours();

    if(hour > 2 && hour < 12) {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = 'black'
        greeting.textContent = 'good morning';
    } else if(hour >= 12 && hour < 16) {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = 'black'
        greeting.textContent = 'good afternoon';
    } else { 
        document.body.style.backgroundColor = '#000';
        document.body.style.color = 'white'
        greeting.textContent = 'good evening'
    } 

    setTimeout(setElements, 1000);
}

function getName() {
    if(localStorage.getItem('name') == null || localStorage.getItem('name') == '') {
        name.textContent = '[enter name]';
        name.style.opacity = 0.4;
    } else {
        name.textContent = localStorage.getItem('name');
        name.style.opacity = 1;
    }
}

function setName(e) { 
    if(e.type === 'keypress') {
        localStorage.setItem('name', e.target.innerText);
        if(e.which == 13 || e.keyCode == 13) {
            name.blur();
            // goal.focus();
            getName();
        }
    }
}

function getGoal() {
    if(localStorage.getItem('goal') == null || localStorage.getItem('goal') == '') {
        goal.textContent = '[enter goal]';
        goal.style.opacity = 0.4;
    } else {
        goal.textContent = localStorage.getItem('goal');
        goal.style.opacity = 0.7;
    }
}

function setGoal(e) { 
    if(e.type === 'keypress') {
        localStorage.setItem('goal', e.target.innerText);
        if(e.which == 13 || e.keyCode == 13) {
            goal.blur();
            getGoal();
        }
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

goal.addEventListener('keypress', setGoal);
goal.addEventListener('blur', getGoal);

showTime();
setElements();
getName();
getGoal();
