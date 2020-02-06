const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const fs = require('fs');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.get('/' ,function(req, res){
    res.render('index');
});

app.get('/part1', function(req, res) {
    let people;

    if(typeof(people) == 'undefined') {
        fs.readFile('./test.json', (err, data) => {
            people = JSON.parse(data);
            console.log(people);
            res.render('part1', {people : people});
        })
    }
});

app.post('/part1', function(req, res){
    const user = {
        name : req.body.name,
        contact : req.body.contact
    }

    const userToJSON = JSON.stringify(user);

    fs.writeFileSync('./test.json', userToJSON);

    res.redirect('part1');

});

app.get('/part2', function(req, res) {
    res.render('part2');
});

app.get('/part3', function(req, res) {
    res.render('part3');
});

app.get('/part4', function(req, res) {
    res.render('part4');
});

app.listen(3000, function() {
    console.log('server running on port 3000');
})