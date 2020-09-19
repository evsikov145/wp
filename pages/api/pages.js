export default function pages(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
        message: req.query.message ?? 'Base message'
    }))
}