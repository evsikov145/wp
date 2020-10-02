import Pages from '../../../config/models/Pages'

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

