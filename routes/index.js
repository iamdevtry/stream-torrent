let express = require('express');

let router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', {
        base_url: process.env.BASE_URL,
    });
});
module.exports = router;
