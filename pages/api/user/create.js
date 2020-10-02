import User from '../../../config/models/User'

export default (req, res) => {

    const {login, password} = req.body;

    User.create({
         login: login,
         password: password
     }).then(()=>{
        res.status(200)
     }).catch(()=>{
         res.status(500)
         res.end()
     });
}

