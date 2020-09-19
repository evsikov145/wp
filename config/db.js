const Sequelize = require("sequelize");

const sequelize = new Sequelize( process.env.db, process.env.user, process.env.password, {
    dialect: "mysql",
    host: "localhost",
    define: {
        timestamps: false
    }
});

export default sequelize;

