import User from '../../../config/models/User'

export default (req, res) => {
    const user = req.body.user;
    if(req.method === 'POST' && user){
        User.findOne({where:{login: user}, raw: true })
            .then(user => {
                if(user.length === 0){
                    res.status(500)
                    res.end()
                }else {
                    res.setHeader('Content-Type', 'application/json')
                    res.status(200).json(user)
                }
            }).catch(err=>console.log(err));
    }else {
        User.findAll({ raw: true })
            .then(user => {
                if(user.length === 0){
                    res.status(500)
                    res.end()
                }else {
                    res.setHeader('Content-Type', 'application/json')
                    res.status(200).json(user)
                }
            }).catch(err=>console.log(err));
    }

}

