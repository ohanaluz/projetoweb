const express = require('express');
const {engine} = require('express-handlebars');

const app = express();

app.engine('.handlebars', engine({
    defaultLayout: 'layout',
    layoutDir: __dirname + '/views/layouts'
}));
app.set ('view engine', 'handlebars');

app.get ('/', (req, res)=>{
    res.render('index');
});

app.get ('/consultar', (req, res)=>{
    res.render('consultar');
});

app.get ('/atualizar', (req, res)=>{
    res.render('atualizar');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log ('Servidor rodando')
})