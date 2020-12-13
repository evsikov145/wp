import User from '../../../config/models/User'

export default (req, res) => {

    const {login} = req.body;

    User.destroy({
        where: {
            login: login
        }
    }).then(() => {
        res.status(200)
    }).catch(()=> {
        res.status(500)
    });
}

