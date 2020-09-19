import sequelize from "../db";
const {DataTypes} = require("sequelize");

const Pages = sequelize.define("pages", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    head1: {
        type: DataTypes.TEXT
    },
    head2: {
        type: DataTypes.TEXT
    },
    head3: {
        type: DataTypes.TEXT
    },
    desc: {
        type: DataTypes.TEXT
    }
});

sequelize.sync().then(result=>{

})
    .catch(err=> console.log(err));

/*Pages.create({
    id: 'main',
    head1: 'Рубцова',
    head2: "Елена",
    head3: "Свадебный фотограф",
    desc: "Фотографии сделанные с душой"
}).then((result) => {

})
    .catch(err => {
        console.log(err)
    })*/

export default Pages;