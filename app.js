const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine
const bodyParser = require("body-parser")
const post = require("./models/post")
app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.get("/", function(req, res){
    res.render("primeira_pagina")
})
app.post("/cadastrar", function(req, res){
    post.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        origem: req.body.origem,
        data_contato: req.body.data_contato,
        observacao: req.body.observacao
    }).then(function(){
        res.redirect("/")
    }).catch(function(erro){
        res.send("Falha ao cadastrar os dados: " + erro)
    })
})
app.get("/consulta", function(req, res){
    post.findAll().then(function(posts){
        res.render("consulta", {post: posts})
    }).catch(function(erro){
        res.send("Falha ao consultar os dados: " + erro)
    })
})
app.get("/editar/:id", function(req, res){
    post.findAll({where: {"id": req.params.id}}).then(function(posts){
        res.render("editar", {post: posts})
    }).catch(function(erro){
        res.send("Falha ao acessar a pagina editar: " + erro)
    })
})
app.post("/atualizar", function(req, res){
    post.update({
        nome: req.body.nome,
        telefone: req.body.telefone,
        origem: req.body.origem,
        data_contato: req.body.data_contato,
        observacao: req.body.observacao
    }, {where: {id: req.body.id}}).then(function(){
        res.redirect("/consulta")
    }).catch(function(erro){
        res.send("Falha ao atualizar os dados: " + erro)
    })
})
app.listen(8081, function(){
    console.log("Servidor ativo!")
})