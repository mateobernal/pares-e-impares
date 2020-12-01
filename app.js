const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

let num = [];

for(let i = 1; i <= 50; i++){
    if (i % 2 === 0){
        num[i] = i + ' Soy Par!'
    }else{
        num[i] = i + ' Soy Impar!'
    }
}

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'), 
}));


app.set('view engine', 'handlebars');
app.set('etag', false);


app.get('/', (req, res) =>{
    res.render('home', {
        num
    });
});


app.listen(3000, () => console.log ('Listening on port 3000'));
