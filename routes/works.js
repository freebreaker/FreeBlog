var express = require('express');
var router = express.Router();

// GET /signin 登录页
router.get('/',function(req, res, next) {
  res.render('works');
});

router.get('/music',function(req,res,next){
  res.render('music')
})

module.exports = router;