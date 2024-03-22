const db = require("./banco")

const Agendamentos = db.sequelize.define("agendamentos",{
    nome:{
        type: db.Sequelize.STRING
    },
    telefone:{
        type: db.Sequelize.INTEGER
    },
    origem:{
        type: db.Sequelize.STRING
    },
    data_contato:{
        type: db.Sequelize.DATE
    },
    observacao:{
        type: db.Sequelize.TEXT
    }
})

//Agendamentos.sync({force: true})

module.exports = Agendamentos