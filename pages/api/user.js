import User from '../../config/models/User'

export default (req, res) => {
    User.findAll()
        .then(users => {
            if(!users){
                res.status(500)
                res.end()
            }else {
                res.setHeader('Content-Type', 'application/json')
                res.status(200).json(users)
            }
        }).catch(err=>console.log(err));
}

