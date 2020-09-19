import Pages from '../../config/models/Pages'
import sequelize from "../../config/db";

export default (req, res) => {
    Pages.findByPk('main')
        .then(page => {
            if(!page){
                res.status(500)
                res.end()
            }else {
                res.setHeader('Content-Type', 'application/json')
                res.status(200).json(page)
            }
        }).catch(err=>console.log(err));
}


/*import connection from '../../config/db';

export default (req, res) => {

    if(req.method === "GET"){
        connection.query("SELECT * FROM pages", (err, results) => {
            if(err){
                console.log(err);
                res.status(500)
                res.end()
            }else {
                res.setHeader('Content-Type', 'application/json')
                res.status(200).json(results)
            }
        });
    }
}*/

