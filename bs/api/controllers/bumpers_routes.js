const bumpersRouter = require('express').Router();
const bumpers = require('../db/bumpers');

bumpersRouter.all('/', (req, res, next) => {
    let i=0;
    let locStore = req.headers.localstore;
    console.log(locStore, 'let locstore', typeof locStore)
    for(let bumper of bumpers) {
        bumper.id = i;
        if(req.headers.localStore) {
            bumper.inCart = true;
        } else {
            bumper.inCart = false;
        }
        i++;
    }
    console.log(req.headers.localstore.cartItemLocal, 'storloc')
    next()
})
bumpersRouter.get('/', (req, res) => {
    // res.set('Content-Type', 'application/json')
    console.log('get: stringify');
    console.log(bumpers[5], 'bumers -0')
    res.send(bumpers);
});
bumpersRouter.post('/', (req, res) => {
    // res.set('Content-Type', 'application/json')
    console.log('post: json')
    res.json(bumpers);
})

module.exports = bumpersRouter;