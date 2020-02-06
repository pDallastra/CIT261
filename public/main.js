// PART I //

function checkCompletion() {
    var name = document.querySelector('#name').value;
    var contact = document.querySelector('#contact').value
    var els = [];
    els[0] = name;
    els[1] = contact;
    var isDone = [];

    els.forEach(el => {
        if(el !== '' && typeof(el) !== undefined) {
            isDone.push(true);
            document.querySelector('#submit-button').style.background = '#ff6900';
            document.querySelector('#submit-button').style.border = 'none';
        } else {
            isDone.push(false);
        }
    })

    if(isDone.includes(false)) {
        document.querySelector('#submit-button').style.background = 'transparent';
        document.querySelector('#submit-button').style.border = 'solid 1px';
    }
}

const xhr = new XMLHttpRequest();

xhr.onload = function() {
    const parsedObj = JSON.parse(this.responseText);
    
    parsedObj.people.forEach(element => {
        const add = document.getElementById('topic4');
        let newPara = document.createElement('p');
        newPara.textContent = 'Name: ' + element.name;
        console.log(newPara);
        add.appendChild(newPara);
    });

}

xhr.open('get', 'http://api.open-notify.org/astros.json');
xhr.send()