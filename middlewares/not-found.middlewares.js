module.exports = (req, res, next) => {
    return res.status(404).send({message: 'page not found!!'});
}