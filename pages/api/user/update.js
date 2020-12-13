import User from '../../../config/models/User'

export default (req, res) => {

    const {oldLogin ,login, password} = req.body;

    User.update({ login: login, password: password }, {
        where: {
            login: oldLogin
        }
    }).then(() => {
        res.status(200)
    }).catch(() => {
        res.status(500)
    })
}

